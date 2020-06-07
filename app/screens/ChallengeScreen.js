import React, { useState } from "react";
import {
  Container,
  Header,
  Content,
  Body,
  Title,
  Text,
  Left,
  Right,
  Spinner,
  Icon,
  Button,
} from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "react-native";
import PhotoCard from "../components/PhotoCard";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";

GLOBAL = require("../global");
const axios = require("axios").default;

export default function ChallengeScreen({ route, navigation }) {
  let [image, setImage] = useState(null);
  let [img64, setImg64] = useState(null);
  let [imageURL, setImageURL] = useState(null);
  let [accuracy, setAccuracy] = useState(0);
  let [loading, setLoading] = useState(false);

  const { photo } = route.params;

  const getPickerPermission = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
  };

  const getCameraPermission = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      if (status !== "granted") {
        alert("Sorry, we need camera permissions to make this work!");
      }
    }
  };

  const pickImage = async () => {
    try {
      await getPickerPermission();
      let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        base64: true,
        quality: 1,
      });
      if (!result.cancelled) {
        setImage(result.uri);
        setImg64(result.base64);
      }
    } catch (E) {
      console.log(E);
    }
  };

  const takeImage = async () => {
    try {
      await getCameraPermission();
      let result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        base64: true,
        quality: 1,
      });
      if (!result.cancelled) {
        setImage(result.uri);
        setImg64(result.base64);
      }
    } catch (E) {
      console.log(E);
    }
  };

  const getAccuracy = async () => {
    try {
      const result = await axios(
        `https://hack-the-ne-ml.wl.r.appspot.com/score?p1=${imageURL}&p2=${photo.originalArt}`
      );
      setAccuracy(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  const cloudinaryUpload = async () => {
    const data = new FormData();
    data.append("file", "data:image/jpeg;base64," + img64);
    data.append("upload_preset", "hack-the-ne");
    data.append("cloud_name", "hack-the-ne");
    //console.log(data);
    await fetch("https://api.cloudinary.com/v1_1/hack-the-ne/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setImageURL(data.secure_url);
        console.log("done");
      })
      .catch((err) => {
        console.log("An Error Occured While Uploading");
        console.log(err);
      });
  };

  const addPhoto = async () => {
    setLoading(true);
    await cloudinaryUpload();
    await getAccuracy();
    console.log(imageURL);

    const photoInfo = {
      userID: GLOBAL.googleID,
      challengeID: photo._id,
      userPhoto: imageURL,
      originalArt: photo.originalArt,
      accuracy: accuracy,
      mode: "default",
      votes: 0,
    };

    try {
      axios
        .post(`https://hack-the-ne.appspot.com/api/v1/photos`, photoInfo)
        .then(() => {
          setLoading(false);
          navigation.navigate("Home");
        });
    } catch (err) {
      console.log(err);
    }
  };

  const uploadPhoto = () => {
    setLoading(true);
    const data = new FormData();
    data.append("file", "data:image/jpeg;base64," + img64);
    data.append("upload_preset", "hack-the-ne");
    data.append("cloud_name", "hack-the-ne");
    //console.log(data);
    fetch("https://api.cloudinary.com/v1_1/hack-the-ne/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setImageURL(data.secure_url);
        axios(
          `https://hack-the-ne-ml.wl.r.appspot.com/score?p1=${data.secure_url}&p2=${photo.originalArt}`
        );
      })
      .then((res) => {
        //setAccuracy(res.data);
        const photoInfo = {
          userID: GLOBAL.googleID,
          challengeID: photo._id,
          userPhoto: imageURL,
          originalArt: photo.originalArt,
          accuracy: res.data,
          mode: "default",
          votes: 0,
        };
        return axios.post(
          `https://hack-the-ne.appspot.com/api/v1/photos`,
          photoInfo
        );
      })
      .then(() => {
        setLoading(false);
        navigation.navigate("Home");
      });
  };

  return (
    <Container>
      <Header>
        <Left>
          <Button onPress={() => navigation.goBack()}>
            <Icon name="md-arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>RecreArt</Title>
        </Body>
        <Right>
          <Icon name="md-brush" />
        </Right>
      </Header>
      <LinearGradient
        colors={["#6A9ECF", "#9FC0DF", "#c4ddf5"]}
        style={{ flex: 1 }}
      >
        <Content padder>
          <Image
            source={{
              uri: photo.originalArt,
            }}
            style={{ height: 300, width: null, flex: 1 }}
          />
          <Body style={{ flex: 1, flexDirection: "column" }}>
            <Body style={{ margin: 10 }}>
              <Button onPress={() => navigation.navigate("AR")}>
                <Text> AR Photobooth </Text>
              </Button>
            </Body>
            <Body style={{ flex: 1, flexDirection: "row", marginTop: -5 }}>
              <Button onPress={pickImage} style={{ margin: 10 }}>
                <Text> Upload Photo </Text>
              </Button>
              <Button onPress={takeImage} style={{ margin: 10 }}>
                <Text> Take a Picture </Text>
              </Button>
            </Body>
          </Body>
          {image && !loading && (
            <Body style={{ flex: 1, flexDirection: "row" }}>
              <Image
                source={{ uri: image }}
                style={{ width: 300, height: 300, margin: 10 }}
              />
              <Button onPress={uploadPhoto} transparent>
                <Icon name="ios-arrow-dropright-circle" />
              </Button>
            </Body>
          )}
          {loading && (
            <Body style={{ flex: 1, flexDirection: "row" }}>
              <Spinner color="black" />
            </Body>
          )}
          {photo.photos.map(function (photo, i) {
            return <PhotoCard photo={photo} key={i} />;
          })}
        </Content>
      </LinearGradient>
    </Container>
  );
}

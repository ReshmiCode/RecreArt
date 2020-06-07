import React, {useState, useEffect} from "react";
import {
  Container,
  Header,
  Content,
  Body,
  Title,
  Text,
  Left,
  Right,
  Icon,
  Button
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
  let [imageBase, setImageBase] = useState(null);
  let [loading, setLoading] = useState(false);

  const { photo } = route.params;
  console.log("photo");
  console.log(photo);

  const removePic = () => {
    setImage(null);
    setImageBase(null);
  };

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
        setImageBase(result.base64);
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
        setImageBase(result.base64);
      }
    } catch (E) {
      console.log(E);
    }
  };

  const addPhoto = async () => {
    const photoInfo = {
      userID: GLOBAL.googleID,
      challengeID: photo._id,
      userPhoto: image,
      originalArt: photo.originalArt,
      accuracy: "0%",
      mode: "default",
      votes: 0
    }

    try {
      const response = await axios.post(
        `https://hack-the-ne.appspot.com/api/v1/photos`,
        photoInfo
      );
      setLoading(false);
      //Navigate to Profile
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Container>
      <Header>
        <Left></Left>
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
        <Button onPress={pickImage}>
          <Title> Upload Photo </Title>
        </Button>
        <Button onPress={takeImage}>
          <Title> Take a Picture </Title>
        </Button>
        {image ? (
            <Image
              source={{ uri: image }}
              style={{ width: 300, height: 300, marginVertical: 10 }}
            />
          ) : (
            <Image
              source={{ uri: photo.originalArt }}
              style={{ height: 250, width: 250, flex: 1 }}
            />
          )
        }
        {image &&
          (loading ? (
            <Spinner color="green" />
          ) : (
            <Button onPress={addPhoto}>
              <Title> Submit </Title>
            </Button>
          ))
        }
        { photo.photos.map(function (photo, i) {
            return (
              <PhotoCard photo={ photo } key={ i }/>
            );
        })}
        </Content>
      </LinearGradient>
    </Container>
  );
}

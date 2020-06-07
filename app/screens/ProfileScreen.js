import React, { useState, useEffect } from "react";
import {
  Container,
  Header,
  Content,
  Body,
  Title,
  Text,
  Thumbnail,
  Left,
  Right,
  Icon,
  Button,
} from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import PortfolioCard from "../components/PortfolioCard";
import * as Google from "expo-google-app-auth";
import { Image } from "react-native";

import {
  ANDROID_CLIENT_ID,
  IOS_CLIENT_ID,
  ANDROID_APK_CLIENT_ID,
  IOS_APP_CLIENT_ID,
} from "../config";

GLOBAL = require("../global");
const axios = require("axios").default;

export default function ProfileScreen(props) {
  let [userInfo, setUserInfo] = useState({});
  let [userPhotos, setUserPhotos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios(
        `https://hack-the-ne.appspot.com/api/v1/users/${GLOBAL.googleID}`
      );
      setUserInfo(result.data.data[0]);
      setUserPhotos(result.data.data[0].photos);
      //console.log("UserInfo");
    }
    fetchData();
    //console.log(userInfo.photos.length);
  }, []);

  const signOutWithGoogle = async () => {
    try {
      const { type, accessToken, user } = await Google.logOutAsync({
        accessToken: GLOBAL.accessToken,
        iosClientId: IOS_CLIENT_ID,
        androidClientId: ANDROID_CLIENT_ID,
        androidStandaloneAppClientId: ANDROID_APK_CLIENT_ID,
        iosStandaloneAppClientId: IOS_APP_CLIENT_ID,
        scopes: ["profile", "email"],
      });

      console.log(type);
      if (type === "success" || type === "default") {
        GLOBAL.googleID = "";
        GLOBAL.username = "";
        GLOBAL.profilePic = "";
        GLOBAL.accessToken = "";
        GLOBAL.databaseID = "";

        console.log("Signed Out");
        props.navigation.navigate("LogIn");
        return accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      console.log("Error with SignOut", e);
      return { error: true };
    }
  };

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
          <Body>
            <Title>
              <Text style={{ fontSize: 25, fontWeight: "bold" }}>Profile</Text>
            </Title>
          </Body>
          <Body style={{ flex: 1, flexDirection: "row", marginBottom: 20 }}>
            <Thumbnail
              source={{
                uri: userInfo.profilePic,
              }}
              style={{ height: 120, width: 100, flex: 0.5 }}
            />
            <Body>
              <Title>
                <Text style={{ fontSize: 20 }}>{userInfo.userName}</Text>
              </Title>
              <Title>
                <Text style={{ fontSize: 20 }}>
                  {userPhotos.length} creations
                </Text>
              </Title>
              <Button onPress={signOutWithGoogle}>
                <Text> Logout </Text>
              </Button>
            </Body>
          </Body>
          <Body>
            <Title>
              <Text style={{ fontSize: 25, fontWeight: "bold" }}>
                Your Portfolio
              </Text>
            </Title>
          </Body>
          {userPhotos.length == 0 && (
            <Body>
              <Text>No photos added yet.</Text>
            </Body>
          )}
          {userPhotos.map(function (photo, i) {
            return <PortfolioCard photo={photo} key={i} />;
          })}
        </Content>
      </LinearGradient>
    </Container>
  );
}

import React from "react";
import * as Google from "expo-google-app-auth";
import { Thumbnail, Button, Text, View } from "native-base";
import Swiper from "react-native-swiper";
import { Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import logo from "../assets/images/logo.png";

import {
  ANDROID_CLIENT_ID,
  IOS_CLIENT_ID,
  ANDROID_APK_CLIENT_ID,
  IOS_APP_CLIENT_ID,
} from "../config";

GLOBAL = require("../global");
const axios = require("axios").default;

var styles = {
  wrapper: {},
  slides: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    height: 236,
    width: 420,
    //justifySelf: "center",
  },
  textStyle: {
    color: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  GoogleStyle: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#4285F4",
    borderWidth: 1,
    borderColor: "#4285F4",
    borderRadius: 6,
    margin: 5,
    padding: 10,
    elevation: 10,
  },
};

export default function SwiperComponent(props) {
  GLOBAL.googleID = "";
  GLOBAL.username = "";
  GLOBAL.profilePic = "";
  GLOBAL.databaseID = "";

  const newProfile = () => {
    const newUser = {
      googleID: GLOBAL.googleID,
      userName: GLOBAL.username,
      profilePic: GLOBAL.profilePic,
    };

    axios
      .get(`https://hack-the-ne.appspot.com/api/v1/users/${newUser.googleID}`)
      .then(function (response) {
        if (response.data.data.length == 0) {
          axios
            .post("https://hack-the-ne.appspot.com/api/v1/users", {
              googleID: newUser.googleID,
              userName: newUser.userName,
              profilePic: newUser.profilePic,
            })
            .then(function (response) {
              //console.log(response);
              GLOBAL.databaseID = response.data.data._id;
            })
            .catch(function (error) {
              console.log(error);
            });
        } else {
          GLOBAL.databaseID = response.data.data[0]._id;
        }
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  };

  const signInWithGoogle = async () => {
    try {
      const { type, accessToken, user } = await Google.logInAsync({
        iosClientId: IOS_CLIENT_ID,
        androidClientId: ANDROID_CLIENT_ID,
        androidStandaloneAppClientId: ANDROID_APK_CLIENT_ID,
        iosStandaloneAppClientId: IOS_APP_CLIENT_ID,
        scopes: ["profile", "email"],
      });

      if (type === "success") {
        GLOBAL.googleID = user.id;
        GLOBAL.username = user.givenName;
        GLOBAL.profilePic = user.photoUrl;
        GLOBAL.accessToken = accessToken;

        newProfile();
        props.navigation.navigate("Root");
        return accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      console.log("Error with login", e);
      return { error: true };
    }
  };

  return (
    <LinearGradient
      colors={["#517ca4", "#87afd5", "#9FC0DF"]}
      style={{ flex: 1 }}
    >
      <View style={styles.slides}>
        <Image source={logo} style={styles.logo}></Image>
        <Button style={styles.GoogleStyle} onPress={signInWithGoogle}>
          <Thumbnail
            small
            source={{
              uri: "https://img.icons8.com/color/48/000000/google-logo.png",
            }}
            style={{ marginLeft: 9 }}
          />
          <Text style={(styles.TextStyle, { color: "#000" })}>
            Sign In With Google
          </Text>
        </Button>
      </View>
    </LinearGradient>
  );
}

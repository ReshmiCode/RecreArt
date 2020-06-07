import React from "react";
import * as Google from "expo-google-app-auth";
import { Thumbnail, Button, Text, View } from "native-base";
import Swiper from "react-native-swiper";

import { ANDROID_CLIENT_ID, IOS_CLIENT_ID , ANDROID_APK_CLIENT_ID , IOS_APP_CLIENT_ID} from "../config";

GLOBAL = require("../global");
const axios = require("axios").default;

var styles = {
  wrapper: {},
  slides: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  natureDex: {
    flex: 1,
    alignSelf: "center",
  },
  desc: {
    flex: 2,
    textAlign: "center",
    color: "#0c4210",
    fontSize: 30,
    fontWeight: "bold",
    padding: 8,
    paddingTop: 10,
    fontFamily: "PlayfairDisplay",
  },
  loginDesc: {
    flex: 1.5,
    textAlign: "center",
    color: "#0c4210",
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "PlayfairDisplay",
  },
  icon: {
    flex: 1.7,
    width: 230,
    height: 230,
  },
  textStyle: {
    color: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  GoogleStyle: {
    flex: .2,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#4285F4",
    borderWidth: 1,
    borderColor: "#4285F4",
    borderRadius: 5,
    margin: 5,
    padding:10
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
            profilePic: GLOBAL.profilePic
        };


        axios
        .get("https://hack-the-ne.appspot.com/api/v1/users/api/v1/users/${newUser.googleID}")
        .then(function (response) {
            if (response.data.data.length == 0) {
            axios
                .post("https://hack-the-ne.appspot.com/api/v1/users", {
                    googleID: newUser.googleID,
                    userName: newUser.userName,
                    profilePic: newUser.profilePic,
                })
                .then(function (response) {
                    console.log(response);
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
        <View style={[styles.slides, { backgroundColor: "#B4CDD0" }]}>
            <Button style={styles.GoogleStyle} onPress={signInWithGoogle}>
            <Thumbnail
                small
                source={{
                uri: "https://img.icons8.com/color/48/000000/google-logo.png",
                }}
                style={{ marginLeft: 9 }}
            />
            <Text style={styles.TextStyle, { color: '#000' }}>Sign In With Google</Text>
            </Button>
        </View>
    );
}
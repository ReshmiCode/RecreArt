import React from "react";
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
  Button,
} from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import PortfolioCard from "../components/PortfolioCard";
import * as Google from "expo-google-app-auth";

import { ANDROID_CLIENT_ID, IOS_CLIENT_ID , ANDROID_APK_CLIENT_ID , IOS_APP_CLIENT_ID} from "../config";

GLOBAL = require("../global");
const axios = require("axios").default;

var styles = {
  button: {
    width: 370,
    margin: 10,
    justifyContent: "center",
  },
};

export default function ProfileScreen(props) {
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
          <Body>
            <Title>
              <Text style={{ fontSize: 25, fontWeight: "bold" }}>
                Your Portfolio
              </Text>
            </Title>
          </Body>
          <PortfolioCard />
          <Button style={styles.button} onPress={signOutWithGoogle}>
            <Title> Logout </Title>
          </Button>
        </Content>
      </LinearGradient>
    </Container>
  );
}

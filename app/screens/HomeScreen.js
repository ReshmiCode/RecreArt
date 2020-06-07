import React, { useState, useEffect } from "react";
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
  Card,
  CardItem,
} from "native-base";
import { Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import ChallengeCard from "../components/ChallengeCard";

GLOBAL = require("../global");
const axios = require("axios").default;

export default function HomeScreen(props) {
  let [challenges, setChallenges] = useState([]);
  let [globalChallenge, setGlobalChallenge] = useState({});

  useEffect(() => {
    async function fetchData() {
      const result = await axios(
        "https://hack-the-ne.appspot.com/api/v1/challenges"
      );

      setGlobalChallenge(result.data.data[0]);
      setChallenges(result.data.data);
    }
    fetchData();
    console.log(challenges);
  }, []);

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
              <Text style={{ fontSize: 25, fontWeight: "bold" }}>
                Global Challenge
              </Text>
            </Title>
          </Body>
          <ChallengeCard
            photo={globalChallenge}
            navigation={props.navigation}
          />
          <Body style={{ paddingTop: 15 }}>
            <Title>
              <Text style={{ fontSize: 25, fontWeight: "bold" }}>
                All Challenges
              </Text>
            </Title>
          </Body>
          {challenges.map(function (photo, i) {
            return (
              <ChallengeCard photo={photo} navigation={props.navigation} />
            );
          })}
        </Content>
      </LinearGradient>
    </Container>
  );
}

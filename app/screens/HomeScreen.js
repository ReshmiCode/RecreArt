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
} from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import ChallengeCard from "../components/ChallengeCard";

export default function HomeScreen(props) {
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
                Daily Challenge
              </Text>
            </Title>
          </Body>
          <ChallengeCard />
          <Body>
            <Title>
              <Text style={{ fontSize: 25, fontWeight: "bold" }}>
                Weekly Challenges
              </Text>
            </Title>
          </Body>
          <ChallengeCard />
          <ChallengeCard />
          <ChallengeCard />
        </Content>
      </LinearGradient>
    </Container>
  );
}

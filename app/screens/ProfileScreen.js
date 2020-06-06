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

var styles = {
  button: {
    width: 370,
    margin: 10,
    justifyContent: "center",
  },
};

export default function ProfileScreen(props) {
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
          <Button style={styles.button}>
            <Title> Logout </Title>
          </Button>
        </Content>
      </LinearGradient>
    </Container>
  );
}

import React from "react";
import { Container, Header, Content, Body, Title, Text } from "native-base";
import { LinearGradient } from "expo-linear-gradient";

export default function HomeScreen(props) {
  return (
    <Container>
      <Header>
        <Body>
          <Title>Feed</Title>
        </Body>
      </Header>
      <LinearGradient
        colors={["#6A9ECF", "#9FC0DF", "#c4ddf5"]}
        style={{ flex: 1 }}
      >
        <Content padder>
          <Text>hewwo</Text>
        </Content>
      </LinearGradient>
    </Container>
  );
}

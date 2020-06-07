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
  Button
} from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "react-native";
import PhotoCard from "../components/PhotoCard";

export default function ChallengeScreen({ route, navigation }) {
  const { photo } = route.params;
  console.log("photo");
  console.log(photo);
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
        <Button>
          <Title> Upload Photo </Title>
        </Button>
        <Button>
          <Title> Take a Picture </Title>
        </Button>
        <Button>
          <Title> Submit </Title>
        </Button>
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

import React from "react";
import { Card, CardItem } from "native-base";
import { Image } from "react-native";

export default function ChallengeCard(props) {
  return (
    <Card>
      <CardItem cardBody>
        <Image
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
          style={{ height: 300, width: null, flex: 1 }}
        />
      </CardItem>
    </Card>
  );
}

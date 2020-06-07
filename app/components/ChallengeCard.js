import React from "react";
import { Card, CardItem } from "native-base";
import { Image } from "react-native";

export default function ChallengeCard(props) {
  console.log(props.photo);
  return (
    <Card>
      <CardItem cardBody>
        <Image
          source={{
            uri: props.photo.originalArt,
          }}
          style={{ height: 300, width: null, flex: 1 }}
        />
      </CardItem>
    </Card>
  );
}

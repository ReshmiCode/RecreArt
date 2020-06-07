import React, { useState, useEffect } from "react";
import { Card, CardItem, Text, Body } from "native-base";
import { Image } from "react-native";

GLOBAL = require("../global");
const axios = require("axios").default;

export default function ChallengeCard(props) {
  let [photoInfo, setPhotoInfo] = useState({});
  let [photoVotes, setPhotoVotes] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const result = await axios(
        `https://hack-the-ne.appspot.com/api/v1/photos/${props.photo}`
      );
      setPhotoInfo(result.data.data);
      setPhotoVotes(result.data.data.votes);
    }
    fetchData();
  }, []);

  return (
    <Card>
      <CardItem cardBody>
        <Image
          source={{
            uri: photoInfo.originalArt,
          }}
          style={{ height: 300, width: null, flex: 1 }}
        />
      </CardItem>
      <CardItem cardBody>
        <Image
          source={{
            uri: photoInfo.userPhoto,
          }}
          style={{ height: 300, width: null, flex: 1 }}
        />
      </CardItem>
      <CardItem>
        <Body>
          <Text style={{ color: "#fff" }}>Accuracy: {photoInfo.accuracy}%</Text>
          {/* <Text style={{color: "#fff"}}>
                Mode: {photoInfo.mode}
              </Text> */}
          <Text style={{ color: "#fff" }}>Votes: {photoVotes}</Text>
        </Body>
      </CardItem>
    </Card>
  );
}

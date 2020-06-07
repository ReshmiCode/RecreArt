import React, { useState, useEffect } from "react";
import { Card, CardItem, Text, Body, Button } from "native-base";
import { Image } from "react-native";

GLOBAL = require("../global");
const axios = require("axios").default;

export default function PhotoCard(props) {
  let [photoInfo, setPhotoInfo] = useState({});
  let [photoVotes, setPhotoVotes] = useState(0);
  let [voted, setVoted] = useState(false);

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

  async function vote() {
    const currentVote = photoVotes + 1;
    setPhotoVotes(currentVote);
    await axios
      .patch(`https://hack-the-ne.appspot.com/api/v1/photos/${props.photo}`, {
        votes: currentVote,
      })
      .then(() => setVoted(true));
  }

  async function unvote() {
    const currentVote = photoVotes - 1;
    setPhotoVotes(currentVote);
    await axios
      .patch(`https://hack-the-ne.appspot.com/api/v1/photos/${props.photo}`, {
        votes: currentVote,
      })
      .then(() => setVoted(false));
  }

  return (
    <Card>
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
          <Text style={{ color: "#fff" }}>Accuracy: {photoInfo.accuracy}</Text>
          {/* <Text style={{color: "#fff"}}>
                Mode: {photoInfo.mode}
              </Text> */}
          <Text style={{ color: "#fff" }}>Votes: {photoVotes}</Text>
        </Body>
        {voted ? (
          <Button onPress={unvote}>
            <Text> Unvote </Text>
          </Button>
        ) : (
          <Button onPress={vote}>
            <Text> Vote </Text>
          </Button>
        )}
      </CardItem>
    </Card>
  );
}

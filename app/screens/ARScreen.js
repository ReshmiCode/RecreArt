import React from "react";
import * as WebBrowser from "expo-web-browser";
import {
  Container,
  Header,
  Content,
  Body,
  Title,
  Text,
  Button,
  Thumbnail,
  Left,
  Right,
  List,
  ListItem,
  Icon,
} from "native-base";
import { LinearGradient } from "expo-linear-gradient";

export default function ARScreen(props) {
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
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail
                  square
                  source={{
                    uri:
                      "https://lh3.googleusercontent.com/proxy/IkgAc0TcevRlbY1JMKNvmHyjj5lSGfnc32v-qTpk7yyl9XMsChLJ8U9IjT_EXhPH-SK51cy_UiHy8INwhkMzRyr9FxeazJg",
                  }}
                />
              </Left>
              <Body>
                <Text>Duck</Text>
              </Body>
              <Right>
                <Button
                  transparent
                  onPress={() =>
                    WebBrowser.openBrowserAsync(
                      "https://console.echoar.xyz/samples/webar-chrome/round-scene-4702_1591504929803/index_round-scene-4702_1591504929803.html"
                    )
                  }
                >
                  <Text>Use</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
        </Content>
      </LinearGradient>
    </Container>
  );
}

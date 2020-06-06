import React from "react";
import { Button, Icon, Footer, FooterTab } from "native-base";

export default function TabBar({ state, navigation }) {
  return (
    <Footer>
      <FooterTab>
        <Button
          active={state.index === 0}
          onPress={() => navigation.navigate("Home")}
        >
          <Icon name="ios-brush" />
        </Button>
        <Button
          active={state.index === 1}
          onPress={() => navigation.navigate("Profile")}
        >
          <Icon name="md-person" />
        </Button>
      </FooterTab>
    </Footer>
  );
}

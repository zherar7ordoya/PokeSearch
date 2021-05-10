import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, ImageBackground, Platform, Text, View } from "react-native";
import { Button } from "react-native-elements";

var myBackground = require("./assets/icons/landing.jpg");

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.container} source={myBackground}>
        <View style={styles.viewStyle}>
          <Text style={styles.titleStyle}>Welcome!</Text>
          <Button
            style={styles.buttonStyle}
            onPress={() => {}}
            title="Start searching"
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? 40 : 0,
  },
  viewStyle: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  titleStyle: {
    fontSize: 30,
    color: "blue",
    alignItems: "center",
  },
  buttonStyle: {
    margin: 10,
  },
};

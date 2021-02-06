import React from "react";
import { View, Text, Button, TextInput, Image, StyleSheet } from "react-native";

export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.circle}>
          <Text style={styles.txt}>vk </Text>
        </View>

        <Image style={styles.image} source={require("../assect/vkLOGo.jpg")} />
        <TextInput
          style={styles.input}
          placeholder="Username"
          autoCapitalize="none"
          placeholderTextColor="white"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor="white"
        />

        <Button title=" Login " onPress={this.signUp} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    width: "60%",
    height: 45,
    backgroundColor: "#42A5F5",
    margin: 10,
    padding: 8,
    color: "white",
    borderRadius: 14,
    fontSize: 18,
    fontWeight: "500"
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  txt: {
    textAlign: "center",
    backgroundColor: "none",
    fontSize: 30,
    lineHeight: 89,
    fontWeight: "bold",
    color: "#FF1493"
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    backgroundColor: "#663399"
  }
});

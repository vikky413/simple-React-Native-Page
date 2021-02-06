import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native-web";

export default () => {
  return (
    <View>
      <TouchableOpacity style={styles.main}>
        <Text style={styles.txt}> About Me </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.main}>
        <Text style={styles.txt}> Tecnical </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.main}>
        <Text style={styles.txt}> Qulification </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    marginTop: 20
  }
});

import React, { Component } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";

class LoadingScreen extends Component {
  state = {};
  render() {
    return (
      <View style={styles.root}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default LoadingScreen;

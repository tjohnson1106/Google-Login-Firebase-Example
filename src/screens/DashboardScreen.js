import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class DashboardScreen extends Component {
  state = {};
  render() {
    return (
      <View style={styles.root}>
        <Text>Dashboard Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default DashboardScreen;

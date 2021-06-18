import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";

const Screen = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
  },
});

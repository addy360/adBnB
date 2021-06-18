import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import Screen from "../components/Screen";

const HomeScreen = () => {
  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.input}>
            <AntDesign
              style={styles.inputIcon}
              name="search1"
              size={20}
              color="black"
            />
            <TextInput style={styles.inputText} placeholder="Seacrh ..." />
          </View>
        </View>
      </View>
    </Screen>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 80,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  input: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 1.5,
    marginHorizontal: 20,

    borderRadius: 0.5,
    marginTop: 10,
  },
  inputText: {
    flex: 1,
  },
  inputIcon: {
    padding: 10,
  },
});

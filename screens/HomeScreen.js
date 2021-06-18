import React from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import Screen from "../components/Screen";
import { getImages } from "../testData";
import CategoryItem from "../components/CategoryItem";

const HomeScreen = () => {
  const { height, width } = Dimensions.get("screen");
  const imgs = getImages();
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
        <ScrollView>
          <View style={{ flex: 1 }}>
            <Text
              style={{
                fontSize: 24,
                fontWeight: "bold",
                paddingHorizontal: 20,
                paddingVertical: 10,
              }}
            >
              What can we help you find?
            </Text>
            <View style={{ height: 130 }}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {imgs.map((uri, i) => (
                  <CategoryItem key={i} uri={uri} />
                ))}
              </ScrollView>
            </View>
            <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
              <Text style={{ fontSize: 24, fontWeight: "bold" }}>
                Introducing AplusPlus
              </Text>
              <Text style={{ fontSize: 14, fontWeight: "100" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
                itaque.
              </Text>
              <View
                style={{
                  height: 200,
                  width: width - 40,
                  marginTop: 20,
                  borderRadius: 10,
                  overflow: "hidden",
                }}
              >
                <Image
                  source={{ uri: imgs[0] }}
                  style={{ height: null, width: null, flex: 1 }}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </Screen>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {},
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

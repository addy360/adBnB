import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const CategoryItem = ({ uri }) => {
  return (
    <View
      style={{
        height: 130,
        width: 130,
        borderColor: "#d4d4d4",
        borderWidth: 1,
        borderRadius: 4,
        marginHorizontal: 10,
      }}
    >
      <View style={{ flex: 2 }}>
        <Image
          style={{
            flex: 1,
            width: null,
            height: null,
            resizeMode: "cover",
          }}
          loadingIndicatorSource={<Text>Loading...</Text>}
          source={{
            uri,
          }}
        />
      </View>
      <View
        style={{
          flex: 1,
          padding: 5,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Home</Text>
      </View>
    </View>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({});

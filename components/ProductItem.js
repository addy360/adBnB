import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";

const ProductItem = ({ uri }) => {
  const { height, width } = Dimensions.get("screen");

  return (
    <View
      style={{
        width: (width - 40) / 2,
      }}
    >
      <View
        style={{
          width: "100%",
          height: 100,
          backgroundColor: "red",
        }}
      >
        <Image
          style={{
            width: null,
            height: null,
            flex: 1,
            resizeMode: "cover",
          }}
          source={{ uri }}
        />
      </View>
      <Text>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
        dolores harum quas. Voluptatem quia reprehenderit aspernatur fuga quis
        nostrum ut.
      </Text>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({});

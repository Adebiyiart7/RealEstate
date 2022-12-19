import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../config/colors";

const ImageIcon = ({ image, size = 50 }) => {
  return (
    <View style={[styles.imageContainer, { height: size, width: size }]}>
      <Image style={{ width: size / 2.3, height: size / 2.3 }} source={image} />
    </View>
  );
};

export default ImageIcon;

const styles = StyleSheet.create({
  image: {},
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background200,
    borderRadius: 50
  }
});

import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../config/colors";

const Icon = React.memo(({ Icon, size = 50 }) => {
  return (
    <View style={[styles.imageContainer, { height: size, width: size }]}>
      {Icon}
    </View>
  );
})

export default Icon;

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

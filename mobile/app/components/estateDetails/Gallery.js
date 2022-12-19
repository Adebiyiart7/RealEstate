import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { useDimensions } from "@react-native-community/hooks";
import colors from "../../config/colors";
import AppText from "../AppText";

const Gallery = ({ item }) => {
  const { width: screenWidth } = useDimensions().screen;
  const imageWidth = (screenWidth - 64) / 3;

  return (
    <View style={styles.container}>
      {item.images.slice(0, 3).map((image, index) => (
        <ImageBackground
          key={index}
          source={image}
          style={[styles.image, { width: imageWidth, height: imageWidth, borderRadius: 10, }]}
        >
          {index == 2 && (
            <AppText style={styles.innerText}>
              {" "}
              +{item.images.length - 3}
            </AppText>
          )}
        </ImageBackground>
      ))}
    </View>
  );
};

export default Gallery;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 50
  },
  image: {
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00000099",
    overflow: "hidden",
  },
  innerText: {
    fontSize: 30,
    color: colors.white,
    fontWeight: "700",
    borderRadius: 30,
    padding: 5
  }
});
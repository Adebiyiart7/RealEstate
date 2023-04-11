import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { useWindowDimensions } from "react-native";
import colors from "../../config/colors";
import AppText from "../AppText";

const Gallery = ({ item }) => {
  const { width: screenWidth } = useWindowDimensions();
  const imageWidth = (screenWidth - 64) / 3;

  return (
    <View style={styles.container}>
      {item.images.slice(0, 3).map((image, index) => (
        <ImageBackground
          key={index}
          source={image}
          style={[styles.image, { width: imageWidth, height: imageWidth }]}
        >
          {index == 2 && (
            <View
              style={styles.opaqImage}
            />
          )}
          {index == 2 && (
            <AppText style={styles.innerText}>
              {" "}
              {item.images.length - 3}+
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
    overflow: "hidden"
  },
  innerText: {
    fontSize: 25,
    color: colors.white,
    fontWeight: "bold",
    zIndex: 1234,
  },
  opaqImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "#00000099"
  },
});

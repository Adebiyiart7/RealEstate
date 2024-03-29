import { ImageBackground, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

// LOCAL IMPORTS
import AppText from "../AppText";
import colors from "../../config/colors";
import { LIGHT, useTheme } from "../../contexts/ThemeContext";

const Card2 = React.memo(({ item }) => {
  const { state } = useTheme();
  const isLight = state.theme === LIGHT;
  const iconColor = colors[state.theme].primaryOrange;
  const textColor = { color: colors[state.theme].displayAsWhite };
  const textStyles = isLight ? styles.textsLight : styles.textsDark;
  const ratingStyles = isLight ? styles.ratingLight : styles.ratingDark;

  return (
    <View style={styles.card}>
      <ImageBackground
        resizeMode="cover"
        source={{ uri: item.image }}
        style={styles.backgroundImage}
      >
        <AppText style={[styles.rating, ratingStyles]}>
          <MaterialCommunityIcons name="star" size={14} color={iconColor} />
          {item.rating}
        </AppText>
        <View style={[styles.texts, textStyles]}>
          <AppText numberOfLines={1} style={[styles.firstText, textColor]}>
            {item.name}
          </AppText>
          <AppText numberOfLines={1} style={[styles.secondText, textColor]}>
            {item.location}
          </AppText>
          <View style={styles.footer}>
            <AppText style={[styles.f1, textColor]}>
              &#8358;{parseFloat(item.cost).toLocaleString()}
            </AppText>
            <AppText style={[styles.f2, textColor]}> / {item.duration}</AppText>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
});

export default Card2;

const styles = StyleSheet.create({
  backgroundImage: {
    height: 280,
    width: 200,
    borderRadius: 25,
    overflow: "hidden",
  },
  f1: {
    fontWeight: "bold",
    fontSize: 18,
  },
  f2: {
    fontWeight: "300",
  },
  firstText: {
    fontSize: 17,
    fontWeight: "bold",
  },
  footer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
  },
  secondText: {
    fontWeight: "300",
  },
  rating: {
    position: "absolute",
    top: 10,
    right: 10,
    borderRadius: 9,
    paddingVertical: 2.5,
    paddingHorizontal: 6,
    fontSize: 12,
    fontWeight: "bold",
  },
  ratingLight: {
    color: colors.light.primaryColor,
    backgroundColor: colors.dark.displayAsWhite,
  },
  ratingDark: {
    color: colors.dark.primaryColor,
    backgroundColor: colors.dark.displayAsWhite,
  },
  texts: {
    position: "absolute",
    bottom: 0,
    paddingHorizontal: 16,
    paddingVertical: 10,
    width: "100%",
  },
  textsLight: {
    backgroundColor: colors.light.mediumTransparentBackground,
  },
  textsDark: {
    backgroundColor: colors.dark.mediumTransparentBackground,
  },
});

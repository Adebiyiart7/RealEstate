import { ImageBackground, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

// LOCAL IMPORTS
import AppText from "../AppText";
import colors from "../../config/colors";

const Card2 = ({ item }) => {
  const [heartIcon, setHeartIcon] = useState("heart-outline");
  return (
    <View style={styles.card}>
      <ImageBackground
        resizeMode="cover"
        source={item.image}
        style={styles.backgroundImage}
      >
        <AppText style={styles.rating}>
          <MaterialCommunityIcons
            name="star"
            size={14}
            color={colors.primaryOrange}
          />
          {item.rating}
        </AppText>
        <View style={styles.texts}>
          <AppText numberOfLines={1} style={styles.firstText}>
            {item.name}
          </AppText>
          <AppText numberOfLines={1} style={styles.secondText}>
            {item.location}
          </AppText>
          <View style={styles.footer}>
            <AppText style={styles.f1}>
              &#8358;{parseFloat(item.cost).toLocaleString()}
            </AppText>
            <AppText style={styles.f2}> / {item.duration}</AppText>
          </View>
        </View>
        <View style={styles.heartIcon}>
          {heartIcon === "heart-outline" ? (
            <Ionicons
              name={heartIcon}
              size={24}
              color={colors.white}
              onPress={() => setHeartIcon("heart")}
            />
          ) : (
            <Ionicons
              name={heartIcon}
              size={24}
              color={colors.primaryOrange}
              onPress={() => setHeartIcon("heart-outline")}
            />
          )}
        </View>
      </ImageBackground>
    </View>
  );
};

export default Card2;

const styles = StyleSheet.create({
  backgroundImage: {
    height: 280,
    width: 200,
    borderRadius: 25,
    overflow: "hidden"
  },
  cost: {
    color: colors.white
  },
  f1: {
    color: colors.white,
    fontWeight: "600",
    fontSize: 18
  },
  f2: {
    color: colors.white,
    fontWeight: "300"
  },
  firstText: {
    color: colors.white,
    fontSize: 17,
    fontWeight: "600",
    width: "85%"
  },
  footer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end"
  },
  heartIcon: {
    position: "absolute",
    bottom: 16,
    right: 16,
  },
  secondText: {
    color: colors.white,
    fontWeight: "300",
    width: "85%"
  },
  rating: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: colors.white,
    borderRadius: 9,
    paddingVertical: 2.5,
    paddingHorizontal: 6,
    fontSize: 12,
    fontWeight: "bold",
    color: colors.primaryColor
  },
  texts: {
    position: "absolute",
    bottom: 0,
    margin: 16,
    width: "100%"
  }
});
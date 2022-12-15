import { ImageBackground, StyleSheet, View } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { useDimensions } from "@react-native-community/hooks";

// LOCAL IMPORTS
import AppText from "../AppText";
import colors from "../../config/colors";
const Card3 = ({ item }) => {
  const dimension = useDimensions().screen;
  const [heartIcon, setHeartIcon] = useState("heart-outline");

  const imageDimension = {
    height: dimension.width / 2 - 32,
    width: dimension.width / 2 - 32
  };

  const detailsDimension = {
    width: dimension.width / 2 - 32
  };

  return (
    <View style={styles.card}>
      <ImageBackground
        resizeMode="cover"
        source={item.image}
        style={[styles.image, imageDimension]}
      >
        <AppText style={styles.rating}>
          <MaterialCommunityIcons
            name="star"
            size={12}
            color={colors.primaryOrange}
          />
          {item.rating}
        </AppText>
        <View style={styles.heartIcon}>
          {heartIcon === "heart-outline" ? (
            <Ionicons
              name={heartIcon}
              size={22}
              color={colors.white}
              onPress={() => setHeartIcon("heart")}
            />
          ) : (
            <Ionicons
              name={heartIcon}
              size={22}
              color={colors.primaryOrange}
              onPress={() => setHeartIcon("heart-outline")}
            />
          )}
        </View>
      </ImageBackground>
      <View style={[styles.details, detailsDimension]}>
        <View style={styles.texts}>
          <AppText numberOfLines={1} style={styles.firstText}>
            {item.name}
          </AppText>
          <AppText numberOfLines={1} style={styles.secondText}>
            {item.location}
          </AppText>
          <AppText
            numberOfLines={1}
            style={[styles.footer, { detailsDimension }]}
          >
            <AppText style={styles.f1}>
              &#8358;{parseFloat(item.cost).toLocaleString()}
            </AppText>
            <AppText style={styles.f2}>&nbsp;/&nbsp;{item.duration}</AppText>
          </AppText>
        </View>
      </View>
    </View>
  );
};

export default Card3;

const styles = StyleSheet.create({
  card: {
    display: "flex",
    alignItems: "center",
    padding: 8,
    borderRadius: 20,
  },
  details: {
    marginVertical: 5,
    marginHorizontal: 5
  },
  image: {
    borderRadius: 20,
    overflow: "hidden"
  },
  f1: {
    color: colors.primaryColor,
    fontWeight: "bold",
    fontSize: 16
  },
  f2: {
    color: colors.mediumText,
    width: "50%"
  },
  firstText: {
    color: colors.primaryText,
    fontSize: 15,
    fontWeight: "bold"
  },
  footer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
  },
  heartIcon: {
    position: "absolute",
    bottom: 8,
    right: 8
  },
  secondText: {
    color: colors.mediumText
  },
  rating: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: colors.white,
    borderRadius: 9,
    paddingVertical: 2,
    paddingHorizontal: 5,
    fontSize: 11,
    fontWeight: "bold",
    color: colors.primaryColor
  },
  texts: {
  }
});

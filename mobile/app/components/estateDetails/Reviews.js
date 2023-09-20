import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useWindowDimensions } from "react-native";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

// LOCAL IMPORTS
import AppText from "../AppText";
import colors from "../../config/colors";
import { LIGHT, useTheme } from "../../contexts/ThemeContext";

const Reviews = ({ item }) => {
  const { state } = useTheme();
  const isLight = state.theme === LIGHT;
  const { width: screenWidth } = useWindowDimensions();
  const starStyles = isLight ? styles.starLight : styles.startDark;
  const dateTimeStyles = isLight ? styles.dateTimeLight : styles.dateTimeDark;
  const fullnameStyles = isLight ? styles.fullnameLight : styles.fullnameDark;

  return (
    <View>
      {item.reviews.map((review, index) => (
        <View style={styles.review} key={index}>
          <View style={styles.accountCard}>
            <Image source={review.author.image} style={styles.avatar} />
            <View style={[styles.center, { width: screenWidth - 73 }]}>
              <View>
                <AppText
                  numberOfLines={1}
                  style={[
                    styles.fullname,
                    fullnameStyles,
                    { width: screenWidth - 175 },
                  ]}
                >
                  {review.author.name}
                </AppText>
              </View>
              <View style={styles.icons}>
                <View>
                  <AppText style={[styles.star, starStyles]}>
                    <MaterialCommunityIcons
                      name="star"
                      size={16}
                      color={colors[state.theme].primaryColor}
                    />{" "}
                    {review.star}
                  </AppText>
                </View>
                <TouchableOpacity>
                  <MaterialCommunityIcons
                    size={24}
                    color={colors[state.theme].mediumText}
                    name="dots-horizontal-circle-outline"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <AppText
            style={{ color: colors[state.theme].mediumText, marginVertical: 5 }}
          >
            {review.comment}
          </AppText>
          <View style={styles.footer}>
            <MaterialCommunityIcons
              size={24}
              color={colors[state.theme].primaryColor}
              name="heart-outline"
            />
            <AppText style={styles.favorites}>{review.favorites}</AppText>
            <AppText style={[styles.dateTime, dateTimeStyles]}>
              2 weeks ago
            </AppText>
          </View>
        </View>
      ))}
    </View>
  );
};

export default Reviews;

const styles = StyleSheet.create({
  accountCard: {
    marginTop: 16,
    marginBottom: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    height: 45,
    width: 45,
    borderRadius: 30,
  },
  center: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  dateTime: {
    fontWeight: "500",
    fontSize: 13,
    marginLeft: 30,
  },
  dateTimeLight: {
    color: colors.light.mediumText,
  },
  dateTimeDark: {
    color: colors.dark.mediumText,
  },
  favorites: {
    fontSize: 13,
    fontWeight: "500",
    marginLeft: 5,
  },
  footer: {
    marginVertical: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  fullname: {
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 10,
  },
  fullnameLight: {
    color: colors.light.primaryText,
  },
  fullnameDark: {
    color: colors.dark.primaryText,
  },
  icons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  review: {
    paddingBottom: 16,
  },
  star: {
    borderWidth: 2,
    borderRadius: 20,
    paddingVertical: 2,
    paddingHorizontal: 10,
    fontWeight: "500",
    marginRight: 10,
  },
  starLight: {
    color: colors.light.primaryColor,
    borderColor: colors.light.primaryColor,
  },
  startDark: {
    color: colors.dark.primaryColor,
    borderColor: colors.dark.primaryColor,
  },
});

import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { useDimensions } from "@react-native-community/hooks";

// LOCAL IMPORTS
import AppText from "../AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../config/colors";

const Reviews = ({ item }) => {
  const { width: screenWidth } = useDimensions().screen;

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
                  style={[styles.fullname, { width: screenWidth - 175 }]}
                >
                  {review.author.name}
                </AppText>
              </View>
              <View style={styles.icons}>
                <View>
                  <AppText style={styles.star}>
                    <MaterialCommunityIcons
                      name="star"
                      size={16}
                      color={colors.primaryColor}
                    />{" "}
                    {review.star}
                  </AppText>
                </View>
                <TouchableOpacity>
                  <MaterialCommunityIcons
                    size={24}
                    color={colors.mediumText}
                    name="dots-horizontal-circle-outline"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <AppText>{review.comment}</AppText>
          <View style={styles.footer}>
            <MaterialCommunityIcons
              size={24}
              color={colors.primaryColor}
              name="heart-outline"
            />
            <AppText style={styles.favorites}>{review.favorites}</AppText>
            <AppText style={styles.dateTime}>2 weeks ago</AppText>
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
    alignItems: "center"
  },
  avatar: {
    height: 45,
    width: 45,
    borderRadius: 30
  },
  center: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  dateTime: {
    fontWeight: "500",
    color: colors.mediumText,
    fontSize: 13,
    marginLeft: 30
  },
  favorites: {
    fontSize: 13,
    fontWeight: "500",
    marginLeft: 5
  },
  footer: {
    marginVertical: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  fullname: {
    color: colors.primaryText,
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 10
  },
  icons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  review: {
    paddingBottom: 16
    // display: "flex",
    // flexDirection: "row",
    // justifyContent: "space-between",
    // alignItems: "center"
  },
  star: {
    borderWidth: 2,
    borderColor: colors.primaryColor,
    borderRadius: 20,
    paddingVertical: 2,
    paddingHorizontal: 10,
    fontWeight: "500",
    color: colors.primaryColor,
    marginRight: 10
  }
});

import { StyleSheet, Image, View } from "react-native";
import React from "react";
import { estates } from "../db";
import AppText from "../components/AppText";
import GoBackArrowHeader from "../components/GoBackArrowHeader";
import colors from "../config/colors";
import ImageIcon from "../components/ImageIcon";
import Card1 from "../components/cards/Card1";
import AccountCard from "../components/cards/AccountCard";
import { Ionicons } from "@expo/vector-icons";
import { FlatList } from "react-native-gesture-handler";

const Header = ({ title }) => {
  return <AppText style={styles.header}>{title}</AppText>;
};

const EstateDetails = ({ navigation, route }) => {
  // const { _id } = route.params;
  const _id = "1";
  const item = estates.find((e) => e._id === _id);

  return (
    <View style={{ overflow: "hidden", backgroundColor: colors.white }}>
      <GoBackArrowHeader navigation={navigation} />

      <View style={styles.details}>
        <AppText numberOfLines={1} style={styles.title}>
          {item.name}
        </AppText>
        {/* BASIC DETAILS 1 */}
        <View style={styles.basics1}>
          <AppText style={styles.category}>{item.category}</AppText>
          <AppText style={styles.rating}>
            {item.rating} ({parseInt(item.reviewCount).toLocaleString()}{" "}
            reviews)
          </AppText>
        </View>
        {/* BASIC DETAILS 2 */}
        <View style={styles.basics2}>
          <View style={styles.iconContainer}>
            <ImageIcon
              size={42}
              image={require("../assets/images/icons/bed.png")}
            />
            <AppText style={styles.basics2Text}>{item.beds} Beds</AppText>
          </View>
          <View style={styles.iconContainer}>
            <ImageIcon
              size={42}
              image={require("../assets/images/icons/bath.png")}
            />
            <AppText style={styles.basics2Text}>{item.bath} bath</AppText>
          </View>
          <View style={styles.iconContainer}>
            <ImageIcon
              size={42}
              image={require("../assets/images/icons/area.png")}
            />
            <AppText style={styles.basics2Text}>{item.area}</AppText>
          </View>
        </View>

        {/* AUTHOR */}
        <View style={{ marginTop: 16 }}>
          <AccountCard
            Icon1={
              <Ionicons
                name="chatbubble-ellipses-outline"
                color={colors.primaryColor}
                size={24}
              />
            }
            Icon2={
              <Ionicons
                name="ios-call-outline"
                color={colors.primaryColor}
                size={24}
              />
            }
            first_text={item.owner.name}
            second_text={"Owner"}
            avatar={require("../assets/images/avatar.jpg")}
            showIconBorder={false}
          />
        </View>

        {/* OVERVIEW */}
        <View>
          <Header title={"Overview"} />
          <AppText numberOfLines={4}>{item.overview}</AppText>
          <AppText style={styles.readMore}>Read more</AppText>
        </View>

        {/* FACILITIES */}
        <Header title="Facilities" />
        <View>
          <FlatList
            data={item.facilities}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
              <View>
                <ImageIcon
                  size={60}
                  image={require(`../assets/images/icons/${item.icon}.png`)}
                />
                <AppText>{item.name}</AppText>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default EstateDetails;

const styles = StyleSheet.create({
  basics1: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16
  },
  basics2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: colors.border200,
    maxWidth: 340,
    paddingVertical: 16
  },
  basics2Text: {
    fontWeight: "500",
    marginLeft: 6,
    overflow: "scroll",
    fontSize: 13
  },
  category: {
    color: colors.primaryColor,
    fontSize: 12,
    // fontWeight: "500",
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderRadius: 4,
    backgroundColor: colors.background200
  },
  details: {
    marginTop: 20,
    paddingHorizontal: 16,
    paddingVertical: 20
  },
  header: {
    marginVertical: 16,
    fontWeight: "bold",
    fontSize: 20
  },
  iconContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginRight: 5
  },
  rating: {
    marginLeft: 10,
    fontWeight: "600"
  },
  readMore: {
    fontWeight: "500",
    color: colors.primaryColor
  },
  title: {
    fontSize: 25,
    fontWeight: "bold"
  }
});

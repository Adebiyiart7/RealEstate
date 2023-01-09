import React, { useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import {
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  Platform
} from "react-native";
import {
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons
} from "@expo/vector-icons";
import Carousel from "react-native-reanimated-carousel";
import { useDimensions } from "@react-native-community/hooks";
import Constants from "expo-constants";

// LOCAL IMPORTS
import { estates } from "../db";
import AppText from "../components/AppText";
import colors from "../config/colors";
import Icon from "../components/Icon";
import AccountCard from "../components/cards/AccountCard";
import Facilities from "../components/estateDetails/Facilities";
import Gallery from "../components/estateDetails/Gallery";
import Location from "../components/estateDetails/Location";
import Reviews from "../components/estateDetails/Reviews";
import SeeAllText from "../components/SeeAllText";
import Footer from "../components/estateDetails/Footer";

const Header = ({ title }) => {
  return <AppText style={styles.header}>{title}</AppText>;
};

const EstateDetails = ({ navigation, route }) => {
  const [itemInView, setItemInView] = useState(0);
  const [statusBarHeight, setStatusBarHeight] = useState(0);
  const { width: screenWidth, height: screenHeight } = useDimensions().screen;
  const carouselHeight = screenWidth / 1.5;
  const { _id } = route.params;
  const item = estates.find((e) => e._id === _id);

  const handleScroll = (e) => {
    if (e.nativeEvent.contentOffset.y > carouselHeight - 5) {
      setStatusBarHeight(Constants.statusBarHeight);
    } else if (e.nativeEvent.contentOffset.y < carouselHeight + 5) {
      setStatusBarHeight(0);
    }
  };

  return (
    <View style={{backgroundColor: colors.white}}>
      <FlatList
        data={[]}
        keyExtractor={() => "key"}
        renderItem={null}
        onScroll={(e) => handleScroll(e)}
        style={[
          styles.container,
          {
            marginTop: statusBarHeight,
            height: screenHeight - 140 - statusBarHeight
          }
        ]}
        ListHeaderComponent={
          <>
            <View>
              {Platform.OS !== "web" && (
                <Carousel
                  loop
                  width={screenWidth}
                  height={carouselHeight}
                  // autoPlay={true}
                  data={item.images.slice(0, 5)}
                  scrollAnimationDuration={1000}
                  pagingEnabled
                  onSnapToItem={(index) => setItemInView(index)}
                  renderItem={({ item }) => (
                    <View style={styles.carousel}>
                      <AppText>1</AppText>
                      <Image source={item} style={{ width: screenWidth }} />
                    </View>
                  )}
                />
              )}

              {/* IMAGE SCROLL INDICATOR */}
              <View style={styles.imageScrollIndicator}>
                {item.images.slice(0, 5).map((item, index) => (
                  <View
                    key={index}
                    style={{
                      backgroundColor:
                        index == itemInView
                          ? colors.primaryColor
                          : colors.white,
                      height: 10,
                      width: index != itemInView ? 10 : 20,
                      margin: 2,
                      borderRadius: 5
                    }}
                  ></View>
                ))}
              </View>
            </View>

            {/* TOP NAV */}
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="arrow-left"
                size={24}
                style={[styles.topIcon, { top: -carouselHeight }]}
                onPress={() => navigation.goBack()}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="heart-outline"
                size={24}
                style={[styles.topIcon, { top: -carouselHeight, right: 0 }]}
              />
            </TouchableOpacity>

            {/* ===== DETAILS ===== */}
            <View style={styles.details}>
              <AppText numberOfLines={1} style={styles.title}>
                {item.name}
              </AppText>

              {/* BASIC DETAILS 1 */}
              <View style={styles.basics1}>
                <AppText style={styles.category}>{item.category}</AppText>
                <AppText style={styles.rating}>
                  <MaterialCommunityIcons
                    name="star"
                    size={16}
                    color={colors.primaryOrange}
                  />{" "}
                  {item.rating} ({parseInt(item.reviewCount).toLocaleString()}{" "}
                  reviews)
                </AppText>
              </View>

              {/* BASIC DETAILS 2 */}
              <View style={styles.basics2}>
                <View style={styles.iconContainer}>
                  <Icon
                    size={42}
                    Icon={
                      <MaterialCommunityIcons
                        name="bed"
                        size={20}
                        color={colors.primaryColor}
                      />
                    }
                  />
                  <AppText style={styles.basics2Text}>{item.beds} Beds</AppText>
                </View>
                <View style={styles.iconContainer}>
                  <Icon
                    size={42}
                    Icon={
                      <FontAwesome
                        name="bath"
                        size={20}
                        color={colors.primaryColor}
                      />
                    }
                  />
                  <AppText style={styles.basics2Text}>{item.bath} bath</AppText>
                </View>
                <View style={styles.iconContainer}>
                  <Icon
                    size={42}
                    Icon={
                      <MaterialCommunityIcons
                        name="arrow-expand-all"
                        size={20}
                        color={colors.primaryColor}
                      />
                    }
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
                <AppText numberOfLines={4} style={styles.overview}>
                  {item.overview}
                </AppText>
                <AppText style={styles.readMore}>Read more</AppText>
              </View>

              {/* FACILITIES */}
              <Header title="Facilities" />
              <Facilities item={item} />

              {/* GALLERY */}
              <Header title="Gallery" />
              <Gallery item={item} />

              {/* MAP */}
              <Header title={"Location"} />
              <Location item={item} />

              {/* REVIEWS */}
              <Header title={"Reviews"} />
              <View style={styles.reviewSummary}>
                <AppText
                  style={[
                    styles.rating,
                    { fontWeight: "bold", fontSize: 17, marginLeft: 0 }
                  ]}
                >
                  <MaterialCommunityIcons
                    name="star"
                    size={20}
                    color={colors.primaryOrange}
                  />{" "}
                  {item.rating} ({parseInt(item.reviewCount).toLocaleString()}{" "}
                  reviews)
                </AppText>
                <SeeAllText />
              </View>
              <Reviews item={item} />
            </View>
          </>
        }
      />
      {/* FOOTER */}
      <Footer navigation={navigation} item={item} />
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
  carousel: {
    flex: 1,
    justifyContent: "center"
  },
  category: {
    position: "relative",
    color: colors.primaryColor,
    fontSize: 12,
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 4,
    backgroundColor: colors.background200
  },
  container: {
    display: "flex",
    overflow: "hidden",
    backgroundColor: colors.white
  },
  details: {
    paddingHorizontal: 16
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
  imageScrollIndicator: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    bottom: 20
  },
  overview: {
    // color: colors.mediumText,
    lineHeight: 18,
    fontSize: 15
  },
  rating: {
    marginLeft: 10,
    fontWeight: "600"
  },
  readMore: {
    fontWeight: "500",
    color: colors.primaryColor
  },
  reviewSummary: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  topIcon: {
    position: "absolute",
    color: colors.primaryText,
    padding: 10,
    zIndex: 1234,
    backgroundColor: colors.background100,
    borderRadius: 50,
    margin: 16,
    marginTop: 25
  },
  title: {
    fontSize: 25,
    fontWeight: "bold"
  }
});

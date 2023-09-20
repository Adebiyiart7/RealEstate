import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";
import {
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

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
import { useTheme } from "../contexts/ThemeContext";

const Header = ({ title }) => {
  return <AppText style={styles.header}>{title}</AppText>;
};
const { width: screenWidth, height: screenHeight } = Dimensions.get("screen");

const EstateDetails = ({ navigation, route }) => {
  const { state } = useTheme();
  const [itemInView, setItemInView] = useState(0);
  const [statusBarHeight] = useState(0);
  const carouselHeight = screenWidth / 1.5;
  const { _id } = route.params;
  const item = estates.find((e) => e._id === _id);

  const handleScroll = (e) => {
    if (e.nativeEvent.contentOffset.y > carouselHeight - 5) {
    } else if (e.nativeEvent.contentOffset.y < carouselHeight + 5) {
    }
  };

  return (
    <View style={{ backgroundColor: colors[state.theme].white }}>
      <FlatList
        data={[]}
        keyExtractor={() => "key"}
        renderItem={null}
        onScroll={(e) => handleScroll(e)}
        style={[
          styles.container,
          {
            height: screenHeight - statusBarHeight,
            backgroundColor: colors[state.theme].white,
          },
        ]}
        ListHeaderComponent={
          <>
            <View>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={item.images}
                pagingEnabled
                keyExtractor={(image) => image}
                renderItem={({ item }) => (
                  <>
                    <View style={styles.carousel}>
                      <Image
                        source={{ uri: item }}
                        style={{ width: screenWidth, height: 260 }}
                      />
                    </View>
                  </>
                )}
              />

              {/* IMAGE SCROLL INDICATOR */}
              <View style={styles.imageScrollIndicator}>
                {item.images.slice(0, 5).map((item, index) => (
                  <View
                    key={index}
                    style={{
                      backgroundColor:
                        index == itemInView
                          ? colors[state.theme].primaryColor
                          : colors[state.theme].white,
                      height: 10,
                      width: index != itemInView ? 10 : 20,
                      margin: 2,
                      borderRadius: 5,
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
                style={[
                  styles.topIcon,
                  {
                    top: -carouselHeight,
                    color: colors[state.theme].primaryText,
                    backgroundColor: colors[state.theme].background100,
                  },
                ]}
                onPress={() => navigation.goBack()}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="heart-outline"
                size={24}
                style={[
                  styles.topIcon,
                  {
                    top: -carouselHeight,
                    right: 0,
                    color: colors[state.theme].primaryText,
                    backgroundColor: colors[state.theme].background100,
                  },
                ]}
              />
            </TouchableOpacity>

            {/* ===== DETAILS ===== */}
            <View style={styles.details}>
              <AppText numberOfLines={1} style={styles.title}>
                {item.name}
              </AppText>

              {/* BASIC DETAILS 1 */}
              <View style={styles.basics1}>
                <AppText
                  style={[
                    styles.category,
                    {
                      color: colors[state.theme].primaryColor,
                      backgroundColor: colors[state.theme].background200,
                    },
                  ]}
                >
                  {item.category}
                </AppText>
                <AppText style={styles.rating}>
                  <MaterialCommunityIcons
                    name="star"
                    size={16}
                    color={colors[state.theme].primaryOrange}
                  />{" "}
                  {item.rating} ({parseInt(item.reviewCount).toLocaleString()}{" "}
                  reviews)
                </AppText>
              </View>

              {/* BASIC DETAILS 2 */}
              <View
                style={[
                  styles.basics2,
                  { borderBottomColor: colors[state.theme].border200 },
                ]}
              >
                <View style={styles.iconContainer}>
                  <Icon
                    size={42}
                    Icon={
                      <MaterialCommunityIcons
                        name="bed"
                        size={20}
                        color={colors[state.theme].primaryColor}
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
                        color={colors[state.theme].primaryColor}
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
                        color={colors[state.theme].primaryColor}
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
                      color={colors[state.theme].primaryColor}
                      size={24}
                    />
                  }
                  Icon2={
                    <Ionicons
                      name="ios-call-outline"
                      color={colors[state.theme].primaryColor}
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
                <AppText
                  style={[
                    styles.readMore,
                    { color: colors[state.theme].primaryColor },
                  ]}
                >
                  Read more
                </AppText>
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
                    { fontWeight: "bold", fontSize: 17, marginLeft: 0 },
                  ]}
                >
                  <MaterialCommunityIcons
                    name="star"
                    size={20}
                    color={colors[state.theme].primaryOrange}
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
      <View style={{}}>
        {/* FOOTER */}
        <Footer navigation={navigation} item={item} />
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
    marginTop: 16,
  },
  basics2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    maxWidth: 340,
    paddingVertical: 16,
  },
  basics2Text: {
    fontWeight: "500",
    marginLeft: 6,
    overflow: "scroll",
    fontSize: 13,
  },
  carousel: {
    flex: 1,
    justifyContent: "center",
  },
  category: {
    position: "relative",
    fontSize: 12,
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 4,
  },
  container: {
    display: "flex",
    overflow: "hidden",
  },
  details: {
    paddingHorizontal: 16,
    marginBottom: 160,
  },
  header: {
    marginVertical: 16,
    fontWeight: "bold",
    fontSize: 20,
  },
  iconContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginRight: 5,
  },
  imageScrollIndicator: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    bottom: 20,
  },
  overview: {
    lineHeight: 18,
    fontSize: 15,
  },
  rating: {
    marginLeft: 10,
    fontWeight: "600",
  },
  readMore: {
    fontWeight: "500",
  },
  reviewSummary: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  topIcon: {
    position: "absolute",
    padding: 10,
    zIndex: 1234,
    borderRadius: 50,
    margin: 16,
    marginTop: 25,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
});

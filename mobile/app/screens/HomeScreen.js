import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import React, { useState } from "react";
import Screen from "../components/Screen";
import AccountCard from "../components/cards/AccountCard";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import SearchBox from "../components/form/SearchBox";
import AppText from "../components/AppText";
import defaultStyles from "../config/styles";
import Card3 from "../components/cards/Card3";
import Card2 from "../components/cards/Card2";
import { featured, ourRecommendation } from "../db";
import Chip from "../components/Chip";
import BottomSheet from "../components/BottomSheet";
import PropertiesFilterContent from "../components/PropertiesFilterContent";

export const categoryChips = [
  { name: "All", icon: "check-decagram" },
  { name: "House" },
  { name: "Villa" },
  { name: "Estate" },
  { name: "Apartment" }
];

const Header = ({ title, right }) => {
  return (
    <View style={styles.header}>
      <AppText style={styles.headerTitle}>{title}</AppText>
      <TouchableOpacity>{right}</TouchableOpacity>
    </View>
  );
};

const HomeScreen = () => {
  const [focusedItem, setFocusedItem] = useState("All");
  const [bottomSheetVisible, setBottomSheetVisible] = useState(true)

  return (
    <Screen style={styles.screen}>
      <AccountCard
        Icon={
          <Ionicons
            name="notifications-outline"
            color={colors.mediumText}
            size={24}
          />
        }
        first_text={`Good Morning`}
        second_text={"Adeeyo Joseph"}
        avatar={require("../assets/images/avatar.jpg")}
      />
      <SearchBox
        onPressFilter={() => setBottomSheetVisible(true)}
        RightIcon={
          <Ionicons
            name="md-filter-sharp"
            color={colors.primaryColor}
            size={18}
          />
        }
      />
      <View style={styles.featuredView}>
        <BottomSheet
          bottomSheetVisible={bottomSheetVisible}
          setBottomSheetVisible={setBottomSheetVisible}
          bottomSheetContent={<PropertiesFilterContent />}
        />
        <Header
          title="Featured"
          right={<AppText style={styles.seeAll}>See All</AppText>}
        />
        <FlatList
          data={featured}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <View key={item._id}>
              <Card2 item={item} />
            </View>
          )}
          ItemSeparatorComponent={() => <AppText style={{ marginRight: 16 }} />}
        />
      </View>
      <View style={styles.ourRecommendation}>
        <Header
          title="Our Recommendation"
          right={<AppText style={styles.seeAll}>See All</AppText>}
        />
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={categoryChips}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <View>
              <Chip
                text={item.name}
                focused={item.name === focusedItem}
                Icon={
                  item.icon && (
                    <MaterialCommunityIcons
                      name={item.icon}
                      size={18}
                      color={
                        item.name === focusedItem
                          ? colors.white
                          : colors.primaryColor
                      }
                    />
                  )
                }
                onPress={() => setFocusedItem(item.name)}
              />
            </View>
          )}
          ItemSeparatorComponent={() => <AppText style={styles.seperator} />}
        />
        <View style={styles.ourRecommendationGrid}>
          {ourRecommendation.map((item) => (
            <View key={item._id}>
              <Card3 item={item} />
            </View>
          ))}
        </View>
      </View>
    </Screen>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  featuredView: {
    marginTop: 10
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  headerTitle: {
    fontWeight: "bold",
    color: defaultStyles.colors.primaryText,
    fontSize: 17,
    marginBottom: 12
  },
  ourRecommendation: {
    marginBottom: 16,
    marginTop: 20
  },
  ourRecommendationGrid: {
    display: "flex",
    justifyContent: "center",
    marginTop: 16,
    marginHorizontal: -36,
    flexDirection: "row",
    flexWrap: "wrap",

  },
  screen: {
    paddingTop: 16
  },
  seeAll: {
    color: colors.primaryColor,
    fontWeight: "bold",
    marginTop: 2
  },
  seperator: {
    marginRight: 10
  }
});

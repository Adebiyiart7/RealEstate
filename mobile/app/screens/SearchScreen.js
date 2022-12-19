import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { useDimensions } from "@react-native-community/hooks";

// LOCAL IMPORTS
import AppText from "../components/AppText";
import Card3 from "../components/cards/Card3";
import Chip from "../components/Chip";
import SearchBox from "../components/form/SearchBox";
import Screen from "../components/Screen";
import colors from "../config/colors";
import defaultStyles from "../config/styles";
import { estateCategory, estates } from "../db";

const SearchScreen = ({ navigation }) => {
  const [focusedItem, setFocusedItem] = useState("All");
  const [displayFormat, setDisplayFormat] = useState("list"); // or grid
  const { width: screnWidth } = useDimensions().screen;

  return (
    <Screen>
      {/* SEARCH */}
      <View style={styles.searchContainer}>
        <MaterialCommunityIcons
          name="arrow-left"
          color={colors.primaryText}
          size={24}
          style={styles.backArrow}
        />
        <SearchBox
          width={screnWidth - 80}
          RightIcon={
            <Ionicons size={18} color={colors.primaryColor} name="filter" />
          }
        />
      </View>

      {/* CHIPS */}
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={estateCategory}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
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
        )}
        ItemSeparatorComponent={() => <View style={{ marginRight: 10 }} />}
      />

      {/* SEARCH COUNT and DISPLAY FORMAT */}
      <View style={styles.displayFormat}>
        <AppText style={styles.searchCount}>2484 found</AppText>
        <View style={styles.displayFormatIcons}>
          <TouchableOpacity onPress={() => setDisplayFormat("list")}>
            <MaterialCommunityIcons
              name="format-list-bulleted"
              style={[
                styles.displayFormatIcon,
                displayFormat === "list" && styles.displayFormatIconColor
              ]}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setDisplayFormat("grid")}>
            <MaterialCommunityIcons
              name="view-grid-outline"
              style={[
                styles.displayFormatIcon,
                displayFormat === "grid" && styles.displayFormatIconColor
              ]}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* LIST */}
      <View style={displayFormat !== "list" && defaultStyles.gridStyle}>
        {estates.map((item) => (
          <View key={item._id}>
            <Card3 navigation={navigation} format={displayFormat} item={item} />
          </View>
        ))}
      </View>
    </Screen>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  backArrow: {
    marginRight: 16
  },
  displayFormat: {
    marginTop: 16,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  displayFormatIcon: {
    fontSize: 18,
    color: colors.lightText
  },
  displayFormatIconColor: {
    color: colors.primaryColor
  },
  displayFormatIcons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: 50
  },
  searchContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 10
  },
  searchCount: {
    fontWeight: "bold",
    fontSize: 16
  }
});

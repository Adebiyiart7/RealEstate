import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useWindowDimensions } from "react-native";

// LOCAL IMPORTS
import AppText from "../components/AppText";
import Card3 from "../components/cards/Card3";
import Chip from "../components/Chip";
import SearchBox from "../components/form/SearchBox";
import Screen from "../components/Screen";
import colors from "../config/colors";
import defaultStyles from "../config/styles";
import { estateCategory, estates } from "../db";
import PropertyDisplayFormat from "../components/PropertyDisplayFormat";

const SearchScreen = ({ navigation }) => {
  const [focusedItem, setFocusedItem] = useState("All");
  const [displayFormat, setDisplayFormat] = useState("list"); // or grid
  const { width: screnWidth } = useWindowDimensions();

  return (
    <Screen>
      {/* SEARCH */}
      <View style={styles.searchContainer}>
        <MaterialCommunityIcons
          onPress={() => navigation.goBack()}
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
      <PropertyDisplayFormat
        displayFormat={displayFormat}
        setDisplayFormat={setDisplayFormat}
      />

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
    marginRight: 16,
  },

  searchContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 10,
  },
});

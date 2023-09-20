import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { useWindowDimensions } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// LOCAL IMPORT
import AppText from "./AppText";
import colors from "../config/colors";
import Chip from "./Chip";
import AppButton from "./AppButton";
import { estateCategory } from "../db";
import { LIGHT, useTheme } from "../contexts/ThemeContext";

const propertyFacilitiesChips = [
  { name: "All" },
  { name: "Car Parking" },
  { name: "Gym" },
  { name: "Restaurant" },
  { name: "Garden" },
  { name: "Pool" },
];

const ratingChips = [
  { name: "All" },
  { name: 5 },
  { name: 4 },
  { name: 3 },
  { name: 2 },
  { name: 1 },
];

export const Header = ({ title, style }) => {
  return <AppText style={{ ...styles.header, ...style }}>{title}</AppText>;
};

const PropertiesFilterContent = () => {
  const { state } = useTheme();
  const isLight = state.theme === LIGHT;
  const dimension = useWindowDimensions();
  const [focusedRating, setFocusedRating] = useState(5);
  const [focusedCategory, setFocusedCategory] = useState("All");
  const [focusedPropertyFacilities, setFocusedPropertyFacilities] =
    useState("Gym");

  const buttonStyle = {
    width: (dimension.width - (32 + 16)) / 2,
  };

  return (
    <>
      <AppText
        style={[
          styles.filterTitle,
          { borderBottomColor: colors[state.theme].border100 },
        ]}
      >
        Filter
      </AppText>
      <ScrollView style={styles.container}>
        {/* Category */}
        <View>
          <Header title={"Category"} />
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={estateCategory}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
              <View>
                <Chip
                  text={item.name}
                  focused={item.name === focusedCategory}
                  Icon={
                    item.icon && (
                      <MaterialCommunityIcons
                        name={item.icon}
                        size={15}
                        color={
                          isLight
                            ? item.name === focusedCategory
                              ? colors.light.displayAsWhite
                              : colors.light.primaryColor
                            : item.name === focusedCategory
                            ? colors.dark.displayAsWhite
                            : colors.dark.primaryColor
                        }
                      />
                    )
                  }
                  onPress={() => setFocusedCategory(item.name)}
                />
              </View>
            )}
            ItemSeparatorComponent={() => <AppText style={styles.seperator} />}
          />
        </View>

        {/* Price Range */}
        <View>
          <Header title={"Price Range"} />
        </View>

        {/* Facilities */}
        <View>
          <Header title={"Facilities"} />
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={propertyFacilitiesChips}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
              <View>
                <Chip
                  text={item.name}
                  focused={item.name === focusedPropertyFacilities}
                  Icon={
                    item.icon && (
                      <MaterialCommunityIcons
                        name={item.icon}
                        size={15}
                        color={
                          item.name === focusedPropertyFacilities
                            ? colors[state.theme].displayAsWhite
                            : colors[state.theme].primaryColor
                        }
                      />
                    )
                  }
                  onPress={() => setFocusedPropertyFacilities(item.name)}
                />
              </View>
            )}
            ItemSeparatorComponent={() => <AppText style={styles.seperator} />}
          />
        </View>

        <Header title={"Location"} />

        {/* Rating */}
        <View>
          <Header title={"Rating"} />
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={ratingChips}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
              <View>
                <Chip
                  text={item.name}
                  focused={item.name === focusedRating}
                  Icon={
                    <MaterialCommunityIcons
                      name={"star"}
                      size={15}
                      color={
                        item.name === focusedRating
                          ? colors[state.theme].displayAsWhite
                          : colors[state.theme].primaryColor
                      }
                    />
                  }
                  onPress={() => setFocusedRating(item.name)}
                />
              </View>
            )}
            ItemSeparatorComponent={() => <AppText style={styles.seperator} />}
          />
        </View>

        {/* Button */}
        <View style={styles.buttons}>
          <AppButton rounded secondary style={buttonStyle}>
            Reset
          </AppButton>
          <AppButton rounded style={buttonStyle}>
            Apply
          </AppButton>
        </View>
      </ScrollView>
    </>
  );
};

export default PropertiesFilterContent;

const styles = StyleSheet.create({
  buttons: {
    marginVertical: 24,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  container: {
    minHeight: 200,
    maxHeight: 400,
    padding: 16,
  },
  filterTitle: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    marginTop: -16,
    paddingVertical: 16,
    borderBottomWidth: 1,
  },
  header: {
    fontWeight: "bold",
    fontSize: 16,
    marginVertical: 16,
  },
  seperator: {
    marginRight: 10,
  },
});

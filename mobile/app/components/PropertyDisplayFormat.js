import { StyleSheet, View, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// LOCAL IMPORT
import colors from "../config/colors";
import AppText from "./AppText";
import { LIGHT, useTheme } from "../contexts/ThemeContext";

const PropertyDisplayFormat = ({
  displayFormat,
  setDisplayFormat,
  propertyCount,
}) => {
  const { state } = useTheme();
  const activeIconColor = (state.theme = LIGHT
    ? colors.light.primaryColor
    : colors.dark.primaryColor);

  const inActiveIconColor = (state.theme = LIGHT
    ? colors.light.lightText
    : colors.dark.lightText);

  return (
    <View style={styles.displayFormat}>
      <AppText style={styles.propertyCount}>{propertyCount}</AppText>
      <View style={styles.displayFormatIcons}>
        <TouchableOpacity onPress={() => setDisplayFormat("list")}>
          <MaterialCommunityIcons
            name="format-list-bulleted"
            style={[
              styles.displayFormatIcon,
              displayFormat === "list"
                ? { color: activeIconColor }
                : { color: inActiveIconColor },
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setDisplayFormat("grid")}>
          <MaterialCommunityIcons
            name="view-grid-outline"
            style={[
              styles.displayFormatIcon,
              displayFormat === "grid"
                ? { color: activeIconColor }
                : { color: inActiveIconColor },
            ]}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PropertyDisplayFormat;

const styles = StyleSheet.create({
  displayFormat: {
    marginTop: 16,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  displayFormatIcon: {
    fontSize: 24,
  },
  displayFormatIcons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: 60,
  },
  propertyCount: {
    fontWeight: "bold",
    fontSize: 16,
  },
});

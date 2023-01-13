import { StyleSheet, View, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// LOCAL IMPORT
import colors from "../config/colors";
import AppText from "./AppText";

const PropertyDisplayFormat = ({
  displayFormat,
  setDisplayFormat,
  propertyCount,
}) => {
  return (
    <View style={styles.displayFormat}>
      <AppText style={styles.propertyCount}>{propertyCount}</AppText>
      <View style={styles.displayFormatIcons}>
        <TouchableOpacity onPress={() => setDisplayFormat("list")}>
          <MaterialCommunityIcons
            name="format-list-bulleted"
            style={[
              styles.displayFormatIcon,
              displayFormat === "list" && styles.displayFormatIconColor,
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setDisplayFormat("grid")}>
          <MaterialCommunityIcons
            name="view-grid-outline"
            style={[
              styles.displayFormatIcon,
              displayFormat === "grid" && styles.displayFormatIconColor,
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
    alignItems: "center"
  },
  displayFormatIcon: {
    fontSize: 24,
    color: colors.lightText,
  },
  displayFormatIconColor: {
    color: colors.primaryColor,
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

import { StyleSheet, View, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// LOCAL IMPORT
import colors from "../config/colors";
import AppText from "./AppText";

const PropertyDisplayFormat = ({ displayFormat, setDisplayFormat }) => {
  return (
    <View style={styles.displayFormat}>
      <AppText style={styles.searchCount}>2484 found</AppText>
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
  },
  displayFormatIcon: {
    fontSize: 18,
    color: colors.lightText,
  },
  displayFormatIconColor: {
    color: colors.primaryColor,
  },
  displayFormatIcons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: 50,
  },
  searchCount: {
    fontWeight: "bold",
    fontSize: 16,
  },
});

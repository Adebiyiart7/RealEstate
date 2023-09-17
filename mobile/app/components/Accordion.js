import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import AppText from "./AppText";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Accordion = ({ _id, title, detail, active, onPress }) => {
  return (
    <View style={styles.accordion}>
      <TouchableOpacity onPress={onPress} style={styles.titleContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <MaterialCommunityIcons
          name="chevron-down"
          color={colors.primaryColor}
          size={24}
        />
      </TouchableOpacity>
      {active === _id && (
        <View style={styles.detailContainer}>
          <AppText style={styles.detail}>{detail}</AppText>
        </View>
      )}
    </View>
  );
};

export default Accordion;

const styles = StyleSheet.create({
  accordion: {
    backgroundColor: colors.white,
    borderRadius: 16,
    marginVertical: 8,
  },
  detail: {
    lineHeight: 18,
  },
  detailContainer: {
    margin: 26,
    marginTop: 0,
    paddingTop: 16,
    borderTopColor: colors.border100,
    borderTopWidth: 1,
  },
  title: {
    fontWeight: "bold",
    fontSize: 15,
  },
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 26,
  },
});

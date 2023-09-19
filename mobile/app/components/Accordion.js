import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import AppText from "./AppText";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LIGHT, useTheme } from "../contexts/ThemeContext";

const Accordion = ({ _id, title, detail, active, onPress }) => {
  const { state } = useTheme();
  const isLight = state.theme === LIGHT;

  const accordionStyles = isLight
    ? styles.accordionLight
    : styles.accordionDark;

  const detailContainerStyles = isLight
    ? styles.detailContainerLight
    : styles.detailContainerDark;

  return (
    <View style={[styles.accordion, accordionStyles]}>
      <TouchableOpacity onPress={onPress} style={styles.titleContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <MaterialCommunityIcons
          name="chevron-down"
          color={colors.primaryColor}
          size={24}
        />
      </TouchableOpacity>
      {active === _id && (
        <View style={[styles.detailContainer, detailContainerStyles]}>
          <AppText style={styles.detail}>{detail}</AppText>
        </View>
      )}
    </View>
  );
};

export default Accordion;

const styles = StyleSheet.create({
  accordion: {
    borderRadius: 16,
    marginVertical: 8,
  },
  accordionLight: {
    backgroundColor: colors.light.background200,
  },
  accordionDark: {
    backgroundColor: colors.dark.background200,
  },
  detail: {
    lineHeight: 18,
  },
  detailContainer: {
    margin: 26,
    marginTop: 0,
    paddingTop: 16,
    borderTopWidth: 1,
  },
  detailContainerLight: { borderTopColor: colors.light.border100 },
  detailContainerDark: { borderTopColor: colors.dark.border100 },
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

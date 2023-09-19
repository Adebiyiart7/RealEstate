import { StyleSheet } from "react-native";
import React from "react";

// LOCAL IMPORTS
import AppText from "./AppText";
import colors from "../config/colors";

const SeeAllText = React.memo(() => {
  return <AppText style={styles.seeAll}>See All</AppText>;
});

export default SeeAllText;

const styles = StyleSheet.create({
  seeAll: {
    color: colors.primaryColor,
    fontWeight: "bold",
    marginTop: 2,
  },
});

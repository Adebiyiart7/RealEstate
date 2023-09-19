import { StyleSheet, View } from "react-native";
import React from "react";

// LOCAL IMPORTS
import defaultStyles from "../config/styles";
import AppText from "./AppText";
import colors from "../config/colors";

const TextWithLines = React.memo(({ children, style, textStyle }) => {
  return (
    <View style={[styles.container, style]}>
      <AppText style={[styles.text, textStyle]}>{children}</AppText>
    </View>
  );
});

export default TextWithLines;

const styles = StyleSheet.create({
  container: {
    borderBottomColor: colors.border200,
    borderBottomWidth: 1,
    alignItems: "center",
  },
  text: {
    position: "absolute",
    top: -12,
    paddingHorizontal: 10,
    backgroundColor: colors.background100,
  },
});

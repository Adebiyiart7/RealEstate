import { StyleSheet, View } from "react-native";
import React from "react";
import colors from "../config/colors";
import { LIGHT, useTheme } from "../contexts/ThemeContext";

const Icon = React.memo(({ Icon, size = 50 }) => {
  const { state } = useTheme();

  const imageContainerStyles =
    state.theme === LIGHT
      ? styles.imageContainerLight
      : styles.imageContainerDark;

  return (
    <View
      style={[
        styles.imageContainer,
        imageContainerStyles,
        { height: size, width: size },
      ]}
    >
      {Icon}
    </View>
  );
});

export default Icon;

const styles = StyleSheet.create({
  image: {},
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  imageContainerLight: { backgroundColor: colors.light.background200 },
  imageContainerDark: { backgroundColor: colors.dark.background200 },
});

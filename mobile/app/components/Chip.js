import React from "react";
import { StyleSheet, Text, Pressable, View } from "react-native";
import colors from "../config/colors";
import { LIGHT, useTheme } from "../contexts/ThemeContext";

const Chip = React.memo(({ text, focused, Icon, onPress, style, small }) => {
  const { state } = useTheme();
  const isLight = state.theme === LIGHT;

  const backgroundColor = isLight
    ? focused
      ? colors.light.primaryColor
      : colors.light.background100
    : focused
    ? colors.dark.primaryColor
    : colors.dark.background100;

  const color = isLight
    ? focused
      ? colors.light.displayAsWhite
      : colors.light.primaryColor
    : focused
    ? colors.dark.displayAsWhite
    : colors.dark.primaryColor;

  const chipStyles = isLight ? styles.chipLight : styles.chipDark;

  return (
    <Pressable
      onPress={onPress}
      style={[
        style,
        [styles.chip, chipStyles],
        {
          backgroundColor,
          borderWidth: focused ? 0 : 1.5,
          paddingHorizontal: focused ? 17 : 14,
          paddingVertical: focused ? 7 : 5,
        },
      ]}
    >
      <View style={{ display: "flex", flexDirection: "row" }}>
        {Icon && <Text style={styles.icon}>{Icon}</Text>}
        <Text style={[styles.text, { color }, { fontSize: small ? 13 : 15 }]}>
          {text}
        </Text>
      </View>
    </Pressable>
  );
});

const styles = StyleSheet.create({
  chip: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 30,
    alignSelf: "flex-start",
  },
  chipLight: {
    borderColor: colors.light.primaryColor,
  },
  chipDark: {
    borderColor: colors.dark.primaryColor,
  },
  icon: {
    paddingRight: 5,
  },
  text: {
    fontWeight: "600",
  },
});

export default Chip;

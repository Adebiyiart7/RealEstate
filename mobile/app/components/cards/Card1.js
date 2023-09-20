import { Pressable, StyleSheet, View } from "react-native";
import React from "react";
import AppText from "../AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../config/colors";
import { LIGHT, useTheme } from "../../contexts/ThemeContext";

const Card1 = React.memo(({ Icon, title, subTitle, selected, onPress }) => {
  const { state } = useTheme();
  const isLight = state.theme === LIGHT;
  const iconStyles = isLight ? styles.iconLight : styles.iconDark;

  const radioStyles = isLight ? styles.radioLight : styles.radioDark;
  const titleStyles = isLight ? styles.titleLight : styles.titleDark;
  const selectedStyles = {
    borderWidth: 2,
    borderColor: colors[state.theme].primaryColor,
  };

  return (
    <Pressable
      onPress={onPress}
      style={{
        ...styles.card,
        borderColor: colors[state.theme].border200,
        ...(selected && selectedStyles),
      }}
    >
      <View style={[styles.icon, iconStyles]}>{Icon}</View>
      <View style={styles.center}>
        <AppText numberOfLines={1} style={[styles.title, titleStyles]}>
          {title}
        </AppText>
        <AppText numberOfLines={1} style={styles.subTitle}>
          {subTitle}
        </AppText>
      </View>
      {selected ? (
        <MaterialCommunityIcons
          style={[styles.radio, radioStyles]}
          name="radiobox-marked"
        />
      ) : (
        <MaterialCommunityIcons
          style={[styles.radio, radioStyles]}
          name="radiobox-blank"
        />
      )}
    </Pressable>
  );
});

export default Card1;

const styles = StyleSheet.create({
  card: {
    display: "flex",
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 25,
    padding: 16,
    alignItems: "center",
    marginVertical: 8,
  },
  icon: {
    borderRadius: 50,
    padding: 20,
    marginRight: 10,
  },
  iconLight: {
    backgroundColor: colors.light.background200,
  },
  iconDark: {
    backgroundColor: colors.dark.background200,
  },
  radio: {
    fontSize: 24,
    position: "absolute",
    right: 20,
  },
  radioLight: {
    color: colors.light.primaryColor,
  },
  radioDark: {
    color: colors.dark.primaryColor,
  },
  center: {
    display: "flex",
    flexDirection: "column",
  },
  subTitle: {
    maxWidth: 180,
    fontWeight: "600",
  },
  title: {
    fontSize: 12,
  },
  titleLight: {
    color: colors.light.mediumText,
  },
  titleDark: {
    color: colors.dark.mediumText,
  },
});

import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppText from "./AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import { LIGHT, useTheme } from "../contexts/ThemeContext";

const MenuItem = React.memo(
  ({
    title,
    leftIcon,
    rightIcon,
    RightIcon,
    subTitle,
    isLogout,
    onPress,
    style,
    activeOpacity,
    disabled = false,
    showRightIcon = true,
  }) => {
    const { state } = useTheme();
    const disabledStyle = {
      opacity: disabled ? 0.2 : 1,
    };

    const leftIconStyles =
      state.theme === LIGHT ? styles.leftIconLight : styles.leftIconDark;
    const rightIconStyles =
      state.theme === LIGHT ? styles.rightIconLight : styles.rightIconDark;
    const subTitleStyles =
      state.theme === LIGHT ? styles.subTitleLight : styles.subTitleDark;
    const titleStyles =
      state.theme === LIGHT ? styles.titleLight : styles.titleDark;

    return (
      <TouchableOpacity
        activeOpacity={activeOpacity}
        style={[styles.menuItem, style]}
        onPress={onPress}
      >
        <MaterialCommunityIcons
          name={leftIcon}
          style={[
            styles.leftIcon,
            leftIconStyles,
            isLogout
              ? {
                  color:
                    state.theme === LIGHT
                      ? colors.light.danger
                      : colors.dark.danger,
                }
              : {},
          ]}
        />
        <View>
          <Text
            style={[
              styles.title,
              titleStyles,
              isLogout
                ? {
                    color:
                      state.theme === LIGHT
                        ? colors.light.danger
                        : colors.dark.danger,
                  }
                : {},
              disabledStyle,
            ]}
          >
            {title}
          </Text>
          {subTitle && (
            <Text style={[styles.subTitle, subTitleStyles, disabledStyle]}>
              {subTitle}
            </Text>
          )}
        </View>
        {showRightIcon &&
          (RightIcon ? (
            <AppText style={[styles.rightIcon, rightIconStyles]}>
              {RightIcon}
            </AppText>
          ) : (
            <MaterialCommunityIcons
              style={[styles.rightIcon, rightIconStyles]}
              name={rightIcon ? rightIcon : "chevron-right"}
            />
          ))}
      </TouchableOpacity>
    );
  }
);

export default MenuItem;

const styles = StyleSheet.create({
  leftIcon: {
    fontSize: 26,
    marginRight: 16,
  },
  leftIconLight: {
    color: colors.light.mediumText,
  },
  leftIconDark: {
    color: colors.dark.mediumText,
  },
  menuItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  rightIcon: {
    position: "absolute",
    right: 0,
    fontSize: 26,
  },
  rightIconLight: {
    color: colors.light.primaryText,
  },
  rightIconDark: {
    color: colors.dark.primaryText,
  },
  subTitleLight: {
    color: colors.mediumText,
  },
  subTitleDark: {
    color: colors.mediumText,
  },
  title: {
    fontWeight: "500",
    fontSize: 16,
  },
  titleLight: {
    color: colors.dark.primaryText,
  },
  titleDark: {
    color: colors.dark.primaryText,
  },
});

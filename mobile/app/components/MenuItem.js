import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppText from "./AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

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
    const disabledStyle = {
      opacity: disabled ? 0.2 : 1,
    };

    return (
      <TouchableOpacity
        activeOpacity={activeOpacity}
        style={[styles.menuItem, style]}
        onPress={onPress}
      >
        <MaterialCommunityIcons
          name={leftIcon}
          style={[styles.leftIcon, isLogout ? { color: colors.danger } : {}]}
        />
        <View>
          <Text
            style={[
              styles.title,
              isLogout ? { color: colors.danger } : {},
              disabledStyle,
            ]}
          >
            {title}
          </Text>
          {subTitle && (
            <Text style={[styles.subTitle, disabledStyle]}>{subTitle}</Text>
          )}
        </View>
        {showRightIcon &&
          (RightIcon ? (
            <AppText style={styles.rightIcon}>{RightIcon}</AppText>
          ) : (
            <MaterialCommunityIcons
              style={styles.rightIcon}
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
    color: colors.primaryText,
    fontSize: 26,
    marginRight: 16,
    color: colors.mediumText,
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
    color: colors.primaryText,
    fontSize: 26,
  },
  title: {
    fontWeight: "500",
    fontSize: 16,
  },
});

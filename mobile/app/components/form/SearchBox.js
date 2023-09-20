import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

// LOCAL IMPORTS
import defaultStyles from "../../config/styles";
import colors from "../../config/colors";
import { useTheme } from "../../contexts/ThemeContext";

const SearchBox = ({
  name,
  onPress,
  borderRadius,
  RightIcon,
  onPressFilter,
  width,
  ...otherProps
}) => {
  const { state } = useTheme();
  const [iconName, setIconName] = useState("ios-search-outline");
  const [isFocus, setIsFocus] = useState(false);
  const iconColor = isFocus
    ? colors[state.theme].primaryColor
    : colors[state.theme].mediumText;

  const textInputStyle = {
    paddingVertical: 8,
    borderColor: isFocus
      ? colors[state.theme].primaryColor
      : colors[state.theme].border200,
    borderWidth: isFocus ? 1.5 : 1,
  };

  return (
    <View style={[styles.container, { width: width }]}>
      <Ionicons
        style={{ ...styles.icon, color: iconColor }}
        name={iconName}
        size={18}
      />
      <TextInput
        style={[styles.textInput, textInputStyle, textInputTheme]}
        name={"search"}
        onFocus={() => {
          setIsFocus(true);
          setIconName("ios-search");
        }}
        onBlur={() => {
          setIsFocus(false);
        }}
        placeholder="Search..."
        placeholderTextColor={colors[state.theme].lightText}
        {...otherProps}
      />
      <TouchableOpacity onPress={onPressFilter} style={styles.rightIcon}>
        {RightIcon && RightIcon}
      </TouchableOpacity>
    </View>
  );
};

export default SearchBox;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: 10,
    position: "relative",
  },
  icon: {
    position: "absolute",
    top: 14,
    left: 14,
    zIndex: 1234,
  },
  rightIcon: {
    position: "absolute",
    top: 4,
    right: 0,
    zIndex: 1234,
    padding: 10,
    paddingRight: 0,
  },
  textInput: {
    borderRadius: defaultStyles.primaryBorderRadius,
    paddingVertical: 10,
    paddingHorizontal: 37,
    fontSize: 16,
  },
  textInputTheme: {
    light: {
      color: colors.light.primaryText,
      backgroundColor: colors.light.background100,
    },
    dark: {
      color: colors.dark.primaryText,
      backgroundColor: colors.dark.background100,
    },
  },
});

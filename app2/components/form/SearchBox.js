import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

// LOCAL IMPORTS
import defaultStyles from "../../config/styles";

const SearchBox = ({
  name,
  onPress,
  borderRadius,
  RightIcon,
  onPressFilter,
  width,
  ...otherProps
}) => {
  const [iconName, setIconName] = useState("ios-search-outline");
  const [isFocus, setIsFocus] = useState(false);
  const iconColor = isFocus
    ? defaultStyles.colors.primaryColor
    : defaultStyles.colors.mediumText;

  const textInputStyle = {
    // paddingVertical: 8,
    // borderColor: isFocus ? defaultStyles.colors.primaryColor : "transparent",
    // borderWidth: isFocus ? 2 : 0
  };

  return (
    <View style={[styles.container, { width: width }]}>
      <Ionicons
        style={{ ...styles.icon, color: iconColor }}
        name={iconName}
        size={18}
      />
      <TextInput
        style={[styles.textInput, isFocus && textInputStyle]}
        name={"search"}
        onFocus={() => {
          setIsFocus(true);
          setIconName("ios-search");
        }}
        placeholder="Search..."
        placeholderTextColor={defaultStyles.colors.lightText}
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
    position: "relative"
  },
  icon: {
    position: "absolute",
    top: 14,
    left: 14,
    zIndex: 1234
  },
  rightIcon: {
    position: "absolute",
    top: 4,
    right: 0,
    zIndex: 1234,
    padding: 10
  },
  textInput: {
    borderRadius: defaultStyles.primaryBorderRadius,
    backgroundColor: defaultStyles.colors.background100,
    paddingVertical: 10,
    paddingHorizontal: 37,
    fontSize: 16,
    color: defaultStyles.colors.primaryText
  }
});

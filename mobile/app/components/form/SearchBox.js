import { StyleSheet, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

// LOCAL IMPORTS
import defaultStyles from "../../config/styles";

const SearchBox = ({
  name,
  icon,
  Icon,
  onPress,
  borderRadius,
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
    <View style={styles.container}>
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
        placeholderTextColor={defaultStyles.colors.lightText}
        {...otherProps}
      />
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
  textInput: {
    borderRadius: defaultStyles.primaryBorderRadius,
    backgroundColor: defaultStyles.colors.lightBackground,
    paddingVertical: 10,
    paddingHorizontal: 37,
    fontSize: 16,
    color: defaultStyles.colors.primaryText
  },
  icon: {
    position: "absolute",
    top: 11,
    left: 14,
    zIndex: 1234
  }
});

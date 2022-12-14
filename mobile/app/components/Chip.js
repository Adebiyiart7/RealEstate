import React from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import colors from "../config/colors";

const Chip = ({ text, focused, Icon, onPress, style }) => {
  return (
    <TouchableHighlight
      underlayColor={colors.primaryColor}
      onPress={onPress}
      style={[
        style,
        styles.chip,
        { backgroundColor: focused ? colors.primaryColor : colors.white },
      ]}
    >
      <View style={{display: "flex", flexDirection: "row" }}>
        {Icon && <Text style={styles.icon}>{Icon}</Text>}
        <Text style={[styles.text, { color: focused ? colors.white : colors.primaryColor }]}>
          {text}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  chip: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 30,
    alignSelf: "flex-start",
    borderWidth: 2,
    borderColor: colors.primaryColor,
  },
  icon: {
    paddingRight: 5,
  },
  text: {
    fontSize: 15,
    fontWeight: "600",
  },
});

export default Chip;

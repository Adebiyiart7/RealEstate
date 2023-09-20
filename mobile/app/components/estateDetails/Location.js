import React from "react";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// LOCAL IMPORTS
import AppText from "../AppText";
import colors from "../../config/colors";
import { LIGHT, useTheme } from "../../contexts/ThemeContext";

const Location = ({ item }) => {
  const { state } = useTheme();

  return (
    <View>
      <AppText
        numberOfLines={2}
        style={{ color: colors[state.theme].mediumText }}
      >
        <Ionicons
          name="location"
          size={24}
          color={colors[state.theme].primaryColor}
        />{" "}
        {item.location}
      </AppText>
      <View
        style={{
          width: "100%",
          height: 120,
          borderWidth: 1,
          borderColor: colors[state.theme].border200,
          marginTop: 16,
          borderRadius: 10,
        }}
      />
    </View>
  );
};

export default Location;

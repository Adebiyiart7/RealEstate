import { Pressable, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";

// LOCAL IMPORTS
import colors from "../config/colors";
import { LIGHT, useTheme } from "../contexts/ThemeContext";

const Rating = React.memo(() => {
  const { state } = useTheme();
  const [value, setValue] = useState(0);

  const starts = [
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
    { value: 5 },
  ];

  const handleRating = (item) => setValue(item);

  const starStyles =
    state.theme === LIGHT ? styles.startLight : styles.startDark;

  return (
    <View style={styles.rating}>
      {starts.map((item, index) => (
        <Pressable key={index} onPress={() => handleRating(item.value)}>
          <MaterialIcons
            style={[styles.star, starStyles]}
            name={item.value <= value ? "star" : "star-outline"}
          />
        </Pressable>
      ))}
    </View>
  );
});

export default Rating;

const styles = StyleSheet.create({
  rating: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  star: {
    fontSize: 40,
    padding: 3,
  },
  startLight: {
    color: colors.light.primaryColor,
  },
  startDark: {
    color: colors.dark.primaryColor,
  },
});

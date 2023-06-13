import { Pressable, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";

// LOCAL IMPORTS
import colors from "../config/colors";

const Rating = React.memo(() => {
  const [value, setValue] = useState(0);

  const starts = [
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
    { value: 5 }
  ];

  const handleRating = (item) => setValue(item);

  return (
    <View style={styles.rating}>
      {starts.map((item, index) => (
        <Pressable key={index} onPress={() => handleRating(item.value)}>
          <MaterialIcons
            style={styles.star}
            name={item.value <= value ? "star" : "star-outline"}
          />
        </Pressable>
      ))}
    </View>
  );
})

export default Rating;

const styles = StyleSheet.create({
  rating: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  star: {
    color: colors.primaryColor,
    fontSize: 40,
    padding: 3
  }
});

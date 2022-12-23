import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Rating = () => {
  const [value, setValue] = useState();

  const starts = [
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
    { value: 5 }
  ];
  return (
    <View style={styles.rating}>
      {starts.map((item) => (
        <Pressable key={item.value} onPress={() => setValue(item.value)}>
          <MaterialCommunityIcons style={styles.star} name="star-outline" />
        </Pressable>
      ))}
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({
  rating: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 16,
  }
});

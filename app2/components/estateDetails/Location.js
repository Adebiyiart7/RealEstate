import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppText from "../AppText";
import { Ionicons } from "@expo/vector-icons";
import colors from "../../config/colors";

const Location = ({ item }) => {
  return (
    <View>
      <AppText numberOfLines={2}>
        <Ionicons name="location" size={24} color={colors.primaryColor} />{" "}
        {item.location}
      </AppText>
      <View
        style={{
          width: "100%",
          height: 120,
          borderWidth: 1,
          borderColor: colors.border200,
          marginTop: 16,
          borderRadius: 10,
        }}
      />
    </View>
  );
};

export default Location;

const styles = StyleSheet.create({});

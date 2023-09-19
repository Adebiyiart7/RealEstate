import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppText from "../AppText";

const Calls = ({ navigation }) => {
  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        paddingTop: 100,
        height: "100%",
      }}
    >
      <AppText>You have no call history.</AppText>
    </View>
  );
};

export default Calls;

const styles = StyleSheet.create({});

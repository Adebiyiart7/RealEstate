import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppText from "../AppText";

const Calls = () => {
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 100
      }}
    >
      <AppText>You have no call history.</AppText>
    </View>
  );
};

export default Calls;

const styles = StyleSheet.create({});

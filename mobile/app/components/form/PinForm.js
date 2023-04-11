import { Octicons } from "@expo/vector-icons";
import React, { useState, useRef } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { useWindowDimensions } from "react-native";

// LOCAL IMPORT
import defaultStyles from "../../config/styles";
import AppText from "../AppText";

const PinForm = ({ pin, setPin, secureTextEntry }) => {
  const inputRef = useRef();

  const { width: screenWidth } = useWindowDimensions();

  const textInput = {
    width: (screenWidth - 32 - (7 * 8))/4,
  };

  const focusedInputStyle = {
    borderWidth: 2,
    borderColor: defaultStyles.colors.primaryColor
  };

  const handleOnPress = (pinValue) => {
    inputRef.current.focus();
    if(pinValue) setPin("")
  };

  return (
    <View style={styles.container}>
      <TextInput
        ref={inputRef}
        onChangeText={(text) => setPin(text)}
        maxLength={4}
        name={"first"}
        value={pin}
        caretHidden={true}
        keyboardType={"numeric"}
        style={styles.realInput}
      />

      <AppText
        onPress={() => handleOnPress(pin[0])}
        style={[styles.input, textInput]}
      >
        {secureTextEntry ? pin[0] && <Octicons name="dot-fill" size={35} /> : pin[0]}
      </AppText>
      <AppText
        onPress={() => handleOnPress(pin[1])}
        style={[styles.input, textInput]}
      >
        {secureTextEntry ? pin[1] && <Octicons name="dot-fill" size={35} /> : pin[1]}
      </AppText>
      <AppText
        onPress={() => handleOnPress(pin[2])}
        style={[styles.input, textInput]}
      >
        {secureTextEntry ? pin[2] && <Octicons name="dot-fill" size={35} /> : pin[2]}
      </AppText>
      <AppText
        onPress={() => handleOnPress(pin[3])}
        style={[styles.input, textInput]}
      >
        {secureTextEntry ? pin[3] && <Octicons name="dot-fill" size={35} /> : pin[3]}
      </AppText>
    </View>
  );
};

export default PinForm;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    // alignItems: "center",
    // maxWidth: 300,
  },
  input: {
    borderWidth: 1,
    borderColor: defaultStyles.colors.border200,
    borderRadius: defaultStyles.primaryBorderRadius,
    height: 55,
    marginHorizontal: 7,
    textAlign: "center",
    fontSize: 25,
    fontWeight: "500",
    paddingTop: 9,
    backgroundColor: defaultStyles.colors.lightBackground,
    color: defaultStyles.colors.primaryText
  },
  realInput: {
    position: "absolute",
    color: "transparent",
  }
});

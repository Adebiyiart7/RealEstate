import { StyleSheet, View } from "react-native";
import React from "react";
import { TextInput } from "react-native-gesture-handler";

// LOCAL IMPORTS
import AppText from "./AppText";
import ItemSeparatorComponent from "./ItemSeparatorComponent";
import Rating from "./Rating";
import colors from "../config/colors";
import AppButton from "./AppButton";
import { LIGHT, useTheme } from "../contexts/ThemeContext";

const RateBooking = ({ estateName }) => {
  const { state } = useTheme();
  const isLight = state.theme === LIGHT;
  const inputStyles = isLight ? styles.inputLight : styles.inputDark;

  const separatorStyles = isLight
    ? styles.separatorLight
    : styles.separatorDark;

  return (
    <View style={styles.container}>
      <AppText style={styles.title}>Leave a Review</AppText>
      <ItemSeparatorComponent style={styles.separator} />
      <AppText style={styles.text}>
        How was your experience with {estateName}?
      </AppText>
      <Rating />
      <ItemSeparatorComponent style={[styles.separator, separatorStyles]} />
      <AppText style={styles.text}>Write your review</AppText>
      <TextInput
        multiline
        numberOfLines={4}
        placeholderTextColor={colors.primaryText}
        placeholder={"Write something..."}
        style={[styles.input, inputStyles]}
      />
      <View style={styles.buttons}>
        <AppButton
          rounded
          small
          style={[styles.button, { marginRight: 8 }]}
          secondary
        >
          Maybe Later
        </AppButton>
        <AppButton rounded small style={[styles.button, { marginLeft: 8 }]}>
          Submit
        </AppButton>
      </View>
    </View>
  );
};

export default RateBooking;

const styles = StyleSheet.create({
  button: {
    flex: 1,
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    marginTop: 16,
  },
  container: {
    padding: 16,
    paddingTop: 0,
  },
  input: {
    padding: 16,
    borderWidth: 1,
    borderRadius: 5,
  },
  inputLight: {
    color: colors.light.primaryText,
    borderColor: colors.light.border200,
  },
  inputDark: {
    color: colors.dark.primaryText,
    borderColor: colors.dark.border200,
  },
  text: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 17,
    marginBottom: 16,
  },
  separator: {
    marginVertical: 16,
  },
  separatorLight: {
    borderBottomColor: colors.light.border200,
  },
  separatorDark: {
    borderBottomColor: colors.dark.border200,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
});

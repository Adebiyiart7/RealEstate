import { StyleSheet, Text, View } from "react-native";
import React from "react";

// LOCAL IMPORTS
import AppText from "./AppText";
import defaultStyles from "../config/styles";
import ItemSeparatorComponent from "./ItemSeparatorComponent";
import Rating from "./Rating";
import { TextInput } from "react-native-gesture-handler";
import colors from "../config/colors";
import AppButton from "./AppButton";

const RateBooking = ({ estateName }) => {
  return (
    <View style={styles.container}>
      <AppText style={styles.title}>Leave a Review</AppText>
      <ItemSeparatorComponent style={styles.separator} />
      <AppText style={styles.text}>
        How was your experience with {estateName}?
      </AppText>
      <Rating />
      <ItemSeparatorComponent style={styles.separator} />
      <AppText style={styles.text}>Write your review</AppText>
      <TextInput
        multiline
        numberOfLines={4}
        placeholder={"Write something..."}
        style={styles.input}
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
    borderColor: colors.border100,
    borderRadius: 5,
    color: colors.primaryText,
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
  title: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
});

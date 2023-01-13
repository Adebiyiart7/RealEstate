import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Header } from "./PropertiesFilterContent";
import AppButton from "./AppButton";
import Card3 from "./cards/Card3";
import { estates } from "../db";

const RemoveFavoriteContent = ({ setBottomSheetVisibleRemoveFav }) => {
  return (
    <View>
      <Header title={"Remove from Favorites?"} />
      <View style={styles.item}>
        <Card3 navigation={navigation} format={"list"} item={estates[6]} />
      </View>
      <View style={styles.buttons}>
        <AppButton
          small
          style={styles.button}
          onPress={() => setBottomSheetVisibleRemoveFav(false)}
        >
          Cancel
        </AppButton>
        <AppButton small style={styles.button}>
          Yes, Remove
        </AppButton>
      </View>
    </View>
  );
};

export default RemoveFavoriteContent;

const styles = StyleSheet.create({
  button: {
    flex: 1
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  }
});

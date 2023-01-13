import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Header } from "./PropertiesFilterContent";
import AppButton from "./AppButton";
import Card3 from "./cards/Card3";
import { estates } from "../db";
import colors from "../config/colors";

const RemoveFavoriteContent = ({
  setBottomSheetVisibleRemoveFav,
  navigation
}) => {
  return (
    <View>
      <Header
        style={{ fontSize: 20, textAlign: "center" }}
        title={"Remove from Favorites?"}
      />
      <View style={styles.content}>
        <View style={styles.item}>
          <Card3 navigation={navigation} format={"list"} item={estates[6]} />
        </View>
        <View style={styles.buttons}>
          <AppButton
           
            rounded
            secondary
            style={{ ...styles.button, marginRight: 8 }}
            onPress={() => setBottomSheetVisibleRemoveFav(false)}
          >
            Cancel
          </AppButton>
          <AppButton  rounded style={{ ...styles.button, marginLeft: 8 }}>
            Yes, Remove
          </AppButton>
        </View>
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
  },
  content: { padding: 16, borderTopColor: colors.border100, borderTopWidth: 1, }
});

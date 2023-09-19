import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Modal, StyleSheet, View, TouchableOpacity } from "react-native";

// LOCAL IMPORTS
import defaultStyles from "../config/styles";
import colors from "../config/colors";
import { LIGHT, useTheme } from "../contexts/ThemeContext";

const BottomSheet = React.memo(
  ({ bottomSheetVisible, setBottomSheetVisible, bottomSheetContent }) => {
    const { state } = useTheme();
    const isLight = state.theme === LIGHT;

    const centeredViewStyles = isLight
      ? styles.centeredViewLight
      : styles.centeredViewDark;

    const modalViewStyles = isLight
      ? styles.modalViewLight
      : styles.modalViewDark;

    return (
      <View style={styles.container}>
        <Modal
          animationType="none"
          transparent={true}
          visible={bottomSheetVisible}
        >
          <View style={[styles.centeredView, centeredViewStyles]}>
            <TouchableOpacity
              onPress={() => setBottomSheetVisible(false)}
              style={styles.backdrop}
            ></TouchableOpacity>
            <View style={[styles.modalView, modalViewStyles]}>
              {bottomSheetContent}
            </View>
          </View>
        </Modal>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
  },
  centeredView: {
    flex: 1,
    display: "flex",
    position: "relative",
    justifyContent: "space-between",
  },
  centeredViewLight: { backgroundColor: colors.light.transparentBackground },
  centeredViewDark: { backgroundColor: colors.dark.transparentBackground },
  closeButtonContainer: {
    position: "absolute",
    top: 5,
    right: 5,
  },
  modalView: {
    borderTopStartRadius: defaultStyles.primaryBorderRadius,
    borderTopEndRadius: defaultStyles.primaryBorderRadius,
    width: "100%",
    bottom: 0,
    paddingTop: 20,
    maxHeight: 500,
  },
  modalViewLight: {
    backgroundColor: colors.light.background100,
  },
  modalViewDark: {
    backgroundColor: colors.dark.background100,
  },
  modalText: {
    marginBottom: 15,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default BottomSheet;

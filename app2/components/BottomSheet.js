import { FontAwesome } from "@expo/vector-icons";
import { Modal, StyleSheet, View, TouchableOpacity } from "react-native";
import colors from "../config/colors";

// LOCAL IMPORTS
import defaultStyles from "../config/styles";

const BottomSheet = ({
  bottomSheetVisible,
  setBottomSheetVisible,
  bottomSheetContent,
}) => {
  return (
    <View style={styles.container}>
      <Modal
        animationType="none"
        transparent={true}
        visible={bottomSheetVisible}
      >
        <View style={styles.centeredView}>
          <TouchableOpacity
            onPress={() => setBottomSheetVisible(false)}
            style={styles.backdrop}
          ></TouchableOpacity>
          <View style={styles.modalView}>
            {/* <TouchableOpacity
              onPress={() => setBottomSheetVisible(false)}
              style={styles.closeButtonContainer}
            >
              <FontAwesome
                name="times"
                size={32}
                style={styles.closeButton}
              />
            </TouchableOpacity> */}
            {bottomSheetContent}
          </View>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
  },
  centeredView: {
    flex: 1,
    display: "flex",
    backgroundColor: "#00000099",
    position: "relative",
    justifyContent: "space-between",
  },
  closeButton: {
    marginTop: 4,
    marginRight: 3,
    color: defaultStyles.colors.primaryColor,
  },
  closeButtonContainer: {
    position: "absolute",
    top: 5,
    right: 5,
  },
  modalView: {
    backgroundColor: "white",
    borderTopStartRadius: defaultStyles.primaryBorderRadius,
    borderTopEndRadius: defaultStyles.primaryBorderRadius,
    width: "100%",
    // position: "absolute",
    bottom: 0,
    paddingTop: 20, // 35,
    maxHeight: 500,
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

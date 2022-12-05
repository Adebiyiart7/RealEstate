import { FontAwesome } from "@expo/vector-icons";
import {
  Modal,
  StyleSheet,
  View,
  TouchableOpacity
} from "react-native";

// LOCAL IMPORTS
import defaultStyles from "../config/styles";

const BottomSheet = ({
  bottomSheetVisible,
  setBottomSheetVisible,
  bottomSheetContent
}) => {
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={bottomSheetVisible}
      >
        <TouchableOpacity
          style={styles.centeredView}
          onPress={() => setBottomSheetVisible(false)}
        >
          <View style={styles.modalView}>
            <TouchableOpacity
              onPress={() => setBottomSheetVisible(false)}
              style={styles.closeButtonContainer}
            >
              <FontAwesome
                name="times-circle"
                size={32}
                style={styles.closeButton}
              />
            </TouchableOpacity>
            {bottomSheetContent}
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    backgroundColor: "#00000099"
  },
  closeButton: {
    color: defaultStyles.colors.primaryColor
  },
  closeButtonContainer: {
    position: "absolute",
    top: 5,
    right: 5
  },
  modalView: {
    backgroundColor: "white",
    borderTopStartRadius: defaultStyles.primaryRadius,
    borderTopEndRadius: defaultStyles.primaryRadius,
    width: "100%",
    position: "absolute",
    bottom: 0,
    paddingTop: 35,
    maxHeight: "50%"
  },
  modalText: {
    marginBottom: 15
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  }
});

export default BottomSheet;

import { Modal, StyleSheet, View } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";

// LOCAL IMPORTS
import colors from "../config/colors";

const Loading = ({ visible }) => {
  return (
    <Modal animationType="none" transparent visible={visible}>
      <View style={styles.container}>
        <LottieView
          autoPlay
          loop
          source={require("../assets/animations/loading.json")}
        />
      </View>
    </Modal>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    bottom: 0,
    width: "100%",
    backgroundColor: "#00000099"
  }
});

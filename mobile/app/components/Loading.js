import { Modal, StyleSheet, View } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";

// LOCAL IMPORTS
import colors from "../config/colors";
import { LIGHT, useTheme } from "../contexts/ThemeContext";

const Loading = React.memo(({ visible }) => {
  const { state } = useTheme();
  const containerStyles =
    state.theme === LIGHT ? styles.containerLight : styles.containerDark;

  return (
    <Modal animationType="none" transparent visible={visible}>
      <View style={[styles.container, containerStyles]}>
        <LottieView
          autoPlay
          loop
          source={require("../assets/animations/loading.json")}
        />
      </View>
    </Modal>
  );
});

export default Loading;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    bottom: 0,
    width: "100%",
  },
  containerLight: {
    backgroundColor: colors.light.mediumTransparentBackground,
  },
  containerDark: {
    backgroundColor: colors.dark.mediumTransparentBackground,
  },
});

import { Image, StyleSheet, View } from "react-native";
import { useEffect, useState } from "react";

// LOCAL IMPORTS
import AppText from "./AppText";
import colors from "../config/colors";
import { LIGHT, useTheme } from "../contexts/ThemeContext";

const ProcessStatus = ({ status, message, title, image, Actions }) => {
  const { state } = useTheme();
  const [time, setTime] = useState();
  const isLight = state.theme === LIGHT;

  let counter = 5;
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(`00:0${counter}`);
      counter--;
      if (counter < 0) {
        clearInterval(interval);
      }
    }, 1000);
  }, [counter]);

  const titleColor = isLight
    ? status === "failure"
      ? colors.light.danger
      : colors.light.primaryColor
    : status === "failure"
    ? colors.dark.danger
    : colors.dark.primaryColor;

  const centerContainerStyles = isLight
    ? styles.centerContainerLight
    : styles.centerContainerDark;

  const containerStyles = isLight
    ? styles.containerLight
    : styles.containerDark;

  const textStyles = isLight ? styles.textLight : styles.textDark;
  const timeStyles = isLight ? styles.timeLight : styles.timeDark;

  return (
    <View style={[styles.container, containerStyles]}>
      <View style={[styles.centerContainer, centerContainerStyles]}>
        <Image style={styles.image} source={image} />
        <AppText style={[styles.title, { color: titleColor }]}>{title}</AppText>
        <AppText style={[styles.text, textStyles]}>{message}</AppText>
        {!Actions && (
          <AppText style={[styles.time, timeStyles]}>{time}</AppText>
        )}
        <View style={styles.actions}>{Actions}</View>
      </View>
    </View>
  );
};

export default ProcessStatus;

const styles = StyleSheet.create({
  centerContainer: {
    display: "flex",
    alignItems: "center",
    minHeight: 350,
    minWidth: 250,
    maxWidth: 270,
    borderRadius: 40,
    padding: 16,
    paddingVertical: 25,
  },
  centerContainerLight: {
    backgroundColor: colors.light.white,
  },
  centerContainerDark: {
    backgroundColor: colors.dark.white,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 10,
  },
  container: {
    height: "100%",
    width: "100%",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1234,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  containerLight: {
    backgroundColor: colors.light.transparentBackground,
  },
  containerDark: {
    backgroundColor: colors.dark.transparentBackground,
  },
  text: {
    textAlign: "center",
    marginTop: 10,
  },
  textLight: {
    color: colors.light.mediumText,
  },
  textDark: {
    color: colors.dark.mediumText,
  },
  time: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 20,
  },
  timeLight: {
    color: colors.light.primaryColor,
  },
  timeDark: {
    color: colors.dark.primaryColor,
  },
});

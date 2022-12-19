import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";

// LOCAL IMPORTS
import defaultStyles from "../config/styles";
import AppText from "./AppText";

const AppButton = ({
  children,
  style,
  textStyle,
  startImage,
  onPress,
  disabled,
  small,
  secondary
}) => {
  const btn = {
    display: "flex",
    flexDirection: "row",
    padding: small ? 10 : 14,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10
  };

  const styles = {
    button: {
      backgroundColor: !secondary
        ? defaultStyles.colors.primaryColor
        : defaultStyles.colors.background200
    },
    startImageStyle: {
      height: 20,
      width: 20,
      marginRight: 5
    },
    text: {
      color: !secondary
        ? defaultStyles.colors.white
        : defaultStyles.colors.primaryColor,
      fontWeight: "600",
      fontSize: 16
    },
    disabled: {
      button: {
        backgroundColor: defaultStyles.colors.disabled
      }
    }
  };

  return (
    <>
      {!disabled ? (
        <TouchableOpacity onPress={onPress} style={[styles.button, btn, style]}>
          {startImage && (
            <Image source={startImage} style={styles.startImageStyle} />
          )}
          <AppText style={[styles.text, textStyle]}>{children}</AppText>
        </TouchableOpacity>
      ) : (
        <View style={[styles.disabled.button, btn, style]}>
          {startImage && (
            <Image source={startImage} style={styles.startImageStyle} />
          )}
          <AppText style={[styles.text, textStyle]}>{children}</AppText>
        </View>
      )}
    </>
  );
};

export default AppButton;

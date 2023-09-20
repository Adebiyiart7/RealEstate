import { StyleSheet, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useFormikContext } from "formik";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// LOCAL IMPORTS
import ErrorMessage from "./ErrorMessage";
import colors from "../../config/colors";
import { useTheme } from "../../contexts/ThemeContext";

const AppFormField = ({
  name,
  icon,
  onPress,
  style,
  secureInput,
  ...otherProps
}) => {
  const { state } = useTheme();
  const [isFocus, setIsFocus] = useState(false);
  const [hideSecureInput, setHideSecureInput] = useState(true);
  const { values, errors, touched, setFieldValue, setFieldTouched } =
    useFormikContext();

  const iconColor = isFocus
    ? colors[state.theme].primaryColor
    : colors[state.theme].mediumText;

  const textInputStyle = {
    paddingVertical: 8,
    borderColor: isFocus ? colors[state.theme].primaryColor : "transparent",
    borderWidth: isFocus ? 2 : 0,
  };

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <MaterialCommunityIcons
        style={{ ...styles.icon, color: iconColor }}
        name={icon}
        size={18}
      />
      {secureInput &&
        (hideSecureInput ? (
          <MaterialCommunityIcons
            name="eye-off"
            style={[styles.eye, styles.eyeTheme[state.theme]]}
            onPress={() => {
              setHideSecureInput(false);
            }}
          />
        ) : (
          <MaterialCommunityIcons
            name="eye"
            style={[styles.eye, styles.eyeTheme[state.theme]]}
            onPress={() => {
              setHideSecureInput(true);
            }}
          />
        ))}
      <TextInput
        style={[
          styles.textInput,
          styles.textInputTheme[state.theme],
          { paddingHorizontal: icon ? 37 : 16 },
          isFocus && textInputStyle,
          style,
        ]}
        name={name}
        onFocus={() => setIsFocus(true)}
        onChangeText={(value) => setFieldValue(name, value)}
        onBlur={() => {
          setFieldTouched(name);
          setIsFocus(false);
        }}
        value={values[name]}
        {...otherProps}
        secureTextEntry={secureInput && hideSecureInput}
        placeholderTextColor={colors[state.theme].lightText}
      />
      <ErrorMessage visible={touched[name]} error={errors[name]} />
    </TouchableOpacity>
  );
};

export default AppFormField;

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: 10,
    position: "relative",
  },
  eye: {
    position: "absolute",
    fontSize: 20,
    top: 14,
    right: 14,
    zIndex: 1234,
  },
  eyeTheme: {
    light: {
      color: colors.light.primaryText,
    },
    dark: {
      color: colors.dark.primaryText,
    },
  },
  textInput: {
    borderRadius: 30,
    paddingVertical: 10,
    fontSize: 16,
  },
  textInputTheme: {
    light: {
      color: colors.light.primaryText,
      backgroundColor: colors.light.background200,
    },
    dark: {
      color: colors.dark.primaryText,
      backgroundColor: colors.dark.background200,
    },
  },
  icon: {
    position: "absolute",
    top: 14,
    left: 14,
    zIndex: 1234,
  },
});

import { StyleSheet, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useFormikContext } from "formik";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// LOCAL IMPORTS
import ErrorMessage from "./ErrorMessage";
import defaultStyles from "../../config/styles";

const AppFormField = ({ name, icon, onPress, style, ...otherProps }) => {
  const [isFocus, setIsFocus] = useState(false);
  const { values, errors, touched, setFieldValue, setFieldTouched } =
    useFormikContext();

  const iconColor = isFocus
    ? defaultStyles.colors.primaryColor
    : defaultStyles.colors.mediumText;

  const textInputStyle = {
    paddingVertical: 8,
    borderColor: isFocus ? defaultStyles.colors.primaryColor : "transparent",
    borderWidth: isFocus ? 2 : 0
  };

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <MaterialCommunityIcons
        style={{ ...styles.icon, color: iconColor }}
        name={icon}
        size={18}
      />
      <TextInput
        style={[
          styles.textInput,
          { paddingHorizontal: icon ? 37 : 16 },
          isFocus && textInputStyle,
          style
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
        placeholderTextColor={defaultStyles.colors.lightText}
      />
      <ErrorMessage visible={touched[name]} error={errors[name]} />
    </TouchableOpacity>
  );
};

export default AppFormField;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: 10,
    position: "relative"
  },
  textInput: {
    borderRadius: 5,
    backgroundColor: defaultStyles.colors.background200,
    paddingVertical: 10,
    fontSize: 16,
    color: defaultStyles.colors.primaryText
  },
  icon: {
    position: "absolute",
    top: 14,
    left: 14,
    zIndex: 1234
  }
});

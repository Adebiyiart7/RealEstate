import { StyleSheet, TextInput, Text, View } from "react-native";
import React, { useState } from "react";
import { useFormikContext } from "formik";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// LOCAL IMPORTS
import ErrorMessage from "./ErrorMessage";
import defaultStyles from "../../config/styles";

const AppFormField = ({ name, icon, ...otherProps }) => {
  const [isFocus, setIsFocus] = useState(false);
  const { values, errors, touched, setFieldValue, setFieldTouched } =
    useFormikContext();

  const iconColor = isFocus
    ? defaultStyles.colors.primaryColor
    : defaultStyles.colors.mediumText;

  return (
    <View style={styles.container}>
      {
        <MaterialCommunityIcons
          style={{ ...styles.icon, color: iconColor }}
          name={icon}
          size={18}
        />
      }
      <TextInput
        style={styles.textInput}
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
    </View>
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
    borderRadius: defaultStyles.primaryRadius,
    backgroundColor: defaultStyles.colors.lightBackground,
    paddingVertical: 12,
    paddingHorizontal: 35,
    fontSize: 16,
    color: defaultStyles.colors.primaryText
  },
  icon: {
    position: "absolute",
    top: 14,
    left: 12
  }
});

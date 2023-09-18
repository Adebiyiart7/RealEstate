import { StyleSheet } from "react-native";
import React from "react";
import { useFormikContext } from "formik";

// LOCAL IMPORTS
import AppButton from "../AppButton";

const SubmitButton = React.memo(({ title, style, rounded = false }) => {
  const { handleSubmit } = useFormikContext();
  return (
    <AppButton rounded={rounded} style={style} onPress={() => handleSubmit()}>
      {title}
    </AppButton>
  );
});

export default SubmitButton;

const styles = StyleSheet.create({});

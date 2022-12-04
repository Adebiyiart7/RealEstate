import { StyleSheet } from "react-native";
import React from "react";
import { useFormikContext } from "formik";

// LOCAL IMPORTS
import AppButton from "../AppButton";

const SubmitButton = ({ title }) => {
  const { handleSubmit } = useFormikContext();
  return <AppButton onPress={() => handleSubmit()}>{title}</AppButton>;
};

export default SubmitButton;

const styles = StyleSheet.create({});

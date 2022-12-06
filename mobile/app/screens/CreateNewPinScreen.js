import { StyleSheet, View } from "react-native";
import React, { useState } from "react";

// LOCAL IMPORTS
import Screen from "../components/Screen";
import GoBackArrowHeader from "../components/GoBackArrowHeader";
import AppText from "../components/AppText";
import PinForm from "../components/form/PinForm";
import AppButton from "../components/AppButton";
import SetupSuccess from "../components/SetupSuccess";

const CreateNewPinScreen = ({ navigation }) => {
  const [pin, setPin] = useState({
    first: "",
    second: "",
    third: "",
    forth: ""
  });

  return (
    <>
      <SetupSuccess />
      <Screen>
        <View style={styles.container}>
          <GoBackArrowHeader title={"Create New Pin"} navigation={navigation} />
          <AppText style={styles.tag}>
            Add a PIN number to make you account more secure.
          </AppText>
          <PinForm secureTextEntry pin={pin} setPin={setPin} />
          <AppButton style={styles.button}>Continue</AppButton>
        </View>
      </Screen>
    </>
  );
};

export default CreateNewPinScreen;

const styles = StyleSheet.create({
  button: {
    marginTop: 30,
    marginHorizontal: 7
  },
  container: {
    display: "flex",
    justifyContent: "center"
  },
  tag: {
    marginTop: 60,
    marginBottom: 40,
    textAlign: "center",
    marginHorizontal: 10
  }
});

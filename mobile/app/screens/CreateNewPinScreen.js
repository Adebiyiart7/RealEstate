import { StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";

// LOCAL IMPORTS
import Screen from "../components/Screen";
import GoBackArrowHeader from "../components/GoBackArrowHeader";
import AppText from "../components/AppText";
import PinForm from "../components/form/PinForm";
import AppButton from "../components/AppButton";
import ProcessStatus from "../components/ProcessStatus";

const CreateNewPinScreen = ({ navigation }) => {
  const [pin, setPin] = useState("");

  useEffect(() => {
    console.log(pin);
  }, [pin])
  return (
    <>
      {/* <ProcessStatus
        status="success"
        title={"Congratulations!"}
        image={require("../assets/images/setup-success-image.png")}
        message={
          "Your account is ready to use. You will be redirected to the Home Page in a few seconds"
        }
      /> */}
      <Screen>
        <View style={styles.container}>
          <GoBackArrowHeader title={"Create New Pin"} navigation={navigation} />
          <AppText style={styles.tag}>
            Add a PIN number to make your account more secure.
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

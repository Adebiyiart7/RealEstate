import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Screen from "../components/Screen";
import GoBackArrowHeader from "../components/GoBackArrowHeader";
import AppText from "../components/AppText";
import PinForm from "../components/form/PinForm";
import AppButton from "../components/AppButton";
import ProcessStatus from "../components/ProcessStatus";

const ConfirmPinScreen = ({ navigation, route }) => {
  const item = route.params.item;
  const [pin, setPin] = useState({
    first: "",
    second: "",
    third: "",
    fourth: ""
  });

  return (
    <>
      <ProcessStatus
        status="success"
        title={"Congratulations!"}
        image={require("../assets/images/success-image.png")}
        message={
          `${item.name} successfully booked, you can check your bookings on the menu Profile -> My Booking`
        }
        Actions={
          <View style={{ marginTop: 10 }}>
            <AppButton rounded style={{ width: "100%", marginBottom: 0 }}>
              View E-Receipt
            </AppButton>
            <AppButton rounded secondary>
              Cancel
            </AppButton>
          </View>
        }
      />
      {/* <ProcessStatus
        status="failure"
        title={"Ops, Failed!"}
        image={require("../assets/images/failure-image.png")}
        message={
          "Your payment failed, please check your internet and try again!"
        }
        Actions={
          <View style={{ marginTop: 10 }}>
            <AppButton rounded style={{ width: "100%", marginBottom: 0 }}>
              Try Again
            </AppButton>
            <AppButton rounded secondary>
              Cancel
            </AppButton>
          </View>
        }
      /> */}
      <Screen>
        <GoBackArrowHeader navigation={navigation} title={"Enter Your Pin"} />
        <View style={styles.container}>
          <AppText style={styles.text}>Enter your PIN</AppText>
          <PinForm pin={pin} setPin={setPin} secureTextEntry />
          <AppButton style={styles.button}>Continue</AppButton>
        </View>
      </Screen>
    </>
  );
};

export default ConfirmPinScreen;

const styles = StyleSheet.create({
  button: {
    marginTop: 50
  },
  container: {
    marginTop: 50
  },
  text: {
    marginBottom: 30,
    textAlign: "center"
  }
});

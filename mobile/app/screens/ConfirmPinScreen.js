import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Screen from "../components/Screen";
import GoBackArrowHeader from "../components/GoBackArrowHeader";
import AppText from "../components/AppText";
import PinForm from "../components/form/PinForm";
import AppButton from "../components/AppButton";
import ProcessStatus from "../components/ProcessStatus";
import routes from "../config/routes";
import { estates } from "../db";
import LoginBottomSheet from "../components/LoginBottomSheet";
import { useSelector } from "react-redux";

const ConfirmPinScreen = ({ navigation, route }) => {
  const { user } = useSelector((state) => state.auth);
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showFailure, setShowFailure] = useState(false);
  const item = estates.find((i) => i._id === route.params._id);
  const userInfo = route.params.userInfo;
  const [pin, setPin] = useState({
    first: "",
    second: "",
    third: "",
    fourth: "",
  });

  // TODO: Fake confirmation
  const handleCorrectPin = () => {
    if (pin.length === 4) {
      setShowSuccess(true);
    } else {
      setShowFailure(true);
    }
  };

  return (
    <>
      <LoginBottomSheet
        bottomSheetVisible={bottomSheetVisible}
        setBottomSheetVisible={setBottomSheetVisible}
      />

      {showSuccess && (
        <ProcessStatus
          status="success"
          title={"Congratulations!"}
          image={require("../assets/images/success-image.png")}
          message={`${item.name} successfully booked, you can check your bookings on the menu Profile -> My Booking`}
          Actions={
            <View style={{ marginTop: 10 }}>
              <AppButton
                onPress={() => {
                  user
                    ? navigation.navigate(routes.E_RECEIPT, {
                        _id: route.params._id,
                        checksDetails: route.params.checksDetails,
                        userInfo: userInfo,
                      })
                    : setBottomSheetVisible(true);
                }}
                small
                rounded
                style={{ width: "100%", marginBottom: 0 }}
              >
                View E-Receipt
              </AppButton>
              {/* <AppButton
                small
                small
                rounded
                secondary
                onPress={() => setShowSuccess(false)}
              >
                Cancel
              </AppButton> */}
            </View>
          }
        />
      )}

      {showFailure && (
        <ProcessStatus
          status="failure"
          title={"Ops, Failed!"}
          image={require("../assets/images/failure-image.png")}
          message={
            "Your payment failed, please check your internet and try again!"
          }
          Actions={
            <View style={{ marginTop: 10 }}>
              <AppButton
                small
                rounded
                onPress={() => setShowFailure(false)}
                style={{ width: "100%", marginBottom: 0 }}
              >
                Try Again
              </AppButton>
              <AppButton
                small
                rounded
                secondary
                onPress={() => setShowFailure(false)}
              >
                Cancel
              </AppButton>
            </View>
          }
        />
      )}
      <Screen scrollable={false} style={styles.screen}>
        <GoBackArrowHeader navigation={navigation} title={"Enter Your Pin"} />
        <AppText style={styles.text}>Enter your PIN</AppText>
        <PinForm pin={pin} setPin={setPin} secureTextEntry />
        <AppButton
          rounded
          style={styles.button}
          onPress={() => handleCorrectPin()}
        >
          Continue
        </AppButton>
      </Screen>
    </>
  );
};

export default ConfirmPinScreen;

const styles = StyleSheet.create({
  button: {
    marginTop: "auto",
  },
  screen: {
    paddingBottom: 16,
  },
  text: {
    marginVertical: 50,
    textAlign: "center",
  },
});

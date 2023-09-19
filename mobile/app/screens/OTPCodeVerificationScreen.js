import { StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";

// LOCAL IMPORTS
import Screen from "../components/Screen";
import GoBackArrowHeader from "../components/GoBackArrowHeader";
import AppText from "../components/AppText";
import PinForm from "../components/form/PinForm";
import defaultStyles from "../config/styles";
import AppButton from "../components/AppButton";
import colors from "../config/colors";

const OTPCodeVerificationScreen = ({ navigation }) => {
  let counter = 5;
  const [time, setTime] = useState(counter);
  const [showResend, setShowResend] = useState(false);
  const [pin, setPin] = useState({
    first: "",
    second: "",
    third: "",
    forth: "",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(counter);
      counter--;
      if (counter < 0) {
        clearInterval(interval);
        setShowResend(true);
      }
    }, 1000);
  }, [counter]);

  return (
    <Screen>
      <View>
        <View>
          <GoBackArrowHeader
            title={"OTP Code Verification"}
            navigation={navigation}
          />
          <AppText style={styles.text}>
            Code have been sent to{" "}
            <AppText style={styles.contact}>+234 0902*****29</AppText>
          </AppText>
          <PinForm pin={pin} setPin={setPin} />
          <View style={styles.resendText}>
            {!showResend ? (
              <AppText>
                Resend code in <AppText style={styles.time}>{time}</AppText>s
              </AppText>
            ) : (
              <TouchableOpacity>
                <AppText style={styles.resendButton}>Resend</AppText>
              </TouchableOpacity>
            )}
          </View>
        </View>
        <AppButton style={styles.verifyButton}>Verify</AppButton>
      </View>
    </Screen>
  );
};

export default OTPCodeVerificationScreen;

const styles = StyleSheet.create({
  contact: {
    fontWeight: "500",
  },
  resendText: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 40,
  },
  resendButton: {
    color: colors.primaryColor,
    fontWeight: "600",
  },
  text: {
    marginTop: 55,
    marginBottom: 35,
    textAlign: "center",
  },
  time: {
    fontWeight: "600",
    color: colors.primaryColor,
  },
});

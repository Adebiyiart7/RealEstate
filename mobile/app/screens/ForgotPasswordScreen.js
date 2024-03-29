import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, Dimensions, Image, View, ScrollView } from "react-native";

// LOCAL IMPORTS
import Screen from "../components/Screen";
import GoBackArrowHeader from "../components/GoBackArrowHeader";
import AppText from "../components/AppText";
import Card1 from "../components/cards/Card1";
import AppButton from "../components/AppButton";
import colors from "../config/colors";
import { useTheme } from "../contexts/ThemeContext";

const mediaWidth = Dimensions.get("screen").width;
const SMS = "sms";
const EMAIL = "email";

const ForgotPasswordScreen = ({ navigation }) => {
  const { state } = useTheme();
  const [sendTo, setSendTo] = useState(SMS);

  return (
    <Screen scrollable={false}>
      <GoBackArrowHeader title={"Forgot Password"} navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <Image
          style={styles.image}
          source={require("../assets/images/forgot-password.png")}
        />
        <AppText style={styles.text}>
          Which contact detail should we use to reset your password?
        </AppText>
        <Card1
          selected={sendTo === SMS}
          onPress={() => setSendTo(SMS)}
          Icon={
            <MaterialCommunityIcons
              name="chat-processing"
              size={24}
              color={colors[state.theme].primaryColor}
            />
          }
          title="via SMS"
          subTitle="+234 902*****29"
        />
        <Card1
          selected={sendTo === EMAIL}
          onPress={() => setSendTo(EMAIL)}
          Icon={
            <MaterialCommunityIcons
              name="email"
              size={24}
              color={colors[state.theme].primaryColor}
            />
          }
          title="via Email"
          subTitle="ade********orld@gmail.com"
        />
        <AppButton rounded style={{ marginVertical: 20 }}>
          Continue
        </AppButton>
      </ScrollView>
    </Screen>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    paddingBottom: 76,
  },
  image: {
    width: mediaWidth - 120,
    height: mediaWidth - 110,
    alignSelf: "center",
    marginTop: 10,
  },
  text: {
    marginTop: 16,
  },
});

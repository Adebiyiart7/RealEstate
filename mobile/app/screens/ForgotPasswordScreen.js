import { StyleSheet, Dimensions, Image, View } from "react-native";
import React from "react";

// LOCAL IMPORTS
import Screen from "../components/Screen";
import GoBackArrowHeader from "../components/GoBackArrowHeader";
import AppText from "../components/AppText";
import Card1 from "../components/cards/Card1";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "../config/styles";
import AppButton from "../components/AppButton";

const mediaWidth = Dimensions.get("screen").width;
const ForgotPasswordScreen = () => {
  
  return (
    <Screen>
      <View style={styles.container}>
        <GoBackArrowHeader title={"Forgot Password"} />
        <Image
          style={styles.image}
          source={require("../assets/images/forgot-password.png")}
        />
        <AppText style={styles.text}>
          Which contact detail should we use to reset your password?
        </AppText>
        <Card1
          selected
          Icon={<MaterialCommunityIcons name="chat-processing" size={24} color={defaultStyles.colors.primaryColor} />}
          title="via SMS"
          subTitle="+234 902*****29"
        />
        <Card1
          Icon={<MaterialCommunityIcons name="email" size={24} color={defaultStyles.colors.primaryColor} />}
          title="via Email"
          subTitle="ade********orld@gmail.com dsdsdsdsdsd"
        />
        <AppButton style={{marginVertical: 20}}>Continue</AppButton>
      </View>
    </Screen>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  container: {
    display: "flex"
  },
  image: {
    width: mediaWidth - 100,
    height: mediaWidth - 90,
    alignSelf: "center",
    marginTop: 10
  },
  text: {
    marginTop: 16,
  
  }
});

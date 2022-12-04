// NODE_MODULES
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

// LOCAL IMPORTS
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import GoBackArrowHeader from "../components/GoBackArrowHeader";
import Screen from "../components/Screen";
import TextWithLines from "../components/TextWithLines";
import defaultStyles from "../config/styles";

const LetsYouIn = () => {
  return (
    <Screen>
      <View style={styles.container}>
        <GoBackArrowHeader />
        <Image
          style={styles.image}
          source={require("../assets/images/lets-you-in.png")}
        />
        <AppText style={styles.text}>Let's you in</AppText>
        <View style={styles.actions}>
          <AppButton
            startImage={require("../assets/images/facebook-icon.png")}
            style={styles.socialActions}
            textStyle={styles.socialText}
          >
            Continue with Facebook
          </AppButton>
          <AppButton
            startImage={require("../assets/images/google-icon.png")}
            style={styles.socialActions}
            textStyle={styles.socialText}
          >
            Continue with Google
          </AppButton>
          <AppButton
            startImage={require("../assets/images/apple-icon.png")}
            style={styles.socialActions}
            textStyle={styles.socialText}
          >
            Continue with Apple
          </AppButton>
          <TextWithLines style={styles.textWithLines}>Or</TextWithLines>
          <AppButton>Sign in with password</AppButton>
          <AppText style={styles.noAccountText}>
            Don't have an account?{" "}
            <TouchableOpacity>
              <AppText style={styles.signUpText}>Sign up</AppText>
            </TouchableOpacity>
          </AppText>
        </View>
      </View>
    </Screen>
  );
};

export default LetsYouIn;

const styles = StyleSheet.create({
  actions: {
    width: "100%"
  },
  container: {
    display: "flex",
    alignItems: "center",
    paddingBottom: 16
  },
  image: {
    width: 200,
    height: 170
  },
  noAccountText: {
    textAlign: "center",
    color: defaultStyles.colors.lightText,
    marginVertical: 10
  },
  signUpText: {
    color: defaultStyles.colors.primaryColor,
    fontWeight: "500"
  },
  socialActions: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: defaultStyles.colors.border100,
    color: defaultStyles.colors.primaryText,
    borderRadius: defaultStyles.primaryRadius
  },
  socialText: {
    color: defaultStyles.colors.primaryText
  },
  text: {
    fontSize: 35,
    fontWeight: "bold",
    marginVertical: 10
  },
  textWithLines: {
    marginVertical: 24
  }
});

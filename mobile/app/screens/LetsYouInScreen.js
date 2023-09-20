// NODE_MODULES
import { Image, StyleSheet, View } from "react-native";

// LOCAL IMPORTS
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import GoBackArrowHeader from "../components/GoBackArrowHeader";
import Screen from "../components/Screen";
import TextWithLines from "../components/TextWithLines";
import colors from "../config/colors";
import routes from "../config/routes";
import defaultStyles from "../config/styles";
import { useTheme } from "../contexts/ThemeContext";

const LetsYouIn = ({ navigation }) => {
  const { state } = useTheme();
  const socialTextStyles = { color: colors[state.theme].primaryText };
  const socialActionsStyles = {
    borderColor: colors[state.theme].border200,
    color: colors[state.theme].primaryText,
    borderRadius: defaultStyles.primaryBorderRadius,
  };

  return (
    <Screen>
      <View style={styles.container}>
        <GoBackArrowHeader
          navigation={navigation}
          RightIcon={
            <AppText
              onPress={() => navigation.navigate(routes.TAB)}
              style={[
                styles.skipText,
                { color: colors[state.theme].primaryColor },
              ]}
            >
              Skip
            </AppText>
          }
        />
        <Image
          style={styles.image}
          source={require("../assets/images/lets-you-in.png")}
        />
        <AppText style={styles.text}>Let's you in</AppText>
        <View style={styles.actions}>
          <AppButton
            startImage={require("../assets/images/facebook-icon.png")}
            style={[styles.socialActions, socialActionsStyles]}
            textStyle={[styles.socialText, socialTextStyles]}
          >
            Continue with Facebook
          </AppButton>
          <AppButton
            startImage={require("../assets/images/google-icon.png")}
            style={[styles.socialActions, socialActionsStyles]}
            textStyle={[styles.socialText, socialTextStyles]}
          >
            Continue with Google
          </AppButton>
          <AppButton
            startImage={require("../assets/images/apple-icon.png")}
            style={[styles.socialActions, socialActionsStyles]}
            textStyle={[styles.socialText, socialTextStyles]}
          >
            Continue with Apple
          </AppButton>
          <TextWithLines style={styles.textWithLines}>Or</TextWithLines>
          <AppButton rounded onPress={() => navigation.navigate(routes.LOGIN)}>
            Sign in with password
          </AppButton>
          <AppText
            style={[
              styles.noAccountText,
              { color: colors[state.theme].lightText },
            ]}
          >
            Don't have an account?{" "}
            <AppText
              onPress={() => navigation.navigate(routes.REGISTER)}
              style={[
                styles.signUpText,
                { color: colors[state.theme].primaryColor },
              ]}
            >
              Sign up
            </AppText>
          </AppText>
        </View>
      </View>
    </Screen>
  );
};

export default LetsYouIn;

const styles = StyleSheet.create({
  actions: {
    width: "100%",
  },
  container: {
    display: "flex",
    alignItems: "center",
    paddingBottom: 16,
  },
  image: {
    width: 200,
    height: 170,
  },
  noAccountText: {
    textAlign: "center",
    marginVertical: 10,
  },
  signUpText: {
    fontWeight: "500",
  },
  skipText: {
    fontSize: 18,
  },
  socialActions: {
    backgroundColor: "transparent",
    borderWidth: 1,
  },
  text: {
    fontSize: 35,
    fontWeight: "bold",
    marginVertical: 10,
  },
  textWithLines: {
    marginVertical: 24,
  },
});

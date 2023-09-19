// NODE_MODULES
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

// LOCAL IMPORTS
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import GoBackArrowHeader from "../components/GoBackArrowHeader";
import Screen from "../components/Screen";
import SeeAllText from "../components/SeeAllText";
import TextWithLines from "../components/TextWithLines";
import colors from "../config/colors";
import routes from "../config/routes";
import defaultStyles from "../config/styles";

const LetsYouIn = ({ navigation }) => {
  return (
    <Screen>
      <View style={styles.container}>
        <GoBackArrowHeader
          navigation={navigation}
          RightIcon={
            <AppText
              onPress={() => navigation.navigate(routes.TAB)}
              style={styles.skipText}
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
          <AppButton rounded onPress={() => navigation.navigate(routes.LOGIN)}>
            Sign in with password
          </AppButton>
          <AppText style={styles.noAccountText}>
            Don't have an account?{" "}
            <AppText
              onPress={() => navigation.navigate(routes.REGISTER)}
              style={styles.signUpText}
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
    color: colors.lightText,
    marginVertical: 10,
  },
  signUpText: {
    color: colors.primaryColor,
    fontWeight: "500",
  },
  skipText: {
    fontSize: 18,
    color: colors.primaryColor,
  },
  socialActions: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: colors.border200,
    color: colors.primaryText,
    borderRadius: defaultStyles.primaryBorderRadius,
  },
  socialText: {
    color: colors.primaryText,
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

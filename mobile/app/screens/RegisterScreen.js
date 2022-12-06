import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

// LOCAL IMPORTS
import Screen from "../components/Screen";
import GoBackArrowHeader from "../components/GoBackArrowHeader";
import AppText from "../components/AppText";
import defaultStyles from "../config/styles";
import AppButton from "../components/AppButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import TextWithLines from "../components/TextWithLines";
import SubmitButton from "../components/form/SubmitButton";
import AuthFooter from "../components/AuthFooter";
import AppFormField from "../components/form/AppFormField";

const passwordRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
const passwordError =
  "Password must be more than 8 chars, have at least one number, at least one special character(!@#$%^&*), at least one uppercase and one lowercase.";

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required().label("Email"),
  password: Yup.string()
    .required()
    .matches(passwordRegEx, passwordError)
    .label("Password")
});

const RegisterScreen = () => {
  return (
    <Screen>
      <View style={styles.container}>
        <GoBackArrowHeader />
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.logo}
        />
        <AppText style={styles.title}>Create New Account</AppText>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          {() => (
            <>
              <AppFormField
                icon="email"
                name={"email"}
                placeholder={"Email"}
                autoCapitalize="false"
                autoCorrect="false"
                keyboardType="email-address"
                textContentType="emailAddress"
              />
              <AppFormField
                icon="lock"
                name={"password"}
                placeholder={"Password"}
                secureTextEntry
              />
              <View style={styles.rememberMe}>
                <MaterialCommunityIcons
                  name="checkbox-blank-outline"
                  size={20}
                  style={styles.rememberMeIcon}
                />
                <AppText style={styles.rememberMeText}>Remember me</AppText>
              </View>
              <SubmitButton title="Sign up" />
            </>
          )}
        </Formik>
        <AuthFooter styles={styles} />
        <AppText style={styles.signiInMessage}>
          Already have an account?{" "}
          <AppText style={styles.signIn}>Sign in</AppText>
        </AppText>
      </View>
    </Screen>
  );
};

export default RegisterScreen;

export const styles = StyleSheet.create({
  logo: {
    height: 100,
    width: 100,
    marginTop: 20,
    alignSelf: "center"
  },
  container: {
    display: "flex"
  },
  continueText: {
    fontWeight: "500",
    color: defaultStyles.colors.mediumText
  },
  forgotPassword: {
    color: defaultStyles.colors.primaryColor,
    fontWeight: "500",
    textAlign: "center"
  },
  otherOptions: {
    marginTop: 30
  },
  rememberMe: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 5
  },
  rememberMeIcon: {
    marginRight: 5,
    color: defaultStyles.colors.primaryColor
  },
  rememberMeText: {
    fontWeight: "500"
  },
  signIn: {
    color: defaultStyles.colors.primaryColor,
    fontWeight: "500"
  },
  signiInMessage: {
    marginVertical: 20,
    color: defaultStyles.colors.lightText,
    textAlign: "center"
  },
  social: {
    borderWidth: 1,
    borderColor: defaultStyles.colors.border100,
    paddingHorizontal: 25,
    paddingVertical: 12,
    marginHorizontal: 7,
    borderRadius: defaultStyles.primaryBorderRadius
  },
  socialImage: {
    height: 20,
    width: 20
  },
  socials: {
    marginTop: 30,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  },
  title: {
    ...defaultStyles.titleFont,
    marginTop: 25,
    textAlign: "center"
  }
});

import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

// LOCAL IMPORTS
import Screen from "../components/Screen";
import GoBackArrowHeader from "../components/GoBackArrowHeader";
import AppText from "../components/AppText";
import AppFormField from "../components/form/AppFormField";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import TextWithLines from "../components/TextWithLines";
import SubmitButton from "../components/form/SubmitButton";
import { styles } from "./RegisterScreen";
import AuthFooter from "../components/AuthFooter";

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

const LoginScreen = () => {
  return (
    <Screen>
      <View style={styles.container}>
        <GoBackArrowHeader />
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.logo}
        />
        <AppText style={styles.title}>Login to Your Account</AppText>
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
              <SubmitButton title="Sign in" />
              <TouchableOpacity>
                <AppText style={styles.forgotPassword}>
                  Forgot the password?
                </AppText>
              </TouchableOpacity>
            </>
          )}
        </Formik>
        <AuthFooter styles={styles} />
        <AppText style={styles.signiInMessage}>
          Don't have an account?{" "}
          <AppText style={styles.signIn}>Sign up</AppText>
        </AppText>
      </View>
    </Screen>
  );
};

export default LoginScreen;
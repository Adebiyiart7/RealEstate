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

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required().label("Email"),
  password: Yup.string()
    .required()
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
                  name="square-rounded-outline"
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

import * as Yup from "yup";
import { Formik } from "formik";
import { Image, StyleSheet, View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";

// LOCAL IMPORTS
import Screen from "../components/Screen";
import GoBackArrowHeader from "../components/GoBackArrowHeader";
import AppText from "../components/AppText";
import defaultStyles from "../config/styles";
import SubmitButton from "../components/form/SubmitButton";
import AuthFooter from "../components/AuthFooter";
import AppFormField from "../components/form/AppFormField";
import constants from "../config/constants";
import routes from "../config/routes";
import { register, reset } from "../features/auth/authSlice";

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required().label("Email"),
  password: Yup.string()
    .required()
    .matches(constants.passwordRegEx, constants.passwordError)
    .label("Password")
});

const RegisterScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(register(values));
    dispatch(reset())
    console.log("Hello")
    navigation.navigate(routes.APP)
  };

  return (
    <Screen>
      <View style={styles.container}>
        <GoBackArrowHeader navigation={navigation} />
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.logo}
        />
        <AppText style={styles.title}>Create New Account</AppText>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => handleSubmit(values)}
          validationSchema={validationSchema}
        >
          {() => (
            <>
              <AppFormField
                icon="email"
                name={"email"}
                placeholder={"Email"}
                autoCapitalize="false"
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
                  size={24}
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
          <AppText
            onPress={() => navigation.navigate(routes.LOGIN)}
            style={styles.signIn}
          >
            Sign in
          </AppText>
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
    marginTop: 10,
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
    alignItems:"center",
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

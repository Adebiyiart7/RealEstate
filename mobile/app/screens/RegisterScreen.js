import * as Yup from "yup";
import { Formik } from "formik";
import { Image, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

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
import Loading from "../components/Loading";
import colors from "../config/colors";
import { useTheme } from "../contexts/ThemeContext";

const validationSchema = Yup.object().shape({
  username: Yup.string().required().label("Username"),
  email: Yup.string().email().required().label("Email"),
  password: Yup.string()
    .required()
    .matches(constants.passwordRegEx, constants.passwordError)
    .label("Password"),
});

const RegisterScreen = ({ navigation }) => {
  const { state: themeState } = useTheme();
  const dispatch = useDispatch();
  const { isLoading, isError, isSuccess, message, user } = useSelector(
    (state) => state.auth
  );

  const handleSubmit = (values) => {
    dispatch(register(values));
  };

  useEffect(() => {
    if (isError) console.log(message); // TODO log message in a alert box instead

    if (isSuccess || user) {
      navigation.navigate(routes.TAB);
    }

    dispatch(reset());
  }, [dispatch, isSuccess, message, navigation, isError, user]);

  return (
    <Screen>
      <Loading visible={isLoading} />
      <View style={styles.container}>
        <GoBackArrowHeader navigation={navigation} />
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.logo}
        />
        <AppText style={styles.title}>Create New Account</AppText>
        <Formik
          initialValues={{
            username: "Adebiyiart",
            email: "test@gmail.com",
            password: "Test@123",
          }}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
          validationSchema={validationSchema}
        >
          {() => (
            <>
              <AppFormField
                icon="account"
                name={"username"}
                placeholder={"Username"}
                autoCapitalize="false"
              />
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
                secureInput
              />
              <View style={styles.rememberMe}>
                <MaterialCommunityIcons
                  name="square-rounded-outline"
                  size={24}
                  style={[
                    styles.rememberMeIcon,
                    { color: colors[themeState.theme].primaryColor },
                  ]}
                />
                <AppText style={styles.rememberMeText}>Remember me</AppText>
              </View>
              <SubmitButton rounded title="Sign up" />
            </>
          )}
        </Formik>
        <AuthFooter styles={styles} />
        <AppText
          style={[
            styles.signiInMessage,
            { color: colors[themeState.theme].lightText },
          ]}
        >
          Already have an account?{" "}
          <AppText
            onPress={() => navigation.navigate(routes.LOGIN)}
            style={[
              styles.signIn,
              { color: colors[themeState.theme].primaryColor },
            ]}
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
    height: 120,
    width: 330,
    alignSelf: "center",
  },
  container: {
    display: "flex",
    paddingBottom: 50,
  },
  continueText: {
    fontWeight: "500",
  },
  forgotPassword: {
    fontWeight: "500",
    textAlign: "center",
    marginTop: 10,
  },
  otherOptions: {
    marginTop: 30,
  },
  rememberMe: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
  },
  rememberMeIcon: {
    marginRight: 5,
  },
  rememberMeText: {
    fontWeight: "500",
  },
  signIn: {
    fontWeight: "500",
  },
  signiInMessage: {
    marginVertical: 20,
    textAlign: "center",
  },
  social: {
    borderWidth: 1,
    paddingHorizontal: 25,
    paddingVertical: 12,
    marginHorizontal: 7,
    borderRadius: defaultStyles.primaryBorderRadius,
  },
  socialImage: {
    height: 20,
    width: 20,
  },
  socials: {
    marginTop: 30,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  title: {
    ...defaultStyles.titleFont,
    marginTop: 25,
    textAlign: "center",
  },
});

/**
 * 
 * 
 *  logo: {
    height: 120,
    width: 330,
    alignSelf: "center",
  },
  container: {
    display: "flex",
    paddingBottom: 50,
  },
  continueText: {
    fontWeight: "500",
    color: colors.mediumText,
  },

  otherOptions: {
    marginTop: 30,
  },
  rememberMe: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
  },
  rememberMeIcon: {
    marginRight: 5,
    color: colors.primaryColor,
  },
  rememberMeText: {
    fontWeight: "500",
  },
  signIn: {
    color: colors.primaryColor,
    fontWeight: "500",
  },
  signiInMessage: {
    marginVertical: 20,
    color: colors.lightText,
    textAlign: "center",
  },

  title: {
    ...defaultStyles.titleFont,
    marginTop: 25,
    textAlign: "center",
  },
 */

import { Image, TouchableOpacity, View } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

// LOCAL IMPORTS
import Screen from "../components/Screen";
import GoBackArrowHeader from "../components/GoBackArrowHeader";
import AppText from "../components/AppText";
import AppFormField from "../components/form/AppFormField";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import SubmitButton from "../components/form/SubmitButton";
import { styles } from "./RegisterScreen";
import AuthFooter from "../components/AuthFooter";
import routes from "../config/routes";
import { login, reset } from "../features/auth/authSlice";
import Loading from "../components/Loading";

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required().label("Email"),
  password: Yup.string().required().label("Password"),
});

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const handleSubmit = (values) => {
    dispatch(login(values));
  };

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (isSuccess || user) {
      navigation.navigate(routes.TAB);
    }

    dispatch(reset());
  }, [user, isSuccess, isError, message, dispatch, navigation]);

  return (
    <Screen>
      <Loading visible={isLoading} />
      <View style={styles.container}>
        <GoBackArrowHeader navigation={navigation} />
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.logo}
        />
        <AppText style={styles.title}>Login to Your Account</AppText>
        <Formik
          initialValues={{
            email: "test@gmail.com",
            password: "Test@123",
          }}
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
                secureInput
              />
              <View style={styles.rememberMe}>
                <MaterialCommunityIcons
                  name="square-rounded-outline"
                  size={24}
                  style={styles.rememberMeIcon}
                />
                <AppText style={styles.rememberMeText}>Remember me</AppText>
              </View>
              <SubmitButton rounded title="Sign in" />
              <TouchableOpacity
                onPress={() => navigation.navigate(routes.FORGOT_PASSWORD)}
              >
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
          <AppText
            onPress={() => navigation.navigate(routes.REGISTER)}
            style={styles.signIn}
          >
            Sign up
          </AppText>
        </AppText>
      </View>
    </Screen>
  );
};

export default LoginScreen;

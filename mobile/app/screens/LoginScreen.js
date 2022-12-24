import { Image, TouchableOpacity, View } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch,  } from "react-redux";
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

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required().label("Email"),
  password: Yup.string().required().label("Password")
});

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const handleSubmit = (values) => {
// dispatch(auth)
  }
  return (
    <Screen>
      <View style={styles.container}>
        <GoBackArrowHeader navigation={navigation} />
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.logo}
        />
        <AppText style={styles.title}>Login to Your Account</AppText>
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
              <SubmitButton title="Sign in" />
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

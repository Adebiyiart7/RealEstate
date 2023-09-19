import React from "react";
import { Formik } from "formik";
import { Image, StyleSheet, View } from "react-native";
import * as Yup from "yup";

// LOCAL IMPORTS
import Screen from "../components/Screen";
import GoBackArrowHeader from "../components/GoBackArrowHeader";
import AppText from "../components/AppText";
import constants from "../config/constants";
import AppFormField from "../components/form/AppFormField";
import SubmitButton from "../components/form/SubmitButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "../config/styles";
import ProcessStatus from "../components/ProcessStatus";
import colors from "../config/colors";

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .required()
    .matches(constants.passwordRegEx, constants.passwordError),
});

const CreateNewPasswordScreen = ({ navigation }) => {
  return (
    <>
      <ProcessStatus
        status="success"
        title={"Congratulations!"}
        image={require("../assets/images/setup-success-image.png")}
        message={
          "Your account is ready to use. You will be redirected to the Home Page in a few seconds"
        }
      />
      <Screen>
        <GoBackArrowHeader
          title={"Create New Password"}
          navigation={navigation}
        />
        <Image
          style={styles.image}
          source={require("../assets/images/create-new-password.png")}
        />
        <AppText style={styles.text}>Create Your New Password</AppText>
        <Formik
          initialValues={{ password: "", password2: "" }}
          onSubmit={(values) => {
            console.log(values);
          }}
          validationSchema={validationSchema}
        >
          {({}) => (
            <>
              <AppFormField
                icon={"lock"}
                name={"password"}
                required
                secureTextEntry
                placeholder="New Password"
              />
              <AppFormField
                icon={"lock"}
                name={"password2"}
                required
                secureTextEntry
                placeholder="Confirm New Password"
              />
              <View style={styles.rememberMe}>
                <MaterialCommunityIcons
                  name="square-rounded-outline"
                  size={24}
                  style={styles.checkbox}
                />
                <AppText>Remember me</AppText>
              </View>
              <SubmitButton style={styles.button} title={"Continue"} />
            </>
          )}
        </Formik>
      </Screen>
    </>
  );
};

export default CreateNewPasswordScreen;

const styles = StyleSheet.create({
  button: {
    marginBottom: 20,
  },
  checkbox: {
    color: colors.primaryColor,
    marginRight: 5,
  },
  image: {
    height: 216 - 10,
    width: 260 - 10,
    alignSelf: "center",
    marginHorizontal: 0,
    marginTop: 20,
  },
  rememberMe: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  text: {
    marginTop: 30,
  },
});

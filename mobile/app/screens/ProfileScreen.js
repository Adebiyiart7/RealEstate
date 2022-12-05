import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import * as Yup from "yup";
import { Formik } from "formik";

//LOCAL IMPORTS
import defaultStyles from "../config/styles";
import Screen from "../components/Screen";
import GoBackArrowHeader from "../components/GoBackArrowHeader";
import AppFormField from "../components/form/AppFormField";
import SubmitButton from "../components/form/SubmitButton";

const initialValues = {
  fullname: "",
  nickname: "",
  email: "",
  dob: "",
  country: "",
  gender: ""
};

const validationSchema = Yup.object().shape({
  fullname: Yup.string().required().max(255).label("Full Name"),
  nickname: Yup.string().required().max(255).label("Nickname"),
  email: Yup.string().required().max(255).label("Email"),
  dob: Yup.string().required().max(255).label("Date of Birth"),
  country: Yup.string().required().max(50).label("Country"),
  gender: Yup.string().required().max(10).label("Gender")
});

const ProfileScreen = () => {
  return (
    <Screen>
      <GoBackArrowHeader title="Fill Your Profile" />
      <View style={styles.photoContainer}>
        <View style={styles.photo}>
          <Ionicons style={styles.avatar} name="md-person" size={125} />
        </View>
        <TouchableOpacity>
          <FontAwesome
            name="pencil-square"
            size={30}
            style={styles.editPhoto}
          />
        </TouchableOpacity>
      </View>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
      >
        {() => (
          <View>
            <AppFormField
              icon={"account"}
              name={"fullname"}
              placeholder={"Full Name"}
            />
            <AppFormField
              icon={"account-outline"}
              name={"nickname"}
              placeholder={"Nickname"}
            />
            <AppFormField icon={"email"} name={"email"} placeholder={"Email"} />
            <AppFormField
              icon={"calendar"}
              name={"dob"}
              placeholder={"Date of Birth"}
            />
            <AppFormField
              icon={"flag-variant"}
              name={"country"}
              placeholder={"Country"}
            />
            <AppFormField
              icon={"account-box"}
              name={"gender"}
              placeholder={"Gender"}
            />
            <SubmitButton title={"Continue"} />
          </View>
        )}
      </Formik>
    </Screen>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  avatar: {
    color: defaultStyles.colors.mediumText,
    opacity: "40%",
    position: "relative",
    top: 12
  },
  editPhoto: {
    position: "absolute",
    bottom: 3,
    right: 3,

    color: defaultStyles.colors.primaryColor
  },
  photo: {
    overflow: "hidden",
    backgroundColor: defaultStyles.colors.lightBackground,
    borderRadius: "50%",
    height: 125
  },
  photoContainer: {
    alignSelf: "center",
    marginBottom: 20
  }
});

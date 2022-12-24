import { Formik } from "formik";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import * as Yup from "yup";

// LOCAL IMPORTS
import GoBackArrowHeader from "../../components/GoBackArrowHeader";
import Screen from "../../components/Screen";
import AppFormField from "../../components/form/AppFormField";
import { Header } from "../../components/PropertiesFilterContent";
import SubmitButton from "../../components/form/SubmitButton";
import routes from "../../config/routes";

const initialValues = {
  fullname: "Adeeyo Joseph Adebiyi",
  username: "Adebiyiart",
  gender: "Male",
  dob: "01-01-2009",
  email: "adebiyiartworld@gmail.com",
  phoneNumber: "09029242729",
  country: "Nigeria"
};
const validationSchema = Yup.object().shape({
  fullname: Yup.string().required().min(3).max(255).label("Full Name"),
  username: Yup.string().required().min(3).max(255).label("Username"),
  gender: Yup.string().required().min(3).max(255).label("gender"),
  dob: Yup.string().required().min(3).max(255).label("Date of Birth"),
  email: Yup.string().required().min(3).max(255).email().label("Email"),
  phoneNumber: Yup.string().required().min(3).max(255).label("Phone Number"),
  country: Yup.string().required().min(3).max(255).label("Country"),
});

const BookingFormScreen = ({ navigation, route }) => {
  return (
    <Screen>
      <GoBackArrowHeader navigation={navigation} title={"Book Real Estate"} />
      <Header title={"Your Information Details"} />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          navigation.navigate(routes.BOOKING_PAYMENT, {
            _id: route.params._id,
            userInfo: values,
            checksDetails: route.params.checksDetails
          });
        }}
      >
        {() => (
          <View>
            <AppFormField
              icon={"account"}
              name={"fullname"}
              placeholder={"Full Name"}
            />
            <AppFormField
              icon={"account"}
              name={"username"}
              placeholder={"Username"}
            />
            <AppFormField
              icon={"account-box"}
              name={"gender"}
              placeholder={"Gender"}
            />
            <AppFormField
              icon={"calendar"}
              name={"dob"}
              placeholder={"Date of Birth"}
            />
            <AppFormField icon={"email"} name={"email"} placeholder={"Email"} />
            <AppFormField
              icon={"phone"}
              name={"phoneNumber"}
              placeholder={"Phone Number"}
            />
            <AppFormField
              icon={"flag-variant"}
              name={"country"}
              placeholder={"Country"}
            />
            <View>
              <SubmitButton style={{ marginBottom: 50 }} title={"Continue"} />
            </View>
          </View>
        )}
      </Formik>
    </Screen>
  );
};

export default BookingFormScreen;

const styles = StyleSheet.create({});

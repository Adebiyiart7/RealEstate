import { StyleSheet, TouchableOpacity, View } from "react-native";
import {  useState } from "react";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import * as Yup from "yup";
import { Formik } from "formik";

//LOCAL IMPORTS
import defaultStyles from "../config/styles";
import Screen from "../components/Screen";
import GoBackArrowHeader from "../components/GoBackArrowHeader";
import AppFormField from "../components/form/AppFormField";
import BottomSheet from "../components/BottomSheet";
import SelectOptions from "../components/form/SelectOptions";
import CodeBottomSheet from "../components/form/CodeBottomSheet";
import AppButton from "../components/AppButton";
import { clearAuth } from "../features/auth/authSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import routes from "../config/routes";

const validationSchema = Yup.object().shape({
  fullname: Yup.string().required().max(255).label("Full Name"),
  username: Yup.string().required().max(255).label("Username"),
  email: Yup.string().required().max(255).label("Email"),
  dob: Yup.string().required().max(255).label("Date of Birth"),
  country: Yup.string().required().max(50).label("Country"),
  gender: Yup.string().required().max(10).label("Gender")
});

const FillProfileScreen = ({ navigation }) => {
  const [code, setCode] = useState("");
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);
  const [bottomSheetVisibleCode, setBottomSheetVisibleCode] = useState(false);

  const initialValues = {
    fullname: "Adeeyo Joseph",
    username: "Adebiyiart",
    phoneNumber: "09029242729",
    email: "adebiyiartworld@gmail.com",
    dob: "07/02/2023",
    country: "Nigeria",
    gender: "Male"
  };

  return (
    <Screen>
      <GoBackArrowHeader title="Fill Your Profile" navigation={navigation} />
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

      >
        {({ setFieldValue, values }) => (
          <View>
            <BottomSheet
              bottomSheetVisible={bottomSheetVisible}
              setBottomSheetVisible={setBottomSheetVisible}
              bottomSheetContent={
                <SelectOptions
                  fieldName="gender"
                  data={[{ value: "Male" }, { value: "Female" }]}
                  setFieldValue={setFieldValue}
                  setBottomSheetVisible={setBottomSheetVisible}
                />
              }
            />
            <BottomSheet
              bottomSheetVisible={bottomSheetVisibleCode}
              setBottomSheetVisible={setBottomSheetVisibleCode}
              bottomSheetContent={
                <CodeBottomSheet
                  code={code}
                  setCode={setCode}
                  email={values.email}
               
                />
              }
            />
            <AppFormField
              icon={"account"}
              name={"fullname"}
              placeholder={"Full Name"}
            />
            <AppFormField
              icon={"account-outline"}
              name={"username"}
              placeholder={"Username"}
            />
            <AppFormField
              icon={"phone"}
              name={"phoneNumber"}
              placeholder={"Phone Number"}
            />
            <AppFormField icon={"email"} name={"email"} placeholder={"Email"} />
            <AppFormField
              icon={"calendar"}
              name={"dob"}
              placeholder={"Date of Birth"}
            />
            {/* TODO work on date picker using emulator or device  */}
            <AppFormField
              icon={"flag-variant"}
              name={"country"}
              placeholder={"Country"} // TODO fetch country data from backend
            />
            <AppFormField
              icon={"account-box"}
              name={"gender"}
              placeholder={"Gender"}
              value={values.gender}
              editable={false}
              onPress={() => setBottomSheetVisible(true)}
            />
            <AppButton
              style={{ marginBottom: 30 }}
            >
              Continue
            </AppButton>
          </View>
        )}
      </Formik>
    </Screen>
  );
};

export default FillProfileScreen;

const styles = StyleSheet.create({
  avatar: {
    color: defaultStyles.colors.mediumText,
    // opacity: 40,
    position: "relative",
    top: 12
  },
  codeInput: {},
  editPhoto: {
    position: "absolute",
    bottom: 3,
    right: 3,
    color: defaultStyles.colors.primaryColor
  },
  photo: {
    overflow: "hidden",
    backgroundColor: defaultStyles.colors.background100,
    borderRadius: 200,
    height: 125
  },
  photoContainer: {
    alignSelf: "center",
    marginBottom: 20
  }
});

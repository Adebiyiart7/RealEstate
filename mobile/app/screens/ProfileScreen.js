import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useEffect, useState } from "react";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import * as Yup from "yup";
import { Formik } from "formik";
import { useContext } from "react";

//LOCAL IMPORTS
import defaultStyles from "../config/styles";
import Screen from "../components/Screen";
import GoBackArrowHeader from "../components/GoBackArrowHeader";
import AppFormField from "../components/form/AppFormField";
import SubmitButton from "../components/form/SubmitButton";
import BottomSheet from "../components/BottomSheet";
import SelectOptions from "../components/form/SelectOptions";
// import { AppContext } from "../../App"; TODO remove this

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

const ProfileScreen = ({ navigation }) => {
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);

  // const { user } = useContext(AppContext);
  // console.log(user);

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
        onSubmit={(values) => console.log(values)}
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
            <SubmitButton style={{marginBottom: 30}} title={"Continue"} />
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
    // opacity: 40,
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
    borderRadius: 200,
    height: 125
  },
  photoContainer: {
    alignSelf: "center",
    marginBottom: 20
  }
});

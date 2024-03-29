import * as Yup from "yup";
import { Formik } from "formik";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

//LOCAL IMPORTS
import Screen from "../components/Screen";
import GoBackArrowHeader from "../components/GoBackArrowHeader";
import AppFormField from "../components/form/AppFormField";
import BottomSheet from "../components/BottomSheet";
import SelectOptions from "../components/form/SelectOptions";
import CodeBottomSheet from "../components/form/CodeBottomSheet";
import AppButton from "../components/AppButton";
import { updateProfile } from "../features/profile/profileSlice";
import { clearAuth } from "../features/auth/authSlice";
import routes from "../config/routes";
import colors from "../config/colors";
import { useTheme } from "../contexts/ThemeContext";

const validationSchema = Yup.object().shape({
  fullname: Yup.string().required().max(255).label("Full Name"),
  username: Yup.string().required().max(255).label("Username"),
  email: Yup.string().required().max(255).label("Email"),
  dob: Yup.string().required().max(255).label("Date of Birth"),
  country: Yup.string().required().max(50).label("Country"),
  gender: Yup.string().required().max(10).label("Gender"),
});

const FillProfileScreen = ({ navigation }) => {
  const { state } = useTheme();
  const [code, setCode] = useState("");
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);
  const [bottomSheetVisibleCode, setBottomSheetVisibleCode] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const initialValues = {
    fullname: user?.fullname || "Adeeyo Joseph",
    username: user?.username || "Adebiyiart",
    phoneNumber: user?.phoneNumber || "09029242729",
    email: user?.email || "test@gmail.com",
    dob: user?.dob || "07/02/2023",
    country: user?.country || "Nigeria",
    gender: user?.gender || "Male",
  };

  const logout = () => {
    dispatch(clearAuth());
    AsyncStorage.clear().then(() => navigation.navigate(routes.LOGIN));
  };

  const handleSubmitForm = (values) => {
    if (values.email !== user.email && code.length > 0) {
      dispatch(
        updateProfile(values, user.token, `/?_id=${user._id}&code=${code}`)
      );
      logout();
    }

    if (values.email !== user.email) {
      setBottomSheetVisibleCode(true);
      dispatch(
        updateProfile({
          data: values,
          token: user.token,
          query: `/?_id=${user._id}&code=${code}`,
        })
      );

      // logout user if he is updating username
      if (
        (values.username !== user.username || values.email !== user.email) &&
        code.length > 0
      ) {
        logout();
      }
    } else if (values.email === user.email && code === "") {
      setBottomSheetVisibleCode(false);
      dispatch(
        updateProfile({
          data: values,
          token: user.token,
          query: `/?_id=${user._id}&code=${code}`,
        })
      );

      // logout user if he is updating username
      if (values.username !== user.username) {
        logout();
      }
    }
  };

  return (
    <Screen>
      <GoBackArrowHeader title="Fill Your Profile" navigation={navigation} />
      <View style={styles.photoContainer}>
        <View
          style={[
            styles.photo,
            { backgroundColor: colors[state.theme].background100 },
          ]}
        >
          <Ionicons
            style={[styles.avatar, { color: colors[state.theme].mediumText }]}
            name="md-person"
            size={125}
          />
        </View>
        <TouchableOpacity>
          <FontAwesome
            name="pencil-square"
            size={30}
            style={[
              styles.editPhoto,
              { color: colors[state.theme].primaryColor },
            ]}
          />
        </TouchableOpacity>
      </View>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        // onSubmit={(values) =>
        //   dispatch(
        //     updateProfile(values, user.token, `/?_id=${user._id}&code=${code}`)
        //   )
        // }
      >
        {({ setFieldValue, values }) => (
          <View style={styles.form}>
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
                  handleSubmit={() => {
                    handleSubmitForm(values);
                  }}
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
            <AppButton rounded onPress={() => handleSubmitForm(values)}>
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
    position: "relative",
    top: 12,
  },
  codeInput: {},
  editPhoto: {
    position: "absolute",
    bottom: 3,
    right: 3,
  },
  form: {
    marginVertical: 50,
  },
  photo: {
    overflow: "hidden",
    borderRadius: 200,
    height: 125,
  },
  photoContainer: {
    alignSelf: "center",
  },
});

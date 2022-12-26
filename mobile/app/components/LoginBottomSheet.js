import { StyleSheet, View } from "react-native";
import React, { useState } from "react";

// LOCAL IMPORTS
import BottomSheet from "./BottomSheet";
import AppText from "./AppText";
import AppButton from "./AppButton";
import routes from "../config/routes";
import { useNavigation } from "@react-navigation/native";

const LoginBottomSheet = ({ bottomSheetVisible, setBottomSheetVisible }) => {
  const navigation = useNavigation();
  
  return (
    <View>
      <BottomSheet
        bottomSheetContent={
          <View>
            <AppButton onPress={() => navigation.navigate(routes.LOGIN)}>
              Login
            </AppButton>
          </View>
        }
        bottomSheetVisible={bottomSheetVisible}
        setBottomSheetVisible={setBottomSheetVisible}
      />
    </View>
  );
};

export default LoginBottomSheet;

const styles = StyleSheet.create({});

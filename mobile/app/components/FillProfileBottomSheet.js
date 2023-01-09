import { StyleSheet, View } from "react-native";
import React from "react";

// LOCAL IMPORTS
import BottomSheet from "./BottomSheet";
import AppText from "./AppText";
import AppButton from "./AppButton";
import routes from "../config/routes";
import { useNavigation } from "@react-navigation/native";
import colors from "../config/colors";

const FillProfileBottomSheet = ({ bottomSheetVisible, setBottomSheetVisible }) => {
  const navigation = useNavigation();

  return (
    <View>
      <BottomSheet
        bottomSheetContent={
          <>
            <View>
              <AppText style={styles.header}>Create Profile</AppText>
              <AppText style={styles.subHeading}>
                Your profile is incomplete.
              </AppText>
              <View style={styles.content}>
                  <AppButton
                    style={styles.fill}
                    onPress={() => navigation.navigate(routes.FILL_PROFILE)}
                  >
                    Fill Your Profile
                  </AppButton>
              </View>
            </View>
          </>
        }
        bottomSheetVisible={bottomSheetVisible}
        setBottomSheetVisible={setBottomSheetVisible}
      />
    </View>
  );
};

export default FillProfileBottomSheet;

const styles = StyleSheet.create({
  content: {
    margin: 16
  },
  header: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18
  },
  subHeading: {
    textAlign: "center",
    color: colors.mediumText
  }
});

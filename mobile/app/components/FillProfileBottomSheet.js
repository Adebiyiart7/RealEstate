import { StyleSheet, View } from "react-native";
import React from "react";

// LOCAL IMPORTS
import BottomSheet from "./BottomSheet";
import AppText from "./AppText";
import AppButton from "./AppButton";
import routes from "../config/routes";
import { useNavigation } from "@react-navigation/native";
import defaultStyles from "../config/styles";
import { useTheme } from "../contexts/ThemeContext";
import colors from "../config/colors";

const FillProfileBottomSheet = React.memo(
  ({ bottomSheetVisible, setBottomSheetVisible }) => {
    const { state } = useTheme();
    const navigation = useNavigation();

    return (
      <View>
        <BottomSheet
          bottomSheetContent={
            <>
              <View>
                <AppText style={defaultStyles.bottomSheetStyles.header}>
                  Create Profile
                </AppText>
                <AppText
                  style={[
                    defaultStyles.bottomSheetStyles.subHeading,
                    { color: colors[state.theme].mediumText },
                  ]}
                >
                  Your profile is incomplete.
                </AppText>
                <View style={defaultStyles.bottomSheetStyles.content}>
                  <AppButton
                    style={defaultStyles.bottomSheetStyles.fill}
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
  }
);

export default FillProfileBottomSheet;

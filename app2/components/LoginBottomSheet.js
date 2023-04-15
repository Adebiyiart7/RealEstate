import { StyleSheet, View } from "react-native";

// LOCAL IMPORTS
import BottomSheet from "./BottomSheet";
import AppText from "./AppText";
import AppButton from "./AppButton";
import routes from "../config/routes";
import { useNavigation } from "@react-navigation/native";
import colors from "../config/colors";
import { useBackHandler } from "./hooks/useBackHandler";

const LoginBottomSheet = ({ bottomSheetVisible, setBottomSheetVisible }) => {
  const navigation = useNavigation();

  useBackHandler(() => {
    if (bottomSheetVisible) {
      console.log("Hello");
      setBottomSheetVisible(false);
      return true;
    }
    return false;
  });

  return (
    <View>
      <BottomSheet
        bottomSheetContent={
          <>
            <View>
              <AppText style={styles.header}>Login/Register</AppText>
              <AppText style={styles.subHeading}>
                Login or create a new account.
              </AppText>
              <View style={styles.content}>
                <View style={styles.buttons}>
                  <AppButton
                    small
                    style={styles.login}
                    onPress={() => navigation.navigate(routes.LOGIN)}
                  >
                    LOGIN
                  </AppButton>
                  <AppButton
                    small
                    secondary
                    style={styles.register}
                    onPress={() => navigation.navigate(routes.REGISTER)}
                  >
                    REGISTER
                  </AppButton>
                </View>
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

export default LoginBottomSheet;

const styles = StyleSheet.create({
  buttons: {
    display: "flex",
    flexDirection: "row",
    // flex: 2,
  },
  content: {
    margin: 16,
  },
  header: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
  login: {
    marginRight: 8,
    flex: 1,
  },
  register: {
    marginLeft: 8,
    flex: 1,
  },
  subHeading: {
    textAlign: "center",
    color: colors.mediumText,
  },
});

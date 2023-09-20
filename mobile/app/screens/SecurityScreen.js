import React, { useState } from "react";
import { Fontisto } from "@expo/vector-icons";
import { ScrollView, StyleSheet } from "react-native";

// LOCAL IMPORTS
import Screen from "../components/Screen";
import GoBackArrowHeader from "../components/GoBackArrowHeader";
import MenuItem from "../components/MenuItem";
import colors from "../config/colors";
import AppButton from "../components/AppButton";
import { useTheme } from "../contexts/ThemeContext";

const SecurityScreen = ({ navigation }) => {
  const { state: themeState } = useTheme();
  const [rememberMe, setsetRememberMe] = useState(true);
  const [faceID, setFaceID] = useState(true);
  const [biometricID, setBiometricID] = useState(false);

  const Switch = React.memo(({ state, setState }) => {
    return (
      <>
        {state ? (
          <Fontisto
            name="toggle-on"
            size={40}
            color={colors[themeState.theme].primaryColor}
            onPress={() => setState(!state)}
          />
        ) : (
          <Fontisto
            name="toggle-off"
            size={40}
            color={colors[themeState.theme].lightText}
            onPress={() => setState(!state)}
          />
        )}
      </>
    );
  });

  return (
    <Screen scrollable={false}>
      <GoBackArrowHeader navigation={navigation} title={"Security"} />
      <ScrollView style={styles.container}>
        <MenuItem
          style={styles.menuItem}
          title={"Remember me"}
          onPress={() => setsetRememberMe(!rememberMe)}
          RightIcon={<Switch state={rememberMe} setState={setsetRememberMe} />}
        />
        <MenuItem
          style={styles.menuItem}
          title={"Face ID"}
          onPress={() => setFaceID(!faceID)}
          RightIcon={<Switch state={faceID} setState={setFaceID} />}
        />
        <MenuItem
          style={styles.menuItem}
          title={"Biometric ID"}
          onPress={() => setBiometricID(!biometricID)}
          RightIcon={<Switch state={biometricID} setState={setBiometricID} />}
        />
        <MenuItem style={styles.menuItem} title={"Google Authenticator"} />

        <AppButton secondary rounded>
          Change PIN
        </AppButton>
        <AppButton secondary rounded>
          Change Password
        </AppButton>
      </ScrollView>
    </Screen>
  );
};

export default SecurityScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  menuItem: {
    marginVertical: 12,
  },
});

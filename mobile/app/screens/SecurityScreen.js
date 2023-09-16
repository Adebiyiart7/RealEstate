import { ScrollView, StyleSheet } from "react-native";
import React, { useState } from "react";
import Screen from "../components/Screen";
import GoBackArrowHeader from "../components/GoBackArrowHeader";
import MenuItem from "../components/MenuItem";
import { Fontisto } from "@expo/vector-icons";
import colors from "../config/colors";
import AppButton from "../components/AppButton";

const SecurityScreen = ({ navigation }) => {
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
            color={colors.primaryColor}
            onPress={() => setState(!state)}
          />
        ) : (
          <Fontisto
            name="toggle-off"
            size={40}
            color={colors.lightText}
            onPress={() => setState(!state)}
          />
        )}
      </>
    );
  });

  return (
    <Screen scrollable={false}>
      <GoBackArrowHeader
        navigation={navigation}
        title={"Notification Settings"}
      />
      <ScrollView>
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
  menuItem: {
    marginVertical: 12,
  },
});

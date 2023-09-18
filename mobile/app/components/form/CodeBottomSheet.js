import { StyleSheet, TextInput, View } from "react-native";
import React from "react";

// LOCAL IMPORT
import { styles as formStyles } from "./AppFormField";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "../../config/styles";
import AppText from "../AppText";
import AppButton from "../AppButton";

const CodeBottomSheet = ({ code, setCode, email, handleSubmit }) => {
  return (
    <View style={defaultStyles.bottomSheetStyles.content}>
      <AppText style={defaultStyles.bottomSheetStyles.header}>
        Enter Code
      </AppText>
      <AppText
        numberOfLines={1}
        style={{
          ...defaultStyles.bottomSheetStyles.subHeading,
          width: "90%",
        }}
      >
        Enter the code sent to {email}
      </AppText>
      <View style={formStyles.container}>
        <MaterialCommunityIcons
          style={{ ...formStyles.icon }}
          name={"dots-horizontal"}
          size={20}
        />
        <TextInput
          style={[formStyles.textInput, { paddingHorizontal: 37 }]}
          name={code}
          onChangeText={(value) => setCode(value)}
          value={code}
          placeholder="Enter code"
          keyboardType="numeric"
          placeholderTextColor={defaultStyles.colors.lightText}
        />
      </View>
      <AppButton rounded onPress={handleSubmit}>
        Submit
      </AppButton>
    </View>
  );
};

export default CodeBottomSheet;

// const styles = StyleSheet.create({
//   container: {
//     padding: 16,
//   },
// });

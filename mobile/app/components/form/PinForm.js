import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import defaultStyles from "../../config/styles";

const PinForm = ({ pin, setPin, secureTextEntry }) => {
  const [focusFirst, setFocusFirst] = useState(false);
  const [focusSecond, setFocusSecond] = useState(false);
  const [focusThird, setFocusThird] = useState(false);
  const [focusForth, setFocusForth] = useState(false);

  const handleOnChange = (name, value,) => {
    setPin((rest) => ({
      ...rest,
      [name]: value
    }));
  };

  const textInput = {
    fontSize: 25,
    fontWeight: "600",
    paddingBottom: 3,
  };

  return (
    <View style={styles.container}>
      <TextInput
        autoFocus={focusFirst}
        maxLength={1}
        name={"first"}
        secureTextEntry={secureTextEntry && true}
        value={pin.first}
        caretHidden={true}
        style={[styles.textInput, !secureTextEntry && textInput]}
        onFocus={() => {
          handleOnChange("first", "");
        }}
        onChangeText={(text) => {
          handleOnChange("first", text);
        }}
      />
      <TextInput
        autoFocus={focusSecond}
        maxLength={1}
        name={"second"}
        secureTextEntry={secureTextEntry && true}
        value={pin.second}
        caretHidden={true}
        style={[styles.textInput, !secureTextEntry && textInput]}
        onFocus={() => handleOnChange("second", "")}
        onChangeText={(text) => handleOnChange("second", text)}
      />
      <TextInput
        autoFocus={focusThird}
        maxLength={1}
        name={"third"}
        secureTextEntry={secureTextEntry && true}
        value={pin.third}
        caretHidden={true}
        style={[styles.textInput, !secureTextEntry && textInput]}
        onFocus={() => handleOnChange("third", "")}
        onChangeText={(text) => handleOnChange("third", text)}
      />
      <TextInput
        autoFocus={focusForth}
        maxLength={1}
        name={"forth"}
        secureTextEntry={secureTextEntry && true}
        value={pin.forth}
        caretHidden={true}
        style={[styles.textInput, !secureTextEntry && textInput]}
        onFocus={() => handleOnChange("forth", "")}
        onChangeText={(text) => handleOnChange("forth", text)}
      />
    </View>
  );
};

export default PinForm;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    maxWidth: 300
  },
  textInput: {
    borderWidth: 1,
    borderColor: defaultStyles.colors.border200,
    borderRadius: defaultStyles.primaryBorderRadius,
    height: 45,
    width: 57,
    marginHorizontal: 7,
    textAlign: "center",
    fontSize: 65,
    paddingBottom: 12,
    backgroundColor: defaultStyles.colors.lightBackground,
    color: defaultStyles.colors.primaryText
  }
});

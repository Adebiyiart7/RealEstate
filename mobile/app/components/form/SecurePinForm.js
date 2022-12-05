import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import defaultStyles from "../../config/styles";

const SecurePinForm = ({ pin, setPin }) => {
  const [focusFirst, setFocusFirst] = useState(false);
  const [focusSecond, setFocusSecond] = useState(false);
  const [focusThird, setFocusThird] = useState(false);
  const [focusForth, setFocusForth] = useState(false);
  
  const handleOnChange = (name, value) => {
    setPin((rest) => ({
      ...rest,
      [name]: value
    }));
  };
  
  return (
    <View style={styles.container}>
      <TextInput
        // editable={false}
        autoFocus={focusFirst}
        maxLength={1}
        name={"first"}
        secureTextEntry
        value={pin.first}
        caretHidden={true}
        style={styles.textInput}
        onFocus={() => {handleOnChange("first", ""); }}
        
        onChangeText={(text) => { handleOnChange("first", text); }}
      />
      <TextInput
        // editable={false}
        autoFocus={focusSecond}
        maxLength={1}
        name={"second"}
        secureTextEntry
        value={pin.second}
        caretHidden={true}
        style={styles.textInput}
        onFocus={() => handleOnChange("second", "")}
        onChangeText={(text) => handleOnChange("second", text)}
      />
      <TextInput
        // editable={false}
        autoFocus={focusThird}
        maxLength={1}
        name={"third"}
        secureTextEntry
        value={pin.third}
        caretHidden={true}
        style={styles.textInput}
        onFocus={() => handleOnChange("third", "")}
        onChangeText={(text) => handleOnChange("third", text)}
      />
      <TextInput
        // editable={false}
        autoFocus={focusForth}
        maxLength={1}
        name={"forth"}
        secureTextEntry
        value={pin.forth}
        caretHidden={true}
        style={styles.textInput}
        onFocus={() => handleOnChange("forth", "")}
        onChangeText={(text) => handleOnChange("forth", text)}
      />
    </View>
  );
};

export default SecurePinForm;

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

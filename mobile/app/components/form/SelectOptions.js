import { FlatList, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

// LOCAL IMPORTS
import AppText from "../AppText";
import ItemSeparatorComponent from "../ItemSeparatorComponent";

const SelectOptions = ({
  data,
  fieldName,
  setFieldValue,
  setBottomSheetVisible
}) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.value.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => {
            setFieldValue(fieldName, item.value);
            setBottomSheetVisible(false);
          }}
          style={styles.item}
        >
          <AppText style={styles.text}>{item.value}</AppText>
        </TouchableOpacity>
      )}
      ItemSeparatorComponent={() => <ItemSeparatorComponent />}
    />
  );
};

export default SelectOptions;

const styles = StyleSheet.create({
  item: {
    paddingVertical: 13,
    paddingHorizontal: 16
  },
  text: {
    fontSize: 16
  }
});

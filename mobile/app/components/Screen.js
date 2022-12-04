import { ScrollView, StyleSheet } from 'react-native'
import Constants from "expo-constants";

const Screen = ({children, style}) => {
  return (
    <ScrollView style={[styles.container, style]}>
      {children}
    </ScrollView>
  );
}

export default Screen

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal: 16,
  }
});
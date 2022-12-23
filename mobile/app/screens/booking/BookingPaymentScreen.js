import { Image, StyleSheet, View } from "react-native";
import React from "react";

// LOCAL IMPORTS
import AppText from "../../components/AppText";
import GoBackArrowHeader from "../../components/GoBackArrowHeader";
import Screen from "../../components/Screen";
import Card1 from "../../components/cards/Card1";
import AppButton from "../../components/AppButton";
import routes from "../../config/routes";

const BookingPaymentScreen = ({ navigation, route }) => {
  
  return (
    <Screen>
      <GoBackArrowHeader navigation={navigation} title={"Booking Real Estate"} />
      <AppText>Select the payment method you want to use.</AppText>
      <View>
        <Card1
          selected
          title={"Google"}
          subTitle={"Google Pay"}
          Icon={
            <Image
              style={styles.imageIcon}
              source={require("../../assets/images/google-icon.png")}
            />
          }
        />
        <Card1
          title={"Apple"}
          subTitle={"Apple Pay"}
          Icon={
            <Image
              style={styles.imageIcon}
              source={require("../../assets/images/apple-icon.png")}
            />
          }
        />
        <AppButton secondary
        onPress={() => navigation.navigate(routes.ADD_NEW_CARD)}
        >Add New Card</AppButton>
        <AppButton
          onPress={() => {
            navigation.navigate(routes.REVIEW_SUMMARY, {
              _id: route.params._id,
              checksDetails: route.params.checksDetails
            });
          }}
        >
          Continue
        </AppButton>
      </View>
    </Screen>
  );
};

export default BookingPaymentScreen;

const styles = StyleSheet.create({
  imageIcon: {
    height: 24,
    width: 24
  }
});

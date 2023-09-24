import { Image, ScrollView, StyleSheet, View } from "react-native";
import React, { useState } from "react";

// LOCAL IMPORTS
import AppText from "../../components/AppText";
import GoBackArrowHeader from "../../components/GoBackArrowHeader";
import Screen from "../../components/Screen";
import Card1 from "../../components/cards/Card1";
import AppButton from "../../components/AppButton";
import routes from "../../config/routes";
import LoginBottomSheet from "../../components/LoginBottomSheet";
import { useSelector } from "react-redux";

const BookingPaymentScreen = ({ navigation, route }) => {
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const [selected, setSeleted] = useState("google");
  return (
    <Screen scrollable={false}>
      <LoginBottomSheet
        bottomSheetVisible={bottomSheetVisible}
        setBottomSheetVisible={setBottomSheetVisible}
      />
      <GoBackArrowHeader
        navigation={navigation}
        title={"Booking Real Estate"}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <AppText>Select the payment method you want to use.</AppText>
        <View>
          <Card1
            selected={selected === "google"}
            onPress={() => setSeleted("google")}
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
            selected={selected === "apple"}
            onPress={() => setSeleted("apple")}
            title={"Apple"}
            subTitle={"Apple Pay"}
            Icon={
              <Image
                style={styles.imageIcon}
                source={require("../../assets/images/apple-icon.png")}
              />
            }
          />
          <AppButton
            rounded
            secondary
            onPress={() => {
              user
                ? navigation.navigate(routes.ADD_NEW_CARD)
                : setBottomSheetVisible(true);
            }}
          >
            Add New Card
          </AppButton>
          <AppButton
            rounded
            onPress={() => {
              user
                ? navigation.navigate(routes.REVIEW_SUMMARY, {
                    _id: route.params._id,
                    userInfo: route.params.userInfo,
                    checksDetails: route.params.checksDetails,
                  })
                : setBottomSheetVisible(true);
            }}
          >
            Continue
          </AppButton>
        </View>
      </ScrollView>
    </Screen>
  );
};

export default BookingPaymentScreen;

const styles = StyleSheet.create({
  imageIcon: {
    height: 24,
    width: 24,
  },
});

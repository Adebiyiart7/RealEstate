import React, { useState } from "react";
import moment from "moment";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

// LOCAL IMPORTS
import Screen from "../../components/Screen";
import GoBackArrowHeader from "../../components/GoBackArrowHeader";
import Card3 from "../../components/cards/Card3";
import { estates } from "../../db";
import defaultStyles from "../../config/styles";
import AppText from "../../components/AppText";
import colors from "../../config/colors";
import utils from "../../utils";
import ItemSeparatorComponent from "../../components/ItemSeparatorComponent";
import Card1 from "../../components/cards/Card1";
import AppButton from "../../components/AppButton";
import routes from "../../config/routes";
import LoginBottomSheet from "../../components/LoginBottomSheet";
import { useSelector } from "react-redux";

const ReviewSummary = ({ navigation, route }) => {
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const item = estates.find((i) => i._id === route.params._id);
  const checksDetails = route.params.checksDetails;

  return (
    <Screen>
      <LoginBottomSheet
        bottomSheetVisible={bottomSheetVisible}
        setBottomSheetVisible={setBottomSheetVisible}
      />
      <GoBackArrowHeader navigation={navigation} title={"Review Summary"} />
      <View>
        <Card3 format={"list"} item={item} navigation={navigation} />
      </View>
      <View style={[defaultStyles.summaryCard, styles.checksDetails]}>
        <View style={defaultStyles.summaryTextContainer}>
          <AppText>Date</AppText>
          <AppText style={defaultStyles.summaryValue}>
            {moment(checksDetails.startDate).format("DD MMM, YYYY")} -
            {moment(checksDetails.endDate).format("DD MMM, YYYY")}
          </AppText>
        </View>
        <View style={defaultStyles.summaryTextContainer}>
          <AppText>Checks In</AppText>
          <AppText style={defaultStyles.summaryValue}>
            {moment(checksDetails.startDate).format("DD MMMM, YYYY")}
          </AppText>
        </View>
        <View style={defaultStyles.summaryTextContainer}>
          <AppText>Checks Out</AppText>
          <AppText style={defaultStyles.summaryValue}>
            {moment(checksDetails.endDate).format("DD MMMM, YYYY")}
          </AppText>
        </View>
      </View>
      <View style={defaultStyles.summaryCard}>
        <View style={defaultStyles.summaryTextContainer}>
          <AppText>
            Amount (
            {utils.dateDifference(
              checksDetails.startDate,
              checksDetails.endDate
            )}
            )
          </AppText>
          <AppText style={defaultStyles.summaryValue}>
            &#8358;{utils.separateToThounsand(item.cost)}
          </AppText>
        </View>
        <View style={defaultStyles.summaryTextContainer}>
          <AppText>Tax</AppText>
          <AppText style={defaultStyles.summaryValue}>
            &#8358;{utils.separateToThounsand(utils.tax)}
          </AppText>
        </View>
        <ItemSeparatorComponent style={defaultStyles.summarySeperator} />
        <View style={defaultStyles.summaryTextContainer}>
          <AppText>Total</AppText>
          <AppText style={defaultStyles.summaryValue}>
            &#8358;{utils.separateToThounsand(item.cost + utils.tax)}
          </AppText>
        </View>
      </View>
      <View style={[defaultStyles.summaryCard, styles.selectedCard]}>
        <Image
          style={defaultStyles.summaryCardLogo}
          source={require("../../assets/images/master-card-logo.png")}
        />
        <AppText style={styles.atmNumber}>**** **** **** 4194</AppText>
        <TouchableOpacity>
          <AppText style={styles.changeText}>Change</AppText>
        </TouchableOpacity>
      </View>
      <AppButton
        onPress={() => {
          user
            ? navigation.navigate(routes.CONFIRM_PIN, {
                _id: route.params._id,
                checksDetails: checksDetails,
                userInfo: route.params.userInfo
              })
            : setBottomSheetVisible(true);
        }}
      >
        Continue
      </AppButton>
    </Screen>
  );
};

export default ReviewSummary;

const styles = StyleSheet.create({
  atmNumber: {
    fontWeight: "bold",
    fontSize: 16
  },
  changeText: {
    color: colors.primaryColor,
    fontWeight: "bold",
    marginRight: 5,
    fontSize: 16
  },
  selectedCard: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
});

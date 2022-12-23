import React from "react";
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

const ReviewSummary = ({ navigation, route }) => {
  const item = estates.find((i) => i._id === route.params._id);
  const checksDetails = route.params.checksDetails;

  const tax = 5000;

  const dateDifference = (start, end) => {
    start = moment(start);
    end = moment(end);
    const diff = end.diff(start, "days");
    return diff + (diff > 1 || diff < 1 ? " days" : " day");
  };

  return (
    <Screen>
      <GoBackArrowHeader navigation={navigation} title={"Review Summary"} />
      <View>
        <Card3 format={"list"} item={item} navigation={navigation} />
      </View>
      <View style={[styles.card, styles.checksDetails]}>
        <View style={styles.textContainer}>
          <AppText>Date</AppText>
          <AppText style={styles.value}>
            {moment(checksDetails.startDate).format("DD MMM, YYYY")} -
            {moment(checksDetails.endDate).format("DD MMM, YYYY")}
          </AppText>
        </View>
        <View style={styles.textContainer}>
          <AppText>Checks In</AppText>
          <AppText style={styles.value}>
            {moment(checksDetails.startDate).format("DD MMMM, YYYY")}
          </AppText>
        </View>
        <View style={styles.textContainer}>
          <AppText>Checks Out</AppText>
          <AppText style={styles.value}>
            {moment(checksDetails.endDate).format("DD MMMM, YYYY")}
          </AppText>
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.textContainer}>
          <AppText>
            Amount (
            {dateDifference(checksDetails.startDate, checksDetails.endDate)})
          </AppText>
          <AppText style={styles.value}>
            &#8358;{utils.seperateToThounsand(item.cost)}
          </AppText>
        </View>
        <View style={styles.textContainer}>
          <AppText>Tax</AppText>
          <AppText style={styles.value}>
            &#8358;{utils.seperateToThounsand(tax)}
          </AppText>
        </View>
        <ItemSeparatorComponent style={styles.seperator} />
        <View style={styles.textContainer}>
          <AppText>Total</AppText>
          <AppText style={styles.value}>
            &#8358;{utils.seperateToThounsand(item.cost + tax)}
          </AppText>
        </View>
      </View>
      <View style={[styles.card, styles.selectedCard]}>
        <Image
          style={styles.cardLogo}
          source={require("../../assets/images/master-card-logo.png")}
        />
        <AppText style={styles.atmNumber}>**** **** **** 4194</AppText>
        <TouchableOpacity>
          <AppText style={styles.changeText}>Change</AppText>
        </TouchableOpacity>
      </View>
      <AppButton
        onPress={() =>
          navigation.navigate(routes.CONFIRM_PIN, {
            item: item
          })
        }
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
  card: {
    padding: 16,
    borderRadius: defaultStyles.primaryBorderRadius,
    backgroundColor: colors.white,
    marginVertical: 8
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
  },
  seperator: {
    marginVertical: 6
  },
  textContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 3
  },
  value: {
    fontWeight: "bold"
  }
});

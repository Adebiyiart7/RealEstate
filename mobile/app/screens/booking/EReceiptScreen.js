import { StyleSheet, Image, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import moment from "moment";
import { useDimensions } from "@react-native-community/hooks";

// LOCAL IMPORTS
import Screen from "../../components/Screen";
import GoBackArrowHeader from "../../components/GoBackArrowHeader";
import defaultStyles from "../../config/styles";
import { estates } from "../../db";
import AppText from "../../components/AppText";
import utils from "../../utils";
import ItemSeparatorComponent from "../../components/ItemSeparatorComponent";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../config/colors";
import BottomSheet from "../../components/BottomSheet";
import RateBooking from "../../components/RateBooking";

const EReceiptScreen = ({ navigation, route }) => {
  const [bottomSheetVisible, setBottomSheetVisible] = useState(true);
  const item = estates.find((i) => i._id === route.params._id);
  const checksDetails = route.params.checksDetails;
  const userInfo = route.params.userInfo;
  const { width: screenWidth } = useDimensions().screen;

  return (
    <Screen>
      <BottomSheet
        bottomSheetContent={<RateBooking estateName={item.name} />}
        bottomSheetVisible={bottomSheetVisible}
        setBottomSheetVisible={setBottomSheetVisible}
      />
      <GoBackArrowHeader
        title={"E-Receipt"}
        navigation={navigation}
        RightIcon={
          <MaterialCommunityIcons
            color={colors.primaryText}
            size={24}
            name="dots-horizontal-circle-outline"
          />
        }
      />
      <Image
        style={styles.receiptImage}
        source={require("../../assets/images/e-receipt.png")}
      />
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

      <View style={[defaultStyles.summaryCard, styles.checksDetails]}>
        <View style={defaultStyles.summaryTextContainer}>
          <AppText>Name</AppText>
          <AppText
            numberOfLines={1}
            style={[
              defaultStyles.summaryValue,
              { maxWidth: screenWidth - 110 },
            ]}
          >
            {userInfo.fullname}
          </AppText>
        </View>
        <View style={defaultStyles.summaryTextContainer}>
          <AppText>Phone Number</AppText>
          <AppText style={defaultStyles.summaryValue}>
            {userInfo.phoneNumber}
          </AppText>
        </View>
        <View style={defaultStyles.summaryTextContainer}>
          <AppText>Transaction ID</AppText>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <AppText style={defaultStyles.summaryValue}>9573957395</AppText>
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="content-copy"
                style={styles.contentCopy}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={defaultStyles.summaryTextContainer}>
          <AppText>Status</AppText>
          <AppText style={styles.paidText}>paid</AppText>
        </View>
      </View>
    </Screen>
  );
};

export default EReceiptScreen;

const styles = StyleSheet.create({
  contentCopy: {
    color: colors.primaryColor,
    fontSize: 16,
    marginLeft: 8,
    marginTop: 2,
  },
  paidText: {
    fontStyle: "italic",
    fontWeight: "bold",
    textTransform: "uppercase",
    color: colors.primaryGreen,
  },
  receiptImage: {
    width: "100%",
    maxWidth: 400,
    height: 100,
  },
});

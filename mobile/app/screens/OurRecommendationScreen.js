import { StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'

// LOCAL IMPORT
import Screen from '../components/Screen'
import OurRecommendation from '../components/OurRecommendation'
import GoBackArrowHeader from '../components/GoBackArrowHeader'
import colors from '../config/colors'

const OurRecommendationScreen = ({ navigation }) => {
  return (
    <Screen style={styles.container}>
      <GoBackArrowHeader
        navigation={navigation}
        title={"Our Recommendation"}
        RightIcon={
          <Ionicons
            style={{ colors: colors.primaryText }}
            name={"ios-search-outline"}
            size={24}
          />
        }
      />
      <OurRecommendation />
    </Screen>
  );
};

export default OurRecommendationScreen

const styles = StyleSheet.create({
  container: {
  },
});
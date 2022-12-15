import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AppText from './AppText'
import colors from '../config/colors'
import { categoryChips } from '../screens/HomeScreen'
import Chip from './Chip'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const Header = ({title}) => {
  return <AppText style={styles.header}>{title}</AppText>
}

const PropertiesFilterContent = () => {
  const [focusedCategory, setFocusedCategory] = useState("All");
  
  return (
    <View style={styles.container}>
      <AppText style={styles.filterTitle}>Filter</AppText>
      <Header title={"Category"} />
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categoryChips}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View>
            <Chip
              text={item.name}
              focused={item.name === focusedCategory}
              Icon={
                item.icon && (
                  <MaterialCommunityIcons
                    name={item.icon}
                    size={18}
                    color={
                      item.name === focusedCategory
                        ? colors.white
                        : colors.primaryColor
                    }
                  />
                )
              }
              onPress={() => setFocusedCategory(item.name)}
            />
          </View>
        )}
        ItemSeparatorComponent={() => <AppText style={styles.seperator} />}
      />

      <Header title={"Price Range"} />
      <Header title={"Facilities"} />
      <Header title={"Location"} />
      <Header title={"Rating"} />
    </View>
  );
}

export default PropertiesFilterContent

const styles = StyleSheet.create({
  container: {
    minHeight: 200,
    padding: 16
  },
  filterTitle: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    marginTop: -30,
    borderBottomColor: colors.border100,
    borderBottomWidth: 1,
    paddingBottom: 8,
    marginBottom: 16
  },
  header: {
    fontWeight: "bold",
    fontSize: 16,
    marginVertical: 10,
  },
  seperator: {
    marginRight: 10
  }
});
import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useDimensions } from "@react-native-community/hooks";

// LOCAL IMPORTS
import colors from "../../config/colors";
import AppText from "../AppText";
import BottomSheet from "../../components/BottomSheet";

const Gallery = ({ item }) => {
  const { width: screenWidth } = useDimensions().screen;
  const imageWidth = (screenWidth - 64) / 3;
  const [showBottomSheet, setShowBottomSheet] = useState(false);

  const GalleryImages = React.memo(() => (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={item.images}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        <ImageBackground
          source={{ uri: item }}
          style={[styles.image, { width: imageWidth, height: imageWidth }]}
        ></ImageBackground>
      )}
    />
  ));
  const BottomSheetGallery = (
    <View>
      <AppText style={styles.title}>Gallery</AppText>
      <ScrollView style={styles.bottomSheetGallery}>
        <View>
          <AppText style={styles.bottomSheetHeader}>Bedroom</AppText>
          <GalleryImages />
        </View>

        <View>
          <AppText style={styles.bottomSheetHeader}>Bathroom</AppText>
          <GalleryImages />
        </View>

        <View>
          <AppText style={styles.bottomSheetHeader}>Kitchen</AppText>
          <GalleryImages />
        </View>

        <View>
          <AppText style={styles.bottomSheetHeader}>Living Room</AppText>
          <GalleryImages />
        </View>

        <View>
          <AppText style={styles.bottomSheetHeader}>Parking</AppText>
          <GalleryImages />
        </View>
        <View style={{ height: 70 }} />
      </ScrollView>
    </View>
  );

  return (
    <View style={styles.container}>
      <BottomSheet
        bottomSheetVisible={showBottomSheet}
        setBottomSheetVisible={setShowBottomSheet}
        bottomSheetContent={BottomSheetGallery}
      />
      <FlatList
        horizontal
        scrollEnabled={false}
        data={item.images.slice(0, 3)}
        keyExtractor={(item) => item}
        renderItem={({ item: imageItem, index }) => (
          <ImageBackground
            key={index}
            source={{ uri: imageItem }}
            style={[styles.image, { width: imageWidth, height: imageWidth }]}
          >
            {index == 2 && (
              <TouchableOpacity
                style={styles.opaqImage}
                onPress={() => setShowBottomSheet(true)}
              />
            )}
            {index == 2 && (
              <AppText
                onPress={() => setShowBottomSheet(true)}
                style={styles.innerText}
              >
                {item.images.length - 3}+
              </AppText>
            )}
          </ImageBackground>
        )}
      />
    </View>
  );
};

export default Gallery;

const styles = StyleSheet.create({
  bottomSheetGallery: {
    padding: 16,
  },
  bottomSheetHeader: {
    fontWeight: "700",
    marginLeft: 5,
    fontSize: 17,
    marginBottom: 6,
    marginTop: 20,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    marginHorizontal: 4,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    borderWidth: 1,
    borderColor: colors.background200,
  },
  innerText: {
    fontSize: 25,
    color: colors.displayAsWhite,
    fontWeight: "bold",
    zIndex: 1234,
  },
  opaqImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "#00000099",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});

import { Image, TouchableOpacity, View } from "react-native";
import React from 'react'

// LOCAL IMPORTS
import TextWithLines from './TextWithLines';

const AuthFooter = ({styles}) => {
  return (
    <View>
      <View style={styles.otherOptions}>
        <TextWithLines textStyle={styles.continueText}>
          or continue with
        </TextWithLines>
        <View style={styles.socials}>
          <TouchableOpacity style={styles.social}>
            <Image
              style={styles.socialImage}
              source={require("../assets/images/facebook-icon.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.social}>
            <Image
              style={styles.socialImage}
              source={require("../assets/images/google-icon.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.social}>
            <Image
              style={styles.socialImage}
              source={require("../assets/images/apple-icon.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default AuthFooter;
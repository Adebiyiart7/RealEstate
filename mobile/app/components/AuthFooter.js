import { Image, TouchableOpacity, View } from "react-native";
import React from "react";

// LOCAL IMPORTS
import TextWithLines from "./TextWithLines";
import { useTheme } from "../contexts/ThemeContext";
import colors from "../config/colors";

const AuthFooter = React.memo(({ styles }) => {
  const { state } = useTheme();
  const socialBorderColor = { borderColor: colors[state.theme].border200 };
  return (
    <View>
      <View style={styles.otherOptions}>
        <TextWithLines
          textStyle={[
            styles.continueText,
            { color: colors[state.theme].mediumText },
          ]}
        >
          or continue with
        </TextWithLines>
        <View style={styles.socials}>
          <TouchableOpacity style={[styles.social, socialBorderColor]}>
            <Image
              style={styles.socialImage}
              source={require("../assets/images/facebook-icon.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.social, socialBorderColor]}>
            <Image
              style={styles.socialImage}
              source={require("../assets/images/google-icon.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.social, socialBorderColor]}>
            <Image
              style={styles.socialImage}
              source={require("../assets/images/apple-icon.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
});

export default AuthFooter;

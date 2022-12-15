import { Ionicons } from "@expo/vector-icons";

// LOCAL IMPORTS
import colors from "../config/colors";
import routes from "../config/routes";

const tabBarIcon = (route, focused) => {
  let iconName;

  if (route.name === routes.HOME) {
    iconName = focused ? "ios-home" : "ios-home-outline";
  } else if (route.name === routes.EXPLORE) {
    iconName = focused ? "ios-search" : "ios-search-outline"
  } else if (route.name === routes.FAVORITES) {
    iconName = focused ? "ios-heart" : "ios-heart-outline";
  } else if (route.name === routes.MESSAGES) {
    iconName = focused ? "ios-chatbubble-ellipses" : "ios-chatbubble-ellipses-outline";
  } else if (route.name === routes.PROFILE) {
    iconName = focused ? "ios-person" :"ios-person-outline"
  }

  return (
    <Ionicons
      name={iconName}
      color={focused ? colors.primaryColor : colors.lightText}
      size={24}
    />
  );
}

export default tabBarIcon;
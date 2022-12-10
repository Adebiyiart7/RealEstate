import axios from "axios";
// import AsyncStorage from "@react-native-async-storage/async-storage";

export const API_URI = "http://192.168.43.231:5000/api";

// Register user
const register = async (data) => {
  const response = await axios.post(
    API_URI + "/users/register",
    data
  );
  try {
    if (response.data) {
      // await AsyncStorage.setItem("user", JSON.stringify(response.data));
    }
  } catch (error) {
    console.log(error);
  }
  return response.data;
};

const authService = {
  register
};

export default authService;

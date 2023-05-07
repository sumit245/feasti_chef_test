import { GET_MY_REVIEWS, ORDERS, RESTAURANT_LOGIN, RESTAURANT_URL, UPDATE_PRICE } from "../EndPoints";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const LOGIN_METHOD = "LOGIN_METHOD";
export const ENTRY_METHOD = "ENTRY_METHOD";
export const GET_ORDER = "GET_ORDER";
export const SET_RESTAURANT = "SET_RESTAURANT";
export const SET_STATUS = "SET_STATUS";
export const SET_PLANS = "SET_PLANS";
export const SET_VERIFICATION_ID = 'SET_VERIFICATION_ID';
export const SET_PHONE_NUMBER = 'SET_PHONE_NUMBER';

export const setVerificationId = (verificationId) => {
  return {
    type: SET_VERIFICATION_ID,
    payload: {
      verificationId,
    },
  };
};

export const setPhoneNumber = (phoneNumber) => {
  return {
    type: SET_PHONE_NUMBER,
    payload: {
      phoneNumber,
    },
  };
};

export const loginMethod = (phone, navigation) => async (dispatch) => {
  const response = await axios.post(RESTAURANT_LOGIN, { phone: phone });
  const restaurant = await response.data.data;
  let enter = false;

  if (restaurant !== null && restaurant !== undefined) {
    try {
      const credential = await AsyncStorage.getItem("credential");
      dispatch({ type: LOGIN_METHOD, payload: restaurant });
      const { entry } = await JSON.parse(credential);
      enter = entry;
      dispatch({ type: ENTRY_METHOD, payload: entry });

      navigation.navigate("Main");
    } catch (error) {
      const entry = { entry: false };
      enter = entry;
      dispatch({ type: ENTRY_METHOD, payload: entry });
      navigation.navigate("Pin", { entry: entry });
    }
  } else {
    enter = false;
    alert(
      "You are not a registered chef!!! Please send a request to become partner"
    );
  }
};

export const setRestaurant = () => async (dispatch) => {
  const response = await AsyncStorage.getItem("restaurant");
  let restaurant = await JSON.parse(response);
  if (restaurant !== null) {
    dispatch({ type: SET_RESTAURANT, payload: restaurant });
  }
};

export const getOrder = (restaurant) => async (dispatch) => {
  const response = await axios.get(ORDERS);
  let orders = response.data;
  let neworders = orders.filter(
    (item) => item.status === "pending" && item.restaurant_id === restaurant
  );
  if (orders !== null) {
    dispatch({ type: GET_ORDER, payload: neworders });
  }
};

export const editBankInfo = (id, bankInfo) => async (dispatch) => {
  const response = await axios.put(RESTAURANT_URL + id, bankInfo);
  const data = await response.data;
  await AsyncStorage.setItem("restaurant", JSON.stringify(data));
  dispatch({ type: SET_RESTAURANT, payload: data });
};

export const changeStatus = (id, status) => async (dispatch) => {
  await axios.put(RESTAURANT_URL + id, status);
  const response = await axios.get(RESTAURANT_URL + id)
  const { data } = response
  await AsyncStorage.setItem("restaurant", JSON.stringify(data));
  dispatch({ type: SET_RESTAURANT, payload: data });
};

export const fetchMyReview = (id) => async (dispatch) => {
  const response = await axios.get(`${GET_MY_REVIEWS}${id}`)
  const { data } = response
  console.log('====================================');
  console.log(data);
  console.log('====================================');
}

export const updatePlansPrice = async (id, slot, base_price, index) => {
  const response = await axios.put(`${UPDATE_PRICE}${id}`, {
    index: index,
    category: slot,
    base_price: base_price
  })
  const { msg } = response.data
}

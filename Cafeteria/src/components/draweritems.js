import React from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import COLORS from "../utility/Colors";
import { useNavigation } from "@react-navigation/native";

const image = require("../../assets/JKUAT.png");

const NavigationView = ({ drawer}) => {
  const navigation=useNavigation()
  const closeDrawer = () => {
    drawer.current.closeDrawer();
  };
  return (
    <View style={styles.container}>
      <View style={{ width: "100%", flex: 1 }}>
        <ImageBackground
          source={image}
          resizeMode="contain"
          style={styles.image}
        >
          <View style={{ alignItems: "flex-end", paddingRight: 20 }}>
            <MaterialCommunityIcons
              name="close-circle-outline"
              size={35}
              color={COLORS.white}
              onPress={closeDrawer}
            />
          </View>
        </ImageBackground>
      </View>
      <View style={{ flex: 2 }}>
        <Text style={styles.paragraph}>CREATED BY COMRADE FOR COMRADES</Text>
        <View style={{ padding: 10 }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate("profile");
            }}
          >
            <MaterialIcons name="person" size={40} color="white" />
            <Text style={styles.drawerText}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("cart")}
          >
            <MaterialCommunityIcons
              name="cart-arrow-up"
              size={40}
              color="white"
            />
            <Text style={styles.drawerText}>Orders</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("deposit")}
          >
            <MaterialCommunityIcons
              name="cash-multiple"
              size={40}
              color="white"
            />
            <Text style={styles.drawerText}>Deposit Cash</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              { borderBottomWidth: 1, borderBottomColor: COLORS.black },
            ]}
            onPress={() => navigation.navigate("statistics")}
          >
            <MaterialCommunityIcons
              name="google-analytics"
              size={40}
              color="white"
            />
            <Text style={styles.drawerText}>Statistics</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          style={styles.logout}
          onPress={() => navigation.navigate("login")}
        >
          <MaterialIcons name="logout" size={24} color="white" />
          <Text style={styles.drawerText}>Log out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  navbar: {
    paddingTop: 50,
    paddingHorizontal: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 100,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.light,
  },
  fooditem: {
    padding: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: COLORS.white,

    marginVertical: 5,
    marginHorizontal: 5,
    borderRadius: 10,
  },
  cart: {
    backgroundColor: "white",
    width: 50,
    textAlign: "center",
    borderRadius: 10,
  },
  cartValue: {
    position: "absolute",
    right: 0,
    top: -10,
    fontSize: 16,
    color: COLORS.red,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: COLORS.primaryGreen,
  },
  navigationContainer: {
    backgroundColor: COLORS.red,
  },
  image: {
    flex: 1,
  },
  paragraph: {
    fontSize: 20,
    color: COLORS.white,
    textAlign: "center",
    fontWeight: "bold",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  button: {
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: COLORS.black,
    padding: 10,
    flexDirection: "row",
    gap: 20,
  },
  drawerText: {
    color: COLORS.white,
    fontSize: 20,
  },
  logout: {
    display: "flex",
    flexDirection: "row",
    padding: 15,
    gap: 10,
    alignItems: "center",
    borderWidth: 2,
    marginVertical: 30,
    width: "50%",
    borderRadius: 100,
  },
});
export default NavigationView;

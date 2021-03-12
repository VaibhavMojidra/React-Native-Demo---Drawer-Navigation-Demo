import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const TitleBar = ({navObj}) => {
  return (
    <View style={styles.bg}>
      <TouchableOpacity
        onPress={() => {navObj.openDrawer();}}>
        <Image
          source={require("../../assets/menu.png")}
          style={{ width: 30, height: 30, marginStart: 10 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default TitleBar;

const styles = StyleSheet.create({
  bg: {
    flexDirection: "row",
    height: 45,
    backgroundColor: "black",
    alignItems: "center",
  },
});

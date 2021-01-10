import React from "react";
import { TouchableOpacity, View, StyleSheet, Image } from "react-native";
import BackIconImg from "../../assets/backIcon.png";

export default function ImageBackButton() {
  return <Image source={BackIconImg} style={styles.imgStyle} />;
}

const styles = StyleSheet.create({
  imgStyle: {
    height: 20,
    width: 20,
  },
});

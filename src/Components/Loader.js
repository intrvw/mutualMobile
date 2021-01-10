import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Loading from '../../assets/Loading.gif'
export default function Loader() {
  return (
    <View style={styles.container}>
      <Image source={Loading} style={styles.image}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems:'center',
},
  image:{
      height:50,
      width:50,
      backgroundColor:'transparent'
  }
});

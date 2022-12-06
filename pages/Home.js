import * as React from 'react';
import { StyleSheet, Image, View } from 'react-native';

export default function Home() {
  return (
      <View style={styles.container}>
        <Image style={styles.logo_cbf} source={require('../assets/logo_CBF.png')}></Image>
        <Image style={styles.convocados} source={require('../assets/52507736551_7d368a4c1a_c11.jpg')}></Image>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#99B6D0',
    alignItems: 'center'
  },
  logo_cbf: {
    height: 182,
    width: 110,  
    marginTop: 120,
  },
  convocados: {
    height: 260,
    width: 402, 
    marginTop: 125,
  }
});

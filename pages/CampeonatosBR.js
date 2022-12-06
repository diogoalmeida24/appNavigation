import * as React from 'react';
import { StyleSheet, Image, View, Text, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function CampeonatosBR() {
  return (
        <View style={styles.container}>
            <StatusBar style='dark'/>
            <Image style={styles.logo_cbf} source={require('../assets/logo_CBF.png')}></Image>
            <Text style={styles.titulo}>Competições Nacionais - Futebol Profissional</Text>
        <ScrollView>
            <View style={styles.container}>
                <Image style={styles.logo_BRA1} source={require('../assets/tabela-brasileirao-serie-A.png')}></Image>
                <Image style={styles.logo_BRA2} source={require('../assets/serie-b-2022.png')}></Image>
                <Image style={styles.logo_BRA3} source={require('../assets/copa-do-brasil-logo.png')}></Image>
                <Image style={styles.logo_BRA4} source={require('../assets/supercopa-do-brasil-logo.png')}></Image>
            </View>
        </ScrollView>
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ADFF2F',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo_cbf: {
    height: 85,
    width: 50,  
    marginTop: 50,
  },
  logo_BRA1: {
    height: 180,
    width: 190,  
    marginTop: 15,
  },
  logo_BRA2: {
    height: 260,
    width: 270,  
    marginTop: 5,
  },
  logo_BRA3: {
    height: 140,
    width: 250,  
    marginTop: 5,
  },
  logo_BRA4: {
    height: 260,
    width: 270,  
    marginTop: 5,
  },
  titulo: {
    color: '#099C56',
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    fontSize: 17,
    marginTop: 25,
    marginBottom: 15,
  }
});

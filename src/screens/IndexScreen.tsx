import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Button, StyleSheet, View, StatusBar } from 'react-native';
import { PRIMARY_COLOR } from '../commons/constanceColor';
import { Title } from '../components/Title';
import {Screen3}from './Screen3';

interface Props extends StackScreenProps<any,any>{};


export const IndexScreen = ({navigation}:Props) => {
  return (
 <View style={styles.container}>
   <StatusBar backgroundColor={PRIMARY_COLOR}/>
   <Title title="Inicio" />  
   <View style={styles.buttonContainer}>
     <Button title="Imagen 1" onPress={() => navigation.navigate('Screen1')} />
     <Button title="Imagen 2" onPress={() => navigation.navigate('Screen2')} />
     <Button title="Formulario de Mayor o Igual" onPress={() => navigation.navigate('Screen3')} />
     <Button title="Formulario de Menor o Igual" onPress={() => navigation.navigate('Screen4')} />
   </View>
 </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: PRIMARY_COLOR,
  },
  buttonContainer: {
    marginTop: 50,
    borderRadius: 10,
    width: 300,
    height: 300,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  }
})

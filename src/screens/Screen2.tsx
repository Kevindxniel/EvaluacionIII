import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export const Screen2 = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://www.ecuavisa.com/binrepository/1046x600/173c0/600d600/none/11705/MRNR/goku-day-ecuavisa_935884_20230509153617.jpg',
        }}
        style={styles.img}
      />
      <View style={styles.container}>
        <Text style={styles.text}>Son Goku</Text>
        <Text style={styles.parr}>
          "No pienso que esté salvando el mundo. Lo que ocurre es que acudo a
          cada conflicto por la batalla, lo que ronda por mi mente es derrotar
          al más fuerte para poder convertirme en el más fuerte"
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    resizeMode: 'cover',
    width: '70%',
    height: '70%',
  },
  text: {
    top: 10,
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  parr: {
    paddingVertical: 20,
    textAlign: 'center',
    fontSize: 15,
    color: 'gray',
    fontWeight: 'bold',
  },
});

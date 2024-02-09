import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export const Screen1 = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://cdn.shopify.com/s/files/1/0399/1833/8203/files/goku-black-dbs_1024x1024.jpg?v=1628778429',
        }}
        style={styles.img}
      />
      <View style={styles.container}>
        <Text style={styles.text}>Goku Black</Text>
        <Text style={styles.parr}>
          "Solía pasar mis días observándolos desde el firmamento, lejos de este
          mundo, un lugar remoto por encima de este universo y de la verdad de
          toda creación. Concluí que los seres humanos necesitaban ser
          destruidos."
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
  }
});

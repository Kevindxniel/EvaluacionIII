import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface ButtonProps {
  title: string;
  onPress: () => void;
}

export const ButtonComponent = ({title, onPress}: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#3D3B40',
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 70, 
  },
  text: {
    color: '#F7F7F7',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
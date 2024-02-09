import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';


interface InputProps {
  placeholder: string;
}

export const Input: React.FC<InputProps> = ({
  placeholder,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        keyboardType="default"
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  icon: { 
    position: 'absolute',
    right: 20,
    paddingVertical: 0,
    zIndex: 1,
    marginTop: 20,
  },
  input: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#202124', 
    color: '#F7F7F7',
    height: 50,
    width: 400,
    borderRadius: 10,
    paddingHorizontal: 30,
    marginVertical: 10,
    fontWeight: 'bold',
  },
});
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

interface IFormulario {
  numero1: number;
  numero2: number;
}

export const Screen3 = () => {
  const [formulario, setFormulario] = useState<IFormulario>({
    numero1: 0,
    numero2: 0,
  });

  const [resultado, setResultado] = useState<number | null>(null);

  const handleNumero1Change = (valor: string) => {
    setFormulario({ ...formulario, numero1: parseInt(valor) });
  };

  const handleNumero2Change = (valor: string) => {
    setFormulario({ ...formulario, numero2: parseInt(valor) });
  };

  const handleComparar = () => {
    const { numero1, numero2 } = formulario;
    setResultado(numero1 >= numero2 ? numero1 : numero2);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Formulario Mayor o igual</Text>
      <View style={styles.campo}>
        <Text style={styles.fun}>Número 1:</Text>
        <TextInput
          placeholder="Numero 1"
          onChangeText={handleNumero1Change}
          style={styles.input}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.campo}>
        <Text style={styles.fun}>Número 2:</Text>
        <TextInput
          placeholder="Numero 2"
          onChangeText={handleNumero2Change}
          style={styles.input}
          keyboardType="numeric"
        />
      </View>
      <Button title=">=" onPress={handleComparar} />
      {resultado !== null && (
        <Text style={styles.resultado}>Mayor o igual: {resultado}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#ccc',
    textAlign: 'center',
  },
  fun: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#ccc',
  },
  campo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 5,
    width: 200,
  },
  resultado: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ccc',
    marginTop: 10,
    textAlign: 'center',
    marginVertical: 20,
    borderWidth: 2,
    borderColor: '#ccc',
  },
});


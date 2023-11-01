import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ToastAndroid } from 'react-native';
import { RadioButton } from 'react-native-paper';

const App = () => {
  const [sexo, setSexo] = useState('masculino');
  const [altura, setAltura] = useState('');

  const calcularPesoIdeal = () => {


    let pesoIdealCalculado = 0;
    if (sexo === 'masculino') {
      pesoIdealCalculado = (72.7 * (altura) - 58);
    } else if (sexo === 'feminino') {
      pesoIdealCalculado = (62.1 * (altura) - 44.7);
    }

    ToastAndroid.showWithGravityAndOffset(
      ` ${pesoIdealCalculado} kg`,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Peso Ideal</Text>
      </View>
      <View style={styles.body}>
        <Text>Sexo:</Text>
          <View style={styles.radioButtonContainer}>
          <RadioButton
            value="masculino"
            status={sexo === 'masculino' ? 'checked' : 'unchecked'}
            onPress={() => setSexo('masculino')}
          />
          <Text>Masculino</Text>
          <RadioButton
            value="feminino"
            status={sexo === 'feminino' ? 'checked' : 'unchecked'}
            onPress={() => setSexo('feminino')}
          />
          <Text>Feminino</Text>
        </View>
     
        <Text>Altura: </Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={altura}
          onChangeText={(text) => setAltura(text)}
        />
        <Button title="Peso Ideal" color="purple" onPress={calcularPesoIdeal} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  header: {
    backgroundColor: 'purple',
    padding: 20,
    width: '100%',
    alignItems: 'flex-start',
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  body: {
    marginTop: 20,
    width: '80%',
  },
  radioButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default App;

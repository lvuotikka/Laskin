import { useState } from 'react';
import {
  Button,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function App() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState(0);

  const add = () => {
    setResult(Number(number1) + Number(number2));
  };

  const subtract = () => {
    setResult(Number(number1) - Number(number2));
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Text style={styles.title}>Laskin</Text>

      <Text style={styles.result}>Result: {result}</Text>

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={number1}
        onChangeText={setNumber1}
        placeholder="Ensimmäinen numero"
      />

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={number2}
        onChangeText={setNumber2}
        placeholder="Toinen numero"
      />

      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button title="+" onPress={add} />
        </View>
        <View style={styles.button}>
          <Button title="-" onPress={subtract} />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  result: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: 250,
    height: 50,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    paddingHorizontal: 10,
    fontSize: 20,
  },
  buttons: {
    flexDirection: 'row',
  },
  button: {
    marginHorizontal: 10,
  },
});

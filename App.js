import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Image } from 'react-native';
import { Title } from './src/components/Title';
import { Form } from './src/components/Form';

export default function App() {
  return (
    <View style={styles.container}>
      <Title />
      <Form />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: "#001a5f"
  },
});

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { Button } from '~/components/Button';

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/welcome.png')} style={styles.image} />
      <Text style={styles.title}>Welcome to careerspace</Text>
      <Button title="Next" onPress={() => router.push('/support-screen')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D1C4E9',
  },
  image: {
    height: 393,
    width: 382,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 30,
  },
  buttonText: {
    color: '#000000',
    fontSize: 16,
    textAlign: 'center',
  },
});

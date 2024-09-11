import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { Button } from '~/components/Button';

export default function LearnScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Learn and practice</Text>
      <Image source={require('../assets/learning.png')} style={styles.image} />
      <Button title="Next" onPress={() => router.push('/start-screen')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#AB93E0',
  },
  image: {
    width: 350,
    height: 341,
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

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { Button } from '~/components/Button';

export default function SupportScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Get support in your new career</Text>
      <Image source={require('../assets/support.png')} style={styles.image} />
      <Button title="Next" onPress={() => router.push('/learn-screen')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7CE45',
  },
  image: {
    width: 347,
    height: 284,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000000',
  },
  button: {
    backgroundColor: '#000000',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 30,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
  },
});

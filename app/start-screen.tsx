import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { router } from 'expo-router';

export default function StartScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Let's start your career!</Text>
      <Image source={require('../assets/start.png')} style={styles.image} />

      <TouchableOpacity style={styles.signInButton} onPress={() => router.push('/login')}>
        <Text style={styles.signInText}>Sign in</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signUpButton} onPress={() => router.push('/register')}>
        <Text style={styles.signUpText}>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCC1FF',
  },
  image: {
    width: 347,
    height: 338,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  signInButton: {
    backgroundColor: '#FFEB3B',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 30,
    marginBottom: 10,
    width: 200,
  },
  signInText: {
    color: '#000000',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  signUpButton: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 30,
    width: 200,
  },
  signUpText: {
    color: '#000000',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

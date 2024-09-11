import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

export default function RegisterScreen() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const router = useRouter();

  const handleRegister = async () => {
    // Simular criação de conta e salvar o token
    await AsyncStorage.setItem('userToken', 'abc123');
    router.replace('/');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create account</Text>

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="careerplace@gmail.com"
        placeholderTextColor="#A9A9A9"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.label}>Username</Text>
      <TextInput
        style={styles.input}
        placeholder="design ninja"
        placeholderTextColor="#A9A9A9"
        value={username}
        onChangeText={setUsername}
      />

      <Text style={styles.label}>Full name</Text>
      <TextInput
        style={styles.input}
        placeholder="Jane Soci"
        placeholderTextColor="#A9A9A9"
        value={fullName}
        onChangeText={setFullName}
      />

      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerButtonText}>Create an account</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1A1A1A',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 40,
  },
  label: {
    alignSelf: 'flex-start',
    color: '#FFFFFF',
    marginLeft: 20,
    marginBottom: 8,
    fontSize: 16,
  },
  input: {
    width: '90%',
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 30,
    marginBottom: 20,
    fontSize: 16,
  },
  registerButton: {
    width: '90%',
    backgroundColor: '#D7FF43',
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 10,
  },
  registerButtonText: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

import { Stack, useRouter } from 'expo-router';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function RootLayout() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkAuthStatus = async () => {
      const userToken = await AsyncStorage.getItem('userToken');
      if (userToken) {
        setIsAuthenticated(true);
      } else {
        router.push('/welcome-screen');
      }
    };

    checkAuthStatus();
  }, []);

  return (
    <Stack>
      <Stack.Screen name="welcome-screen" options={{ headerShown: false }} />
      <Stack.Screen name="support-screen" options={{ headerShown: false }} />
      <Stack.Screen name="learn-screen" options={{ headerShown: false }} />
      <Stack.Screen name="start-screen" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="register" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
    </Stack>
  );
}

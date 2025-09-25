import { Stack } from 'expo-router';
import { AppProvider } from './context/Acces';

export default function AppLayout() {
  return (
    <AppProvider>
      <Stack>
        <Stack.Screen 
          name="login" 
          options={{ animation: "fade", headerShown: false }} 
        />
        <Stack.Screen 
          name="home" 
          options={{ animation: "fade", headerShown: false }} 
        />
        <Stack.Screen 
          name="register" 
          options={{ animation: "fade", headerShown: false }} 
        />
      </Stack>
    </AppProvider>
  );
}
import { Stack } from 'expo-router';

export default function AppLayout() {
  return (
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
  );
}
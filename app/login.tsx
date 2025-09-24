// app/login.js
import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import "../global.css";

export default function LoginScreen() {
  const router = useRouter();
  return (
    // <View style={styles.container}>
    //   <Text style={styles.title}>Connexion</Text>
    //   <TextInput
    //     style={styles.input}
    //     placeholder="Email"
    //     keyboardType="email-address"
    //   />
    //   <TextInput
    //     style={styles.input}
    //     placeholder="Mot de passe"
    //     secureTextEntry={true}
    //   />
    //   <Button
    //     title="Se connecter"
    //     onPress={handleLogin}
    //   />
    // </View>
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewind!
      </Text>
    </View>
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
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});
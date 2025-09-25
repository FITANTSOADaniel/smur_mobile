import { Octicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native';
import CustomKeyBoardView from '../components/CustomKeyBoardView';
import "../global.css";
//import { login } from './../api/service';
import { useApp } from "./context/Acces";

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setAccesUser,setAccesTeam } = useApp();

  const handleLogin = async () => {
    try {
      //const response = await login({ email, password });
      // const token = response.data.token;
      //setAccesUser(response.data.user.accessUser)
      //setAccesTeam(response.data.user.accessTeam)
      // await AsyncStorage.setItem('userToken', token);
      // Alert.alert('Succès', 'Connexion réussie !');

      router.push('/home');
    } catch (error) {
      console.log(error);
      let message = 'Échec de la connexion. Vérifiez vos identifiants.';
      if (typeof error === 'object' && error !== null && 'response' in error) {
        const err = error as { response?: { data?: { message?: string } } };
        message = err.response?.data?.message || message;
      }
      Alert.alert('Erreur', message);
    }
  };

  return (
    <CustomKeyBoardView>
      <Text className="text-4xl font-extrabold text-center text-gray-500">
        SMUR Pontoise
      </Text>
      <Text className="text-3xl font-bold text-blue-600 mb-10 text-center">
        Se connecter
      </Text>

      <View className="mb-5">
        <View className="flex-row items-center bg-gray-100 px-4 py-3 rounded-2xl border border-gray-200">
          <Octicons name="mail" size={20} color="gray" />
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Votre email"
            placeholderTextColor="gray"
            keyboardType="email-address"
            autoCapitalize="none"
            className="flex-1 ml-3 text-base text-gray-800"
          />
        </View>
      </View>

      <View className="mb-3">
        <View className="flex-row items-center bg-gray-100 px-4 py-3 rounded-2xl border border-gray-200">
          <Octicons name="lock" size={20} color="gray" />
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Mot de passe"
            placeholderTextColor="gray"
            secureTextEntry
            className="flex-1 ml-3 text-base text-gray-800"
          />
        </View>
      </View>

      <Text className="font-semibold text-right text-gray-500 mb-6">
        Mot de passe oublié ?
      </Text>

      <TouchableOpacity
        className="bg-blue-600 py-4 rounded-2xl items-center mb-8 active:opacity-90"
        onPress={handleLogin}
      >
        <Text className="text-white font-semibold text-lg">Connexion</Text>
      </TouchableOpacity>

      <View className="flex-row justify-center">
        <Text className="font-medium text-gray-600">
          Pas encore de compte ?{' '}
        </Text>
        <Pressable onPress={() => router.push('/register')}>
          <Text className="font-bold text-blue-600">
            S'inscrire ici
          </Text>
        </Pressable>
      </View>
    </CustomKeyBoardView>
  );
}

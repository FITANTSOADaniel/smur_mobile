import { Octicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native';
import CustomKeyBoardView from '../components/CustomKeyBoardView';
import "../global.css";

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <CustomKeyBoardView>
      {/* Titre */}
      <Text className="text-3xl font-extrabold text-blue-600 mb-10 text-center">
        S'inscrire
      </Text>

      {/* Champ Email */}
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

      {/* Champ Mot de passe */}
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

      {/* Bouton Connexion */}
      <TouchableOpacity
        className="bg-blue-600 py-4 rounded-2xl items-center mb-8 active:opacity-90"
      >
        <Text className="text-white font-semibold text-lg">S'inscrire</Text>
      </TouchableOpacity>

      {/* Lien inscription */}
      <View className="flex-row justify-center">
        <Text className="font-medium text-gray-600">
          Vous avez déjà de compte ?{' '}
        </Text>
        <Pressable onPress={() => router.push('/login')}>
          <Text className="font-bold text-blue-600">
            Se connecter ici
          </Text>
        </Pressable>
      </View>
    </CustomKeyBoardView>
  );
}

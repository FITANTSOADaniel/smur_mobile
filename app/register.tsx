import { Octicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native';
import CustomKeyBoardView from '../components/CustomKeyBoardView';
import "../global.css";

export default function LoginScreen() {
  const router = useRouter();

  return (
    <CustomKeyBoardView>
      <Text className="text-4xl font-extrabold text-center">
        SMUR Pontoise
      </Text>
      <Text className="text-3xl font-extrabold text-blue-600 mb-10 text-center">
        Inscription
      </Text>

      <View className="mb-5">
        <View className="flex-row items-center bg-gray-100 px-4 py-3 rounded-2xl border border-gray-200">
          <Octicons name="mail" size={20} color="gray" />
          <TextInput
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
            placeholder="Mot de passe"
            placeholderTextColor="gray"
            secureTextEntry
            className="flex-1 ml-3 text-base text-gray-800"
          />
        </View>
      </View>

      <View className="mb-5">
        <View className="flex-row items-center bg-gray-100 px-4 py-3 rounded-2xl border border-gray-200">
          <Octicons name="device-mobile" size={20} color="gray" />
          <TextInput
            placeholder="Téléphone"
            placeholderTextColor="gray"
            keyboardType="phone-pad"
            className="flex-1 ml-3 text-base text-gray-800"
          />
        </View>
      </View>

      <Text className="text-xl">Fonction</Text>
      <View className="mb-5 bg-gray-100 rounded-2xl border border-gray-200">
        <Picker
          style={{ height: 50 }}
        >
          <Picker.Item label="Amb SMUR" value="amb" />
          <Picker.Item label="Inf SMUR" value="inf" />
          <Picker.Item label="Med SMUR" value="med" />
          <Picker.Item label="Stg SMUR" value="stg" />
          <Picker.Item label="SAMU" value="samu" />
        </Picker>
      </View>
      <Text className="text-xl">Métier</Text>
      <View className="mb-5 bg-gray-100 rounded-2xl border border-gray-200">
        <Picker
          style={{ height: 50 }}
        >
          <Picker.Item label="ADE" value="ADE" />
          <Picker.Item label="IDE" value="IDE" />
          <Picker.Item label="IADE" value="IADE" />
          <Picker.Item label="IPDE" value="IPDE" />
        </Picker>
      </View>
      <Text className="text-xl">Bureau</Text>
      <View className="mb-5 bg-gray-100 rounded-2xl border border-gray-200">
        <Picker
          style={{ height: 50 }}
        >
          <Picker.Item label="Paramed SMUR" value="paramed" />
          <Picker.Item label="Med SMUR" value="med" />
          <Picker.Item label="SAMU" value="samu" />
          <Picker.Item label="Cadre" value="cadre" />
        </Picker>
      </View>

      <TouchableOpacity
        className="bg-blue-600 py-4 rounded-2xl items-center mb-8 active:opacity-90"
      >
        <Text className="text-white font-semibold text-lg">S'inscrire</Text>
      </TouchableOpacity>

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
      <Text>
        Inscription pas encore fonctionnel, juste API register dans symfony
      </Text>
    </CustomKeyBoardView>
  );
}

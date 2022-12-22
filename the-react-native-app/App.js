import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View,SafeAreaView } from 'react-native';
 

export default function App() {
  return (
      <View className="flex-1 items-center justify-center bg-blue">
      <Text className="text-blue-500">tailwindcss setup complete!</Text>
      <StatusBar style="auto" />
    </View>
  );
}



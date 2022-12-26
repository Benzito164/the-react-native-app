import { View, Text, TouchableOpacity,Image, TextInput, SafeAreaView } from 'react-native'
import React from 'react'
import { WelcomePageImageAssets } from '../assets/ImagesAssests';
import CustomBtn from '../components/Atoms/buttons';

const WelcomeLoginScreen = () => {
  return (
    <SafeAreaView className="flex-1 py-2 items-center bg-white space-y-5">
      <View className="items-center">
      <Image 
           source={WelcomePageImageAssets.welcomeImage}  
          className="w-60 h-60 rounded-full"
     />
        <Text className="font-sans font-semibold text-xl">The React Native App</Text>
      </View>
      <View className= "space-y-4">
        <TextInput
         placeholder='Email'
         className ="bg-white w-80 h-12 border-2 border-transparent rounded-lg shadow-md shadow-black-700 py-2 px-3 placeholder-black"
        />
        <TextInput
         placeholder='Password'
         className ="bg-white w-80 h-12 border-2 border-transparent rounded-lg shadow-md shadow-black-700 py-2 px-3 placeholder-black"
        />
      </View>
      <View className="space-y-1 items-center">
      <TouchableOpacity className="rounded-lg bg-black bg-center w-32 h-10">
        <Text className="text-center py-2  text-white">Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity className="rounded-lg bg-black bg-center w-64 h-10">
        <Text className="text-center py-2  text-white">Sign Up</Text>
      </TouchableOpacity>
      </View>

      <View>
        <Text>Forgot your Password?</Text>
      </View>
    </SafeAreaView>
  )
}

export default WelcomeLoginScreen;
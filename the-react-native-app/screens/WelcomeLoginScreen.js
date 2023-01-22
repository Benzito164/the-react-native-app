import { View, Text, TouchableOpacity,Image, TextInput, SafeAreaView,Alert } from 'react-native'
import React, { useState } from 'react';
import { WelcomePageImageAssets } from '../assets/ImagesAssests';
import {auth} from '../firebase'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
 


 const WelcomeLoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginSignUpAlert = (title, message) =>{
    Alert.alert(title,message,[{text:"Dismiss",onPress:()=>resetTextfields()}])
  }
  const resetTextfields = () => {
    setEmail("")
    setPassword("")
  }

  const handleSignUp = ()=>{
    createUserWithEmailAndPassword(auth, email, password)
    .then(userCredentials =>{
      const user = userCredentials.user;
      console.log(user.email);
      loginSignUpAlert("Sign In Successful! 🎉","Please sign in now ");
    })
    .catch(() => loginSignUpAlert("Sign In Unsuccessful ☹️ ","Please check your login/password"));
  }

  const handleLogin = () =>{
    signInWithEmailAndPassword(auth, email, password)
    .then(() => loginSignUpAlert("Yayy 🎉", "We recognise your details"))
    .catch((err) => loginSignUpAlert("🤔 We dont recognise you!","Please check your details or sign up \nif you havent"));
  }

  return (
    <SafeAreaView className="flex-1 py-2 items-center bg-white space-y-5">
      <View className="items-center">
      <Image 
           source={WelcomePageImageAssets.welcomeImage}  
          className="w-60 h-60 rounded-full"
     />
        <Text className="font-semibold text-xl">The React Native App</Text>
      </View>
      <View className= "space-y-4">
        <TextInput
        value={email}
        onChangeText={(text) => setEmail(text)}
         placeholder='Email'
         placeholderTextColor = "#000000"
         className ="bg-white w-80 h-12 border-2 border-transparent rounded-lg shadow-md shadow-black-700 py-2 px-3 placeholder-black"
        />
        <TextInput
         value={password}
         onChangeText={(text) => setPassword(text)}
         placeholder='Password'
         placeholderTextColor = "#000000"
         secureTextEntry = {true}
         className ="bg-white w-80 h-12 border-2 border-transparent rounded-lg shadow-md shadow-black-700 py-2 px-3 placeholder-black"
        />
      </View>
      <View className="space-y-1 items-center">
      <TouchableOpacity 
       onPress = {handleLogin}
      className="rounded-lg bg-black bg-center w-32 h-10">
      <Text className="text-center py-2  text-white">Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity 
       onPress={handleSignUp}
      className="rounded-lg bg-black bg-center w-64 h-10">
        <Text className="text-center py-2  text-white">Sign Up</Text>
      </TouchableOpacity>
      </View>

      <View>
      <TouchableOpacity 
       onPress={()=> loginSignUpAlert("😩 Feature Not Implemented","Sorry we have not yet implemented this feature \n we will in a future release")}
     >
        <Text>Forgot your password?</Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default WelcomeLoginScreen;
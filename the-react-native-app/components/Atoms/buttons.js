import { View, Text, TouchableOpacity,Image } from 'react-native'
import React from 'react'

const CustomBtn = ({btnText,btnColour}) => {
    return (
        <TouchableOpacity className="rounded-full bg-gray-500 bg-center w-40 h-5">
        <Text className="text-center text-red">{btnText}</Text>
      </TouchableOpacity>
    );
}
export default  CustomBtn;
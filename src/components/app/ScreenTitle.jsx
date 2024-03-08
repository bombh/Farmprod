import { View, Text } from 'react-native'
import React from 'react'

const ScreenTitle = ( {title } ) => {
  return (
   <View className="mb-2">
      <Text className="text-black text-center font-extralight lowercase text-6xl p-2">{title}</Text>
   </View>
  )
}

export default ScreenTitle
import { View, Text, Pressable } from 'react-native'
import { Image } from 'expo-image'

import ScreenTitle from "@/src/components/app/ScreenTitle";

export default function Screen() {

   return (

      <View className="flex-1 bg-white">

         <ScreenTitle title="Tours" />
         
         <View className="pt-16 items-center">
            <Text className="text-2xl text-center mb-5">Select a tour</Text>

            <View className="flex-row justify-center mb-5">
               <Pressable
                  className="w-4/5 bg-neutral-900 p-2 active:bg-neutral-700 rounded-md"
                  onPress={ () => {} }>
                  <Text className="text-lg text-white text-center">Louvain-la-Neuve</Text>
               </Pressable>
            </View>

            <View className="flex-row justify-center mb-5">
               <Pressable
                  className="w-4/5 bg-neutral-900 p-2 active:bg-neutral-700 rounded-md"
                  onPress={ () => {} }>
                  <Text className="text-lg text-white text-center">Ottignies</Text>
               </Pressable>
            </View>

            <View className="flex-row justify-center mb-5">
               <Pressable
                  className="w-4/5 bg-neutral-600 p-2 rounded-md"
                  onPress={ () => {} }>
                  <Text className="text-lg text-white text-center">Bruxelles (soon)</Text>
               </Pressable>
            </View>
         </View>

      </View>
   )
}

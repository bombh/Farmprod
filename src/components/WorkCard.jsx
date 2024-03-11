import { View, Text, Pressable, Image } from 'react-native'
import { useCallback } from 'react'
//import { Image } from 'expo-image'
import { memo } from 'react'

const placeholder = require('@/src/assets/images/placeholder.png')

const WorkCard = ( props ) => {
   
   const { title, excerpt, feature_image, tags } = props
   console.log('Rendering Card', title)

   const img = feature_image.replace("/images/", "/images/size/w300/")   
   const tagText = tags.slice(1).map( tag => tag.name ).join(' • ')

   return (
      <Pressable className="mb-7 active:opacity-70">
         <View className="flex-row">
            <Image
               source={{ uri: img }}
               className="w-full h-44"
               defaultSource={placeholder}
               resizeMode='cover'
            />
         </View>
         <View className="bg-black p-1">
            <Text numberOfLines={1} className="text-white font-semibold text-lg text-center">
               {title}
            </Text>
         </View>
         <View>
            <Text className="text-neutral-400 text-lg leading-5 text-center py-2">
               {excerpt}
            </Text>
         </View>
         <View className="border border-neutral-300 border-x-0 border-y-1">
            <Text className="text-xs uppercase text-center py-2">
               {tagText}
            </Text>
         </View>
         
      </Pressable>
   )
}

export default memo(WorkCard)
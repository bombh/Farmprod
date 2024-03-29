import { View, Text, Pressable } from 'react-native'
import { useCallback } from 'react'
import { Image } from 'expo-image'
import { useNavigation, useRouter } from 'expo-router'
//import { memo } from 'react'

const placeholder = require('@/src/assets/images/placeholder.png')

const WorkCard = ( props ) => {
   const router = useRouter()
   
   const { title, excerpt, feature_image, tags } = props
   
   const img = feature_image.replace("/images/", "/images/size/w300/")   
   const tagText = tags.slice(1).map( tag => tag.name ).join(' • ')

   const showDetail = () => {
      router.navigate({
         pathname: `works/detail`,
         params: { ...props }
      })
   }

   return (
      <Pressable className="mb-7 active:opacity-70" onPress={showDetail}>
         <View className="flex-row">
            <Image
               source={{ uri: img }}
               className="w-full h-32"
               placeholder={placeholder}
               placeholderContentFit='cover'
               transition={500}
            />
         </View>
         <View className="bg-black p-1">
            <Text numberOfLines={1} className="text-white font-semibold text-lg text-center">
               {title}
            </Text>
         </View>
         <View>
            <Text numberOfLines={1} className="text-neutral-400 text-lg leading-5 text-center py-2">
               {excerpt}
            </Text>
         </View>
         <View className="border border-neutral-300 border-x-0 border-y-1">
            <Text numberOfLines={1} className="text-xs uppercase text-center py-2">
               {tagText}
            </Text>
         </View>
         
      </Pressable>
   )
}

export default WorkCard
//export default memo(WorkCard, (prevProps, nextProps) => (prevProps.id === nextProps.id))
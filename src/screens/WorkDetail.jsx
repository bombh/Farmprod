import { ScrollView, View, Text } from "react-native"
import { Image } from "expo-image"
import RenderHtml from "react-native-render-html"
import HeaderBack from "../layouts/HeaderBack"
import { useLocalSearchParams } from "expo-router"

const placeholder = require("@/src/assets/images/placeholder.png")

const Screen = () => {
   // Get route params
   const params = useLocalSearchParams()
   const { id, title, excerpt, imgHeader, tagText } = params

   return (
      <>
         <HeaderBack />
         <ScrollView className="relative w-full bg-white">
            <View className="relative">
               <Image
                  source={{ uri: imgHeader }}
                  className="w-full h-80"
                  placeholder={placeholder}
                  placeholderContentFit="cover"
                  transition={500}
               />
               <View className="absolute bg-black/80 top-28 left-5 right-5">
                  <Text
                     numberOfLines={1}
                     className="text-xl text-white font-medium text-center px-3 py-5"
                  >
                     {title}
                  </Text>
               </View>
               <View className="absolute bg-white/70 bottom-0 left-0 right-0 px-5 py-1">
                  <Text className="text-xs font-semibold text-center text-black uppercase">
                     {tagText}
                  </Text>
               </View>
            </View>
            <View className="pl-5 pr-8 py-3">
               <Text className="text-lg text-center text-neutral-500 leading-6">
                  {excerpt}
               </Text>
            </View>
            {/* <RenderHtml /> */}
         </ScrollView>
      </>
   )
}

export default Screen

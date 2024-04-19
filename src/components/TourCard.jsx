import { Image } from "expo-image"
import { useRouter } from "expo-router"
import { Pressable, Text, View } from "react-native"

const placeholder = require("@/src/assets/images/placeholder.png")

export default function TourCard({ id, title, img }) {
   const router = useRouter()

   const showDetail = () => {
      if (!id) return

      router.navigate({
         pathname: `tours/detail`,
         params: {
            id,
         },
      })
   }

   return (
      <Pressable
         className="relative mb-5 active:opacity-70"
         onPress={showDetail}
      >
         <Image
            source={{ uri: img }}
            className="w-full h-44"
            placeholder={placeholder}
            placeholderContentFit="cover"
            transition={500}
         />
         {id ? (
            <View className="absolute bottom-0 w-full bg-black/70 p-2 h-11">
               <Text
                  numberOfLines={1}
                  className="text-white font-semibold text-lg text-center"
               >
                  {title}
               </Text>
            </View>
         ) : (
            <View className="absolute bottom-0 w-full bg-black/70 p-2 h-11">
               <Text
                  numberOfLines={1}
                  className="text-white font-semibold text-lg text-center"
               >
                  {title}
               </Text>
            </View>
         )}
      </Pressable>
   )
}

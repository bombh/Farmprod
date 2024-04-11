import { View, Text, Pressable } from "react-native"
import { useRouter } from "expo-router"
import { Image } from "expo-image"
import { MotiView, MotiText } from "moti"

import ScreenTitle from "@/src/components/app/ScreenTitle"
import { Drawer } from "expo-router/drawer"
import HeaderDrawer from "@/src/layouts/HeaderDrawer"

export default function Screen() {
   const router = useRouter()

   const showTour = (tour) => {
      router.navigate({
         pathname: `tours/detail`,
         params: { tour: tour },
      })
   }

   const animatedProps = {
      from: { opacity: 0, translateY: 50 },
      animate: { opacity: 1, translateY: 0 },
      transition: { type: "timing", duration: 500 },
   }

   return (
      <>
         <HeaderDrawer />

         <View className="flex-1 bg-white">
            <ScreenTitle title="Tours" />

            <View className="pt-16 items-center">
               <MotiText
                  className="text-2xl text-center mb-5"
                  delay={0}
                  {...animatedProps}
               >
                  Select a tour
               </MotiText>

               <MotiView
                  className="flex-row justify-center mb-5"
                  delay={250}
                  {...animatedProps}
               >
                  <Pressable
                     className="w-4/5 bg-neutral-900 p-2 active:bg-neutral-700 rounded-md"
                     onPress={() => {
                        showTour("lln")
                     }}
                  >
                     <Text className="text-lg text-white text-center">
                        Louvain-la-Neuve
                     </Text>
                  </Pressable>
               </MotiView>

               <MotiView
                  className="flex-row justify-center mb-5"
                  delay={500}
                  {...animatedProps}
               >
                  <Pressable
                     className="w-4/5 bg-neutral-900 p-2 active:bg-neutral-700 rounded-md"
                     onPress={() => {
                        showTour("ottignies")
                     }}
                  >
                     <Text className="text-lg text-white text-center">
                        Ottignies
                     </Text>
                  </Pressable>
               </MotiView>

               <MotiView
                  className="flex-row justify-center mb-5"
                  delay={750}
                  {...animatedProps}
               >
                  <Pressable
                     className="w-4/5 bg-neutral-600 p-2 rounded-md"
                     onPress={() => {}}
                  >
                     <Text className="text-lg text-white text-center">
                        Bruxelles (soon)
                     </Text>
                  </Pressable>
               </MotiView>
            </View>
         </View>
      </>
   )
}

import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useNavigation, useRouter } from "expo-router";

const logo = require('../assets/icon.png');

export default function Page() {
   const router = useRouter();

   return (
      <View className="flex-1 px-3 pt-3 pb-1 bg-white">
         {/* <Image source={logo} className="w-52 h-52"  />
         <Text className="text-black font-extrabold uppercase text-4xl">Farmprod</Text>
         <Text className="text-black mb-16">Welcome in the Farmprod's world !</Text> */}

         <ScrollView className="flex-1">
            <View className="mb-2">
               <Text className="text-black text-center font-extralight text-6xl p-2">work</Text>
            </View>
            <View className="pb-8">
               <View className="flex-row">
                  <Image source={{ uri: 'https://www.farmprod.be/content/images/size/w600/2021/07/3O6A7088-1.jpg' }} className="w-full h-44" />
               </View>
               <View className="bg-black p-1">
                  <Text numberOfLines={1} className="text-white font-semibold text-xl text-center">Lorem ipsum dolor</Text>
               </View>
               <View>
                  <Text className="text-neutral-400 text-lg text-center py-2">Mural for the exhibition in the age of Bruegel</Text>
               </View>
               <View className="border border-neutral-300 border-x-0 border-y-1 ">
                  <Text className="text-xs uppercase text-center py-2">Murals • Brussels (BE) • 2019</Text>
               </View>
               
            </View>

            <View className="pb-8">
               <View className="flex-row">
                  <Image source={{ uri: 'https://www.farmprod.be/content/images/size/w600/2021/07/3O6A7088-1.jpg' }} className="w-full h-44" />
               </View>
               <View className="bg-black p-1">
                  <Text numberOfLines={1} className="text-white font-semibold text-xl text-center">Lorem ipsum dolor</Text>
               </View>
               <View>
                  <Text className="text-neutral-400 text-lg text-center py-2">Mural for the exhibition in the age of Bruegel</Text>
               </View>
               <View className="border border-neutral-300 border-x-0 border-y-1 ">
                  <Text className="text-xs uppercase text-center py-2">Murals • Brussels (BE) • 2019</Text>
               </View>
               
            </View>

            <View className="pb-8">
               <View className="flex-row">
                  <Image source={{ uri: 'https://www.farmprod.be/content/images/size/w600/2021/07/3O6A7088-1.jpg' }} className="w-full h-44" />
               </View>
               <View className="bg-black p-1">
                  <Text numberOfLines={1} className="text-white font-semibold text-xl text-center">Lorem ipsum dolor</Text>
               </View>
               <View>
                  <Text className="text-neutral-400 text-lg text-center py-2">Mural for the exhibition in the age of Bruegel</Text>
               </View>
               <View className="border border-neutral-300 border-x-0 border-y-1 ">
                  <Text className="text-xs uppercase text-center py-2">Murals • Brussels (BE) • 2019</Text>
               </View>
               
            </View>

            <View className="pb-8">
               <View className="flex-row">
                  <Image source={{ uri: 'https://www.farmprod.be/content/images/size/w600/2021/07/3O6A7088-1.jpg' }} className="w-full h-44" />
               </View>
               <View className="bg-black p-1">
                  <Text numberOfLines={1} className="text-white font-semibold text-xl text-center">Lorem ipsum dolor</Text>
               </View>
               <View>
                  <Text className="text-neutral-400 text-lg text-center py-2">Mural for the exhibition in the age of Bruegel</Text>
               </View>
               <View className="border border-neutral-300 border-x-0 border-y-1 ">
                  <Text className="text-xs uppercase text-center py-2">Murals • Brussels (BE) • 2019</Text>
               </View>
               
            </View>

            <View className="pb-8">
               <View className="flex-row">
                  <Image source={{ uri: 'https://www.farmprod.be/content/images/size/w600/2021/07/3O6A7088-1.jpg' }} className="w-full h-44" />
               </View>
               <View className="bg-black p-1">
                  <Text numberOfLines={1} className="text-white font-semibold text-xl text-center">Lorem ipsum dolor</Text>
               </View>
               <View>
                  <Text className="text-neutral-400 text-lg text-center py-2">Mural for the exhibition in the age of Bruegel</Text>
               </View>
               <View className="border border-neutral-300 border-x-0 border-y-1 ">
                  <Text className="text-xs uppercase text-center py-2">Murals • Brussels (BE) • 2019</Text>
               </View>
               
            </View>

            <View className="pb-8">
               <View className="flex-row">
                  <Image source={{ uri: 'https://www.farmprod.be/content/images/size/w600/2021/07/3O6A7088-1.jpg' }} className="w-full h-44" />
               </View>
               <View className="bg-black p-1">
                  <Text numberOfLines={1} className="text-white font-semibold text-xl text-center">Lorem ipsum dolor</Text>
               </View>
               <View>
                  <Text className="text-neutral-400 text-lg text-center py-2">Mural for the exhibition in the age of Bruegel</Text>
               </View>
               <View className="border border-neutral-300 border-x-0 border-y-1 ">
                  <Text className="text-xs uppercase text-center py-2">Murals • Brussels (BE) • 2019</Text>
               </View>
               
            </View>
               
         </ScrollView>
      </View>
   );
}


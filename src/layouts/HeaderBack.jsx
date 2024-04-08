import { Image, View } from "react-native"
import { Stack } from "expo-router"
import { useNavigation } from "expo-router"
import colors from "tailwindcss/colors"
import { MaterialIcons } from "@expo/vector-icons"

const logo = require("@/src/assets/images/logo_128.png")

export default function HeaderBack() {
   const navigation = useNavigation()

   return (
      <Stack.Screen
         options={{
            headerShown: true,
            headerTransparent: true,
            headerTitle: "",
            headerShadowVisible: false,
            headerRight: () => (
               <View className="flex items-center justify-center bg-white w-10 h-10 rounded-full">
                  <Image source={logo} className="w-7 h-7 mt-1" />
               </View>
            ),
            headerLeft: () => (
               <View className="flex items-center justify-center bg-black/40 w-10 h-10 rounded-full">
                  <MaterialIcons
                     name="arrow-back-ios-new"
                     onPress={() => {
                        navigation.goBack()
                     }}
                     size={22}
                     color={colors.white}
                  />
               </View>
            ),
         }}
      />
   )
}

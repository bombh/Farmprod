import { View } from "react-native"
import MapView, { PROVIDER_GOOGLE } from "react-native-maps"
import HeaderBack from "@/src/layouts/HeaderBack"
import { useRef } from "react"

export default function Screen() {
   const mapRef = useRef()

   return (
      <>
         <HeaderBack />

         <View className="flex-1">
            <MapView className="w-full h-full" provider={PROVIDER_GOOGLE} showsUserLocation showsMyLocationButton />
         </View>
      </>
   )
}

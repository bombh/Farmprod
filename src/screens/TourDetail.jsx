import { Linking, Platform, Pressable, Text, View } from "react-native"
import { Image } from "expo-image"
import { useLocalSearchParams } from "expo-router"
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from "react-native-maps"
import HeaderBack from "@/src/layouts/HeaderBack"
import BottomSheet, {
   BottomSheetView,
   BottomSheetBackdrop,
} from "@gorhom/bottom-sheet"
import { FontAwesome6 } from "@expo/vector-icons"
import { useCallback, useMemo, useRef, useState } from "react"

const mapStyle = require("@/src/data/mapStyle.json")
const placeholder = require("@/src/assets/images/placeholder.png")

export default function Screen() {
   // States
   const [place, setPlace] = useState({})

   // Get route params
   const params = useLocalSearchParams()
   const { tour } = params

   // Tour data
   let data

   // Get data
   const req = require.context("../data", false, /\.js$/)
   req.keys().forEach((filename) => {
      if (filename.includes(tour)) {
         data = req(filename)
      }
   })

   // Initial region
   const INITIAL_REGION = {
      latitude: data.param.mapCenter.lat,
      longitude: data.param.mapCenter.lng,
      latitudeDelta: data.param.delta,
      longitudeDelta: data.param.delta,
   }

   // Bottom sheet
   const bottomSheetRef = useRef(null)
   const snapPoints = useMemo(() => ["70%"], [])

   // Render backdrop for Bottom Sheet
   const renderBackdrop = useCallback(
      (props) => (
         <BottomSheetBackdrop
            appearsOnIndex={0}
            disappearsOnIndex={-1}
            {...props}
         />
      ),
      []
   )

   // Handle map's marker press
   const handleMarkerPress = (point) => {
      // Open bottom sheet
      //console.log("point", point)
      setPlace(point)
      bottomSheetRef.current?.snapToIndex(0)
   }

   const openURL = (point) => {
      const scheme = Platform.select({
         ios: "maps://0,0?q=",
         android: "geo:0,0?q=",
      })
      const latLng = `${point.geo.lat},${point.geo.lng}`
      const label = encodeURIComponent(point.place)
      const url = Platform.select({
         ios: `${scheme}${label}@${latLng}`,
         android: `${scheme}${latLng}(${label})`,
      })

      Linking.openURL(url)
   }

   return (
      <>
         <HeaderBack />

         <View className="flex-1">
            <MapView
               className="w-full h-full"
               //provider={PROVIDER_GOOGLE}
               initialRegion={INITIAL_REGION}
               customMapStyle={mapStyle}
               showsUserLocation
               showsMyLocationButton
            >
               {data.points.map((point, index) => (
                  <Marker
                     onPress={() => handleMarkerPress(point)}
                     key={`point${index}`}
                     coordinate={{
                        latitude: point.geo.lat,
                        longitude: point.geo.lng,
                     }}
                     pinColor={
                        point.group === "fpolln"
                           ? "black"
                           : point.group === "kosmo12"
                             ? "turquoise"
                             : point.group === "kosmo15"
                               ? "tomato"
                               : point.group === "statue"
                                 ? "indigo"
                                 : "yellow"
                     }
                  ></Marker>
               ))}
            </MapView>
         </View>

         <BottomSheet
            snapPoints={snapPoints}
            ref={bottomSheetRef}
            index={-1}
            enablePanDownToClose={true}
            backdropComponent={renderBackdrop}
            backgroundStyle={{ backgroundColor: "#333" }}
            handleComponent={null}
            //handleIndicatorStyle={{ backgroundColor: "#666" }}
         >
            <BottomSheetView className="relative bg-white rounded-xl rounded-b-none">
               <Image
                  source={{
                     uri: `https://map.farmprod.be/street-art-map-olln/public/img/art/${place.image}`,
                  }}
                  className="w-full h-full rounded-xl rounded-b-none"
                  placeholder={placeholder}
                  placeholderContentFit="cover"
                  transition={500}
               />
               <View className="bg-black/60 absolute m-0 p-5 pb-12 w-full rounded-xl rounded-b-none bottom-0">
                  <Text className="text-white text-center text-2xl">
                     {place.name}
                  </Text>
                  <Text className="text-white text-center mt-2 text-lg">
                     {place.place}
                  </Text>
               </View>
               <View className="flex absolute top-2 items-center w-full">
                  <View className="bg-white/50 w-12 h-1 rounded-lg"></View>
               </View>
               <Pressable
                  onPress={() => openURL(place)}
                  className="absolute bg-white/60 active:bg-white/80 top-5 right-5 w-12 h-12 rounded-full flex items-center justify-center"
               >
                  <FontAwesome6
                     name="person-walking-arrow-right"
                     size={24}
                     color="black"
                  />
               </Pressable>
            </BottomSheetView>
         </BottomSheet>
      </>
   )
}

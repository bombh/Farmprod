import { Text, View } from "react-native"
import { Image } from "expo-image"
import { useLocalSearchParams } from "expo-router"
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from "react-native-maps"
import HeaderBack from "@/src/layouts/HeaderBack"
import BottomSheet, {
   BottomSheetView,
   BottomSheetBackdrop,
} from "@gorhom/bottom-sheet"
import { useCallback, useMemo, useRef, useState } from "react"

const mapStyle = require("@/src/data/mapStyle.json")
const placeholder = require("@/src/assets/images/placeholder.png")

export default function Screen() {
   // States
   const [place, setPlace] = useState({ address: "", image: "", name: "" })

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
   const snapPoints = useMemo(() => ["75%"], [])

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
      console.log("point", point)
      setPlace({
         image: point.image,
         name: point.name,
         place: point.place,
      })
      console.log("place", point.image)
      bottomSheetRef.current?.snapToIndex(0)
   }

   return (
      <>
         <HeaderBack />

         <View className="flex-1">
            <MapView
               className="w-full h-full"
               provider={PROVIDER_GOOGLE}
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
                  >
                     {/* <Callout tooltip={true}>
                        <View className="w-44 h-60 bg-black/80 p-0 rounded-lg">
                           <Image
                              source={{
                                 uri: `https://map.farmprod.be/street-art-map-olln/public/img/art/${point.image}`,
                              }}
                              className="w-44 h-28 rounded-lg rounded-b-none"
                              placeholder={placeholder}
                              placeholderContentFit="cover"
                              transition={500}
                           />
                           <Text
                              numberOfLines={4}
                              className="text-base text-white leading-5 text-center px-2 pt-2"
                           >
                              {point.name}
                           </Text>
                           <Text
                              //numberOfLines={1}
                              className="text-xs text-white text-center px-2 pt-1"
                           >
                              {point.place}
                           </Text>
                        </View>
                     </Callout> */}
                  </Marker>
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
            <BottomSheetView className="bg-white">
               <Image
                  source={{
                     uri: `https://map.farmprod.be/street-art-map-olln/public/img/art/${place.image}`,
                  }}
                  className="w-full h-full rounded-lg rounded-b-none"
                  placeholder={placeholder}
                  placeholderContentFit="cover"
                  transition={500}
               />
               {/* <View className="m-0 rounded-t-lg">
                  <Text>Bottom Sheet</Text>
               </View> */}
            </BottomSheetView>
         </BottomSheet>
      </>
   )
}

import { Text, View } from "react-native"
import { Image } from "expo-image"
import { useLocalSearchParams } from "expo-router"
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from "react-native-maps"
import HeaderBack from "@/src/layouts/HeaderBack"
import { useRef } from "react"

const mapStyle = require("@/src/data/mapStyle.json")
const placeholder = require("@/src/assets/images/placeholder.png")

export default function Screen() {
   // Get route params
   const params = useLocalSearchParams()
   const { tour } = params
   let data

   // Get data
   const req = require.context("../data", false, /\.js$/)
   req.keys().forEach((filename) => {
      if (filename.includes(tour)) {
         data = req(filename)
      }
   })

   //console.log("data", data)
   const INITIAL_REGION = {
      latitude: data.param.mapCenter.lat,
      longitude: data.param.mapCenter.lng,
      latitudeDelta: data.param.delta,
      longitudeDelta: data.param.delta,
   }

   // point {"address": "", "geo": {"lat": 50.6691055959188, "lng": 4.614127749656513}, "group": "statue", "image": "statue.jpg", "name": "Isaac+Cordal(ES)", "place": "Parcours Statues (5/8)"}
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
                     <Callout tooltip={true}>
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
                     </Callout>
                  </Marker>
               ))}
            </MapView>
         </View>
      </>
   )
}

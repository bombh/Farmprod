import { Image, Text, View } from "react-native"
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from "react-native-maps"
import HeaderBack from "@/src/layouts/HeaderBack"
import { useRef } from "react"
import { param, points } from "@/src/data/places.lln"

const mapStyle = require("@/src/data/mapStyle.json")

export default function Screen() {
   //const mapRef = useRef()

   const INITIAL_REGION = {
      latitude: param.mapCenter.lat,
      longitude: param.mapCenter.lng,
      latitudeDelta: 0.012,
      longitudeDelta: 0.012,
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
               {points.map((point, index) => (
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
                           />
                           <Text
                              //numberOfLines={1}
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

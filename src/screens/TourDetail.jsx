import { Text, View } from "react-native"
import MapView, {
   PROVIDER_GOOGLE,
   MarkerAnimated,
   Marker,
} from "react-native-maps"
import HeaderBack from "@/src/layouts/HeaderBack"
import { useRef } from "react"
import { param, points } from "@/src/data/places.lln"

export default function Screen() {
   //const mapRef = useRef()
   console.log("param", param.mapCenter)

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
                     title={point.name}
                     description={point.place}
                     //image={`https://map.farmprod.be/street-art-map-olln/public/img/art/${point.image}`}
                  />
               ))}
            </MapView>
         </View>
      </>
   )
}

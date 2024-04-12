import { View, Text, Pressable, ScrollView } from "react-native"
import { useRouter } from "expo-router"
import { Image } from "expo-image"

import ScreenTitle from "@/src/components/app/ScreenTitle"
import TourCard from "@/src/components/TourCard"
import HeaderDrawer from "@/src/layouts/HeaderDrawer"

export default function Screen() {
   const router = useRouter()

   // const showTour = (tour) => {
   //    router.navigate({
   //       pathname: `tours/detail`,
   //       params: { tour: tour },
   //    })
   // }

   // Anim props for Moti
   // const animatedProps = {
   //    from: { opacity: 0, translateY: 50 },
   //    animate: { opacity: 1, translateY: 0 },
   //    transition: { type: "timing", duration: 500 },
   // }

   return (
      <>
         <HeaderDrawer />

         <ScrollView className="flex-1 px-5 bg-white">
            <ScreenTitle title="Tours" />

            <TourCard
               id="lln"
               title="Louvain-la-Neuve"
               img="https://map.farmprod.be/street-art-map-olln/public/img/art/lln_fp_4.jpg"
            />

            <TourCard
               id="ottignies"
               title="Ottignies"
               img="https://map.farmprod.be/street-art-map-olln/public/img/art/ott_fp_5.jpg"
            />

            <TourCard title="Brussels (Soon)" />
         </ScrollView>
      </>
   )
}

import React, { useCallback } from "react"
import { View, ActivityIndicator } from "react-native"
import { useNavigation, useRouter } from "expo-router"
import { FlashList } from "@shopify/flash-list"
//import { useSafeAreaInsets } from 'react-native-safe-area-context';

import useAPI from "@/src/hooks/useAPI"
import ScreenTitle from "@/src/components/app/ScreenTitle"
import ArtistCard from "@/src/components/ArtistCard"
import HeaderDrawer from "@/src/layouts/HeaderDrawer"

export default function Screen() {
   const router = useRouter()

   const { data, isLoading, error } = useAPI("GET", "authors", "limit=100")

   return (
      <>
         <HeaderDrawer />

         <View className="flex-1 px-3 bg-white">
            {isLoading ? (
               <>
                  <ScreenTitle title="Artists" />
                  <ActivityIndicator
                     className="pt-16"
                     size="large"
                     color="#000000"
                  />
               </>
            ) : (
               <FlashList
                  data={data.authors}
                  renderItem={({ item }) => <ArtistCard {...item} />}
                  keyExtractor={(item) => item.id}
                  estimatedItemSize={225}
                  //initialNumToRender={5}
                  ListHeaderComponent={<ScreenTitle title="Artists" />}
                  scrollEventThrottle={16}
               />
            )}
         </View>
      </>
   )
}

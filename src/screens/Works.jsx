import { View, ActivityIndicator } from "react-native"
import { useState } from "react"
import { FlashList } from "@shopify/flash-list"

import useAPI from "@/src/hooks/useAPI"
import ScreenTitle from "@/src/components/app/ScreenTitle"
import WorkCard from "@/src/components/WorkCard"
import HeaderDrawer from "@/src/layouts/HeaderDrawer"

export default function Screen() {
   const { data, isLoading, error } = useAPI(
      "GET",
      "posts",
      "limit=100&include=tags"
   )

   return (
      <>
         <HeaderDrawer />
         <View className="flex-1 px-5 bg-white">
            {isLoading ? (
               <>
                  <ScreenTitle title="Works" />
                  <ActivityIndicator
                     className="pt-16"
                     size="large"
                     color="#000000"
                  />
               </>
            ) : (
               <FlashList
                  data={data.posts}
                  renderItem={({ item }) => <WorkCard {...item} />}
                  keyExtractor={(item) => item.id}
                  estimatedItemSize={252}
                  ListHeaderComponent={<ScreenTitle title="Works" />}
                  // initialNumToRender={5}
                  // maxToRenderPerBatch={5}
                  // scrollEventThrottle={16}
               />
            )}
         </View>
      </>
   )
}

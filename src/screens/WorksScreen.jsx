import { ScrollView, View, FlatList, ActivityIndicator } from "react-native";
import { useNavigation, useRouter } from "expo-router";
import { useCallback } from "react";
//import { FlashList } from "@shopify/flash-list";
//import { useSafeAreaInsets } from 'react-native-safe-area-context';

import useAPI from "@/src/hooks/useAPI";
import ScreenTitle from "@/src/components/app/ScreenTitle";
import WorkCard from "@/src/components/WorkCard";

// const logo = require('@/assets/icon.png');


export default function Screen() {
   const router = useRouter();
   
   const { data, isLoading, error } = useAPI('GET', 'posts', 'limit=100&include=tags');

   // Not used as WorkCard is memoized
   const renderItem = useCallback(({item}) => (
      <WorkCard {...item} />
    ), [data]);

   return (
      <View className="flex-1 px-3 bg-white">

         { isLoading ? (
               <>
                  <ScreenTitle title="Works" />
                  <ActivityIndicator className="pt-16" size="large" color="#000000" />
               </>
            ) : (
               <FlatList
                  data={data.posts}
                  renderItem={ ({item}) => <WorkCard {...item} /> }
                  keyExtractor={ item => item.id }
                  initialNumToRender={5}
                  maxToRenderPerBatch={5}
                  ListHeaderComponent={ <ScreenTitle title="Works" />}
                  scrollEventThrottle={16}
               />
            )
         }
         
      </View>
   );
}
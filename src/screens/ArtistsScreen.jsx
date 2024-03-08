import { ScrollView, View, FlatList, ActivityIndicator } from "react-native";
import { useNavigation, useRouter } from "expo-router";
//import { useSafeAreaInsets } from 'react-native-safe-area-context';

import useAPI from "@/src/hooks/useAPI";
import ScreenTitle from "@/src/components/common/ScreenTitle";
import ArtistCard from "@/src/components/ArtistCard";

// const logo = require('@/assets/icon.png');

export default function Screen() {
   const router = useRouter();

   const { data, isLoading, error } = useAPI('GET', 'authors', 'limit=100');

   return (
      <View className="flex-1 px-3 bg-white">

         { isLoading ? (
               <>
                  <ScreenTitle title="Artists" />
                  <ActivityIndicator className="pt-16" size="large" color="#000000" />
               </>
            ) : (
               <FlatList
                  data={data.authors}
                  renderItem={ ({ item }) => <ArtistCard {...item} />}
                  keyExtractor={ item => item.id }
                  initialNumToRender={5}
                  ListHeaderComponent={ <ScreenTitle title="Artists" />}
               />
            )
         }
         
      </View>
   );
}
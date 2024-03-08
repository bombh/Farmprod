import { ScrollView, View, FlatList, ActivityIndicator } from "react-native";
import { useNavigation, useRouter } from "expo-router";
//import { useSafeAreaInsets } from 'react-native-safe-area-context';

import useAPI from "@/src/hooks/useAPI";
import ScreenTitle from "@/src/components/common/ScreenTitle";
import WorksCard from "@/src/components/works/WorksCard";

// const logo = require('@/assets/icon.png');

export default function Screen() {
   const router = useRouter();
   
   const { data, isLoading, error } = useAPI('GET', 'posts', 'limit=100&include=tags');

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
                  renderItem={ ({ item }) => <WorksCard {...item} />}
                  keyExtractor={ item => item.id }
                  initialNumToRender={5}
                  ListHeaderComponent={ <ScreenTitle title="Works" />}
               />
            )
         }
         
      </View>
   );
}
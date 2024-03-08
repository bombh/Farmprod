import { ScrollView, View, FlatList, ActivityIndicator } from "react-native";
import { useNavigation, useRouter } from "expo-router";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import useAPI from "@/src/hooks/useAPI";
import ScreenTitle from "@/src/components/common/ScreenTitle";
import WorksCard from "@/src/components/works/WorksCard";

const logo = require('@/assets/icon.png');

export default function WorkScreen() {
   const router = useRouter();
   const insets = useSafeAreaInsets();

   const { data, isLoading, error } = useAPI('GET', 'posts', 'limit=100&include=tags');

   return (
      <View className="flex-1 px-3 pt-3 pb-1 bg-white" style={{ paddingBottom: insets.bottom,
         paddingTop: insets.top}}>

         <ScreenTitle title="Work" />

         { isLoading ? (
               <ActivityIndicator className="pt-10" size="large" color="#000000" />
            ) : (
               <FlatList
                  data={data.posts}
                  renderItem={ ({ item }) => <WorksCard {...item} />}
                  keyExtractor={ item => item.id }
               />
               
            )

         }
         
         {/* <ScrollView className="flex-1">
            <ScreenTitle title="Work" />

            <WorksCard />
            <WorksCard />
            <WorksCard />
               
         </ScrollView> */}
      </View>
   );
}
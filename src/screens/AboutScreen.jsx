import { View, Text, ScrollView, ActivityIndicator } from 'react-native'
import useAPI from "@/src/hooks/useAPI";
import ScreenTitle from "@/src/components/app/ScreenTitle";

export default Screen = () => {

   const { data, isLoading, error } = useAPI('GET', 'pages/slug/about', '');

   return (
      <ScrollView className="flex-1 px-3 bg-white">
         <ScreenTitle title="About" />
         
         { isLoading ? (
               <ActivityIndicator className="pt-16" size="large" color="#000000" />
            ) : (
               data.pages && <Text key={data.pages[0].id}>{data.pages[0].html}</Text>
            )
         }
      </ScrollView>
   )
}

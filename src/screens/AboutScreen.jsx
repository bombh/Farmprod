import { View, Text, ScrollView, ActivityIndicator } from 'react-native'
import { useWindowDimensions } from 'react-native';
import RenderHtml from 'react-native-render-html';
import { Image } from 'expo-image'

import useAPI from "@/src/hooks/useAPI";
import ScreenTitle from "@/src/components/app/ScreenTitle";

export default Screen = () => {

   const { data, isLoading, error } = useAPI('GET', 'pages/slug/about', '');
   const { width } = useWindowDimensions();

   return (
      <ScrollView className="flex-1 bg-white">
         <ScreenTitle title="About" />
         
         { isLoading ? (
               <ActivityIndicator className="pt-16" size="large" color="#000000" />
            ) : (
               data.pages && 
               <>
                  <Image source={{ uri: 'https://www.farmprod.be/content/images/size/w600/2021/07/bandeFP-1.jpg' }} className="w-full h-36" />
                  <View className="p-3 pb-6">
                     <RenderHtml contentWidth={width} source={{html: data.pages[0].html}} />
                  </View>
               </>
            )
         }
      </ScrollView>
   )
}

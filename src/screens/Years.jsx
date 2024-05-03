import {
   View,
   Text,
   ScrollView,
   ActivityIndicator,
   useWindowDimensions,
} from "react-native"
import { Image } from "expo-image"

import useAPI from "@/src/hooks/useAPI"
import ScreenTitle from "@/src/components/app/ScreenTitle"
import HeaderDrawer from "@/src/layouts/HeaderDrawer"
import RenderHtml from "@/src/components/app/RenderHtml"

const placeholder = require("@/src/assets/images/placeholder.png")

export default function Screen() {
   const { data, isLoading, error } = useAPI("GET", "pages/slug/about", "")

   return (
      <>
         <HeaderDrawer />

         <ScrollView className="flex-1 bg-white">
            <ScreenTitle title="20 years" />

            {isLoading ? (
               <ActivityIndicator
                  className="pt-16"
                  size="large"
                  color="#000000"
               />
            ) : (
               data.pages && (
                  <>
                     <Image
                        source={{
                           uri: "https://www.farmprod.be/content/images/size/w600/2021/07/bandeFP-1.jpg",
                        }}
                        className="w-full h-36"
                        placeholder={placeholder}
                        placeholderContentFit="cover"
                        transition={500}
                     />

                     <View className="py-5">
                        <RenderHtml
                           html={data.pages[0].html}
                           email="farmprod@gmail.com"
                        />
                     </View>
                  </>
               )
            )}
         </ScrollView>
      </>
   )
}

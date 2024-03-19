import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { Slot } from 'expo-router'


// For web exports
//import { NativeWindStyleSheet } from "nativewind";
// NativeWindStyleSheet.setOutput({
//    default: "native",
// });


export default function Layout() {

   return (
      <GestureHandlerRootView className="flex-1">
         <StatusBar style='light' hidden={true} />
         <Slot />
      </GestureHandlerRootView>
  )
  
}
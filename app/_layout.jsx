import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import AppDrawer from '@/src/components/common/AppDrawer';

// For web exports
//import { NativeWindStyleSheet } from "nativewind";
// NativeWindStyleSheet.setOutput({
//    default: "native",
// });

const Layout = () => {
  return (
      <GestureHandlerRootView className="flex-1">
         <StatusBar style='light' hidden={true} />
         <AppDrawer />
      </GestureHandlerRootView>
   )
}

export default Layout

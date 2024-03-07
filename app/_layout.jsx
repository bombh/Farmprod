import { Slot } from 'expo-router';
import { NativeWindStyleSheet } from "nativewind";
import { StatusBar } from 'expo-status-bar';

// NativeWindStyleSheet.setOutput({
//    default: "native",
// });

const Layout = () => {
  return <>
         <StatusBar style='light' hidden={true} />
         <Slot />
      </>
}

export default Layout
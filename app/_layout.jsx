import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Slot } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import { NativeWindStyleSheet } from "nativewind";
import colors, { transparent } from 'tailwindcss/colors';
import { StatusBar } from 'expo-status-bar';

const logo = require('@/src/assets/images/icon.png');

// NativeWindStyleSheet.setOutput({
//    default: "native",
// });

const Layout = () => {
  return (
      <GestureHandlerRootView className="flex-1">
         <StatusBar style='light' hidden={true} />
         <Drawer
            screenOptions={{
               headerShown: true,
               drawerType: 'slide', 
               headerTitleAlign: 'center',
               headerShadowVisible: false,
               drawerStyle : {
                  width: 260,
                  backgroundColor: colors.neutral[900],
               },
               drawerLabelStyle: {
                  //marginLeft: -20,
               },
               drawerActiveTintColor: colors.white,
               drawerActiveBackgroundColor: colors.neutral[700],
               drawerInactiveTintColor: colors.neutral[400],

            }}
         >
            <Drawer.Screen
               name="index" // This is the name of the page and must match the url from root
               options={{
                  drawerLabel: 'Works',
                  title: 'Farmprod',
                  //headerShown: false,
               }}
            />

            <Drawer.Screen
               name="artists/index" // This is the name of the page and must match the url from root
               options={{
                  drawerLabel: 'Artists',
                  title: 'Farmprod',
                  //headerShown: false,
               }}
            />
            <Drawer.Screen
               name="tours/index" // This is the name of the page and must match the url from root
               options={{
                  drawerLabel: 'Tours',
                  title: 'Farmprod',
                  //headerShown: false,
               }}
            />
            <Drawer.Screen
               name="about/index" // This is the name of the page and must match the url from root
               options={{
                  drawerLabel: 'About',
                  title: 'Farmprod',
                  //headerShown: false,
               }}
            />

         </Drawer>
      </GestureHandlerRootView>
   )
}

export default Layout

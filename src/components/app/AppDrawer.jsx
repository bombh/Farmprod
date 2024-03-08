import { Drawer } from 'expo-router/drawer';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import colors from 'tailwindcss/colors';
import AppDrawerContent from '@/src/components/app/AppDrawerContent';
import { styled } from 'nativewind';
import { Image } from 'react-native';

const logo = require('@/src/assets/images/logo_128.png');

const AppDrawer = () => {
   const Icons = styled(FontAwesome6)
   return (
   <Drawer
      drawerContent={ props => <AppDrawerContent {...props} /> }
      screenOptions={{
         headerShown: true,
         drawerType: 'slide',
         headerTintColor: colors.black,
         headerTitleAlign: 'center',
         headerShadowVisible: false,
         headerRight: () => (
            <Image source={logo} className="w-9 h-9 mt-1 mr-4"  />
          ),

         drawerStyle : {
            width: 220,
            backgroundColor: colors.neutral[900],
         },
         drawerLabelStyle: {
            marginLeft: -30,
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
            title: '',
            //headerShown: false,
            drawerIcon: ({ color }) => (
               <Icons name="spray-can-sparkles" size={24} color={color} className="absolute right-3" />
            )
         }}
      />

      <Drawer.Screen
         name="artists/index" // This is the name of the page and must match the url from root
         options={{
            drawerLabel: 'Artists',
            title: '',
            drawerIcon: ({ color }) => (
               <Icons name="people-group" size={24} color={color} className="absolute right-3" />
            )
         }}
      />
      <Drawer.Screen
         name="tours/index" // This is the name of the page and must match the url from root
         options={{
            drawerLabel: 'Tours',
            title: '',
            drawerIcon: ({ color }) => (
               <Icons name="person-walking" size={24} color={color} className="absolute right-5" />
            )
         }}
      />
      <Drawer.Screen
         name="about/index" // This is the name of the page and must match the url from root
         options={{
            drawerLabel: 'About',
            title: '',
            drawerIcon: ({ color }) => (
               <Icons name="circle-info" size={24} color={color} className="absolute right-4" />
            )
         }}
      />

   </Drawer>
  )
}

export default AppDrawer
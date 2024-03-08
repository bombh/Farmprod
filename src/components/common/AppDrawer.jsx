import { Drawer } from 'expo-router/drawer';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import colors from 'tailwindcss/colors';
import AppDrawerContent from '@/src/components/common/AppDrawerContent';
import { styled } from 'nativewind';

const AppDrawer = () => {
   const StyledIcons = styled(FontAwesome6)
   return (
   <Drawer
   drawerContent={ props => <AppDrawerContent {...props} /> }
      screenOptions={{
         headerShown: true,
         drawerType: 'slide', 
         headerTitleAlign: 'center',
         headerShadowVisible: false,
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
            title: 'Farmprod',
            //headerShown: false,
            drawerIcon: ({ color }) => (
               <StyledIcons name="spray-can-sparkles" size={24} color={color} className="absolute right-3" />
            )
         }}
      />

      <Drawer.Screen
         name="artists/index" // This is the name of the page and must match the url from root
         options={{
            drawerLabel: 'Artists',
            title: 'Farmprod',
            drawerIcon: ({ color }) => (
               <StyledIcons name="people-group" size={24} color={color} className="absolute right-3" />
            )
         }}
      />
      <Drawer.Screen
         name="tours/index" // This is the name of the page and must match the url from root
         options={{
            drawerLabel: 'Tours',
            title: 'Farmprod',
            drawerIcon: ({ color }) => (
               <StyledIcons name="person-walking" size={24} color={color} className="absolute right-5" />
            )
         }}
      />
      <Drawer.Screen
         name="about/index" // This is the name of the page and must match the url from root
         options={{
            drawerLabel: 'About',
            title: 'Farmprod',
            drawerIcon: ({ color }) => (
               <StyledIcons name="circle-info" size={24} color={color} className="absolute right-4" />
            )
         }}
      />

   </Drawer>
  )
}

export default AppDrawer
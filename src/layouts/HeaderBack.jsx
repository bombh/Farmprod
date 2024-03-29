import { Image } from 'react-native'
import { Stack } from 'expo-router'
import { useNavigation } from 'expo-router';
import colors from 'tailwindcss/colors';
import { MaterialIcons } from '@expo/vector-icons';

const logo = require('@/src/assets/images/logo_128.png');

export default function HeaderBack() {

   const navigation = useNavigation()

   return (
      <Stack.Screen options={
         {
            headerShown: true,
            headerTitle: '',
            headerShadowVisible: false,
            headerRight: () => (
               <Image source={logo} className="w-7 h-7" />
            ),
            headerLeft: () => (
               <MaterialIcons name="arrow-back-ios-new" onPress={() => {navigation.goBack()}} size={24} color={colors.black} className="m-0" />
            ),
         }
      } />
  )
}
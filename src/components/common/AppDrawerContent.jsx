import { View, Text, Image } from 'react-native'
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'

const logo = require('@/src/assets/images/logo_drawer.png');

export default AppDrawerContent = ( props ) => {
   
      const goToProfile = () => {
         
      }
   return (
   <>
      <DrawerContentScrollView {...props}>

         <View className='flex-row items-center justify-center pt-5 pb-6 pr-1'>
            <Image
               source={logo}
               className='w-32 h-32'
            />
         </View>

         <DrawerItemList {...props} />

      </DrawerContentScrollView>

      <View className="pb-3">
         <Text className='text-neutral-500 text-center text-xs'>Version 1.0.0</Text>
      </View>
   </>
  )
}

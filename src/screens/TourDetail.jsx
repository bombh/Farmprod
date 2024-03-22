import { View } from 'react-native'
import MapView from 'react-native-maps';
import HeaderBack from '../layouts/HeaderBack';

export default function Screen() {
  return (
   <>
      <HeaderBack />

      <View className="flex-1">
         <MapView className="w-full h-full" />
      </View>
   </>
  );
}

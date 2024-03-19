import { View } from 'react-native'
import MapView from 'react-native-maps';

export default function Screen() {
  return (
    <View className="flex-1">
      <MapView className="w-full h-full" />
    </View>
  );
}


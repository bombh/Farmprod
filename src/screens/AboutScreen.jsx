import { View, Text } from 'react-native'
import useAPI from "@/src/hooks/useAPI";
import ScreenTitle from "@/src/components/common/ScreenTitle";

export default Screen = () => {
  return (
   <View className="flex-1 px-3 bg-white">
      <ScreenTitle title="About" />
      <Text>AboutScreen</Text>
    </View>
  )
}

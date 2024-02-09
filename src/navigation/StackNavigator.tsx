import { createStackNavigator } from '@react-navigation/stack';
import { IndexScreen } from '../screens/IndexScreen';
import { StyleSheet } from 'react-native';
import { Screen1} from '../screens/Screen1';
import { PRIMARY_COLOR } from '../commons/constanceColor';
import { Screen2 } from '../screens/Screen2';
import {Screen3} from '../screens/Screen3';
import { Screen4 } from '../screens/Screen4';

const Stack = createStackNavigator();

export const StackNavigator=()=> {
  return (
    <Stack.Navigator screenOptions={{cardStyle: {backgroundColor: PRIMARY_COLOR}}}>
      <Stack.Screen name="Index" options={{headerShown: false}} component={IndexScreen}  />
      <Stack.Screen name="Screen1" component={Screen1} />
      <Stack.Screen name="Screen2" component={Screen2} />
      <Stack.Screen name="Screen3" component={Screen3} />
      <Stack.Screen name="Screen4" component={Screen4} />
    </Stack.Navigator>
  );
}

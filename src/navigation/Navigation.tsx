
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from '@utils/NavigationUtils';

const Stack = createStackNavigator();

const Navigation:FC = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
      initialRouteName='SplashScreen'
      screenOptions={{
        headerShown:false
      }}
      >
        <Stack.Screen
        options={{
          animation:'fade'
        }} 
         name="CustomerLogin" component={CustomerLogin} />
        <Stack.Screen 
        options={{
          animation:'fade'
        }} 
        name="SellerLogin" component={SellerLogin} />
        <Stack.Screen 
        options={{
          animation:'fade'
        }} 
        name="DeliveryLogin" component={DeliveryLogin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

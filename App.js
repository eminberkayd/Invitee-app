import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
// Screen Imports
import HomeScreen from './app/screens/HomeScreen';
import EventPageScreen from './app/screens/EventPageScreen';

import { IconComponentProvider, Icon } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function App() {
  return (
    <NavigationContainer>
      <IconComponentProvider IconComponent={MaterialCommunityIcons}>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'Events' }}
          />
          <Stack.Screen
            name="Eventpage"
            component={EventPageScreen} />
        </Stack.Navigator>
      </IconComponentProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});

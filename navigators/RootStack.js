import React from 'react';

// React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Welcome from '../screens/Welcome';
import GenerateQR from '../screens/GenerateQR';
import ScanQR from '../screens/ScanQR';

// colors
const { primary, secondary, tertiary, brand, darkLight, dark, light, white } = Colors;
import { Colors } from 'react-native/Libraries/NewAppScreen';



const Stack = createStackNavigator();

const RootStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Login"
                screenOptions={{
                    headerStyle: {
                        backgroundColor: 'transparent',
                    },
                    headerTintColor: tertiary,
                    headerTransparent: true,
                    headerTitle: '',
                    headerLeftContainerStyle: {
                        paddingLeft: 20
                    }
                }}
            >
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Signup" component={Signup} />
                <Stack.Screen name="Welcome" component={Welcome} />
                <Stack.Screen name="GenerateQR" component={GenerateQR} />
                <Stack.Screen name="ScanQR" component={ScanQR} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RootStack;
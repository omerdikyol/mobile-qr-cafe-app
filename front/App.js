import React from 'react';

// screens
import Login from './screens/Login';
import Signup from './screens/Signup';
import Welcome from './screens/Welcome';
import GenerateQR from './screens/GenerateQR';
import ScanQR from './screens/ScanQR';

// React Navigation Stack
import RootStack from './navigators/RootStack';


export default function App() {
  return (
    <RootStack />
  );
}
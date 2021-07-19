import React, { useState } from 'react';
import type { Node } from 'react';
import { Alert, TextInput, TouchableOpacity, StyleSheet, ImageBackground, View, ScrollView } from 'react-native';
import Login from './android/app/src/Component/Login';
import Home from './android/app/src/Component/Home';
import Routes from './android/app/src/Navigation/Routes';



const App: () => Node = () => {
  return (
    <Routes />
  )
};

export default App;

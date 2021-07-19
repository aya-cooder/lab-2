import React from 'react';
import { NavigationAction, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Component/Login/index';
import Home from '../Component/Home/index';
import {
    Text,
    View,
} from 'react-native';
const Stack = createStackNavigator();
export default function Routes() {
    return (
        <NavigationContainer initialRoutName={'Login'} >
            <Stack.Navigator>
                <Stack.Screen name='Login' component={Login} options={{ headerTitle: 'Log in ' }} />
                <Stack.Screen name='Home' component={Home} />
            </Stack.Navigator>

        </NavigationContainer>
    );
}
;
// import React from 'react';
// import { NavigationAction, NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import Login from '../Component/Login';
// import Home from '../Component/Home';


// const Stack = createStackNavigator();

// const Routes = () => {
//     return (
//         <NavigationContainer initialRoutName={'Login'} >
//             <Stack.Navigator>
//                 <Stack.Screen
//                     name='Login'
//                     component={Login}
//                 />
//                 <Stack.Screen name='Home' component={Home} />
//             </Stack.Navigator>

//         </NavigationContainer>

//     );
// };

// export default Routes();
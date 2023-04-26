import { createNativeStackNavigator  } from '@react-navigation/native-stack';

import Welcome from '../pages/Welcome';
import LogIn from '../pages/LogIn';
import SignUp from '../pages/SignUp';
import Inicial from '../pages/Inicial';

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{headerShown: false}}
            />

            <Stack.Screen
                name="LogIn"
                component={LogIn}
                options={{headerShown: false}}
            />
            
            <Stack.Screen
                name="SignUp"
                component={SignUp}
                options={{headerShown: false}}
            />

            <Stack.Screen
                name="Inicial"
                component={Inicial}
                options={{headerShown: false}}
             />
            
        </Stack.Navigator>
    )
}
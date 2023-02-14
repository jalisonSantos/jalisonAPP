import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BlueScreen } from "../screens/BlueScreen";
import { HomeScreen } from "../screens/homeScreen";
import { SobreScreen } from "../screens/SobreScreen";
import { YellowScreen } from "../screens/YellowScreen";

const Stack = createNativeStackNavigator()

export const RootNavigation = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen name={'Home'} component={HomeScreen} />
            <Stack.Screen name={'Sobre'} component={SobreScreen} />
            <Stack.Screen name={'Blue'} component={BlueScreen} />
            <Stack.Screen name={'Yellow'} component={YellowScreen} />
        </Stack.Navigator>
    );
};
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FormularioScreen } from "../screens/FormularioScreen";
import { HomeScreen } from "../screens/homeScreen";

const Stack = createNativeStackNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();

export const RootNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={"Home"} component={HomeScreen} />
      <Stack.Screen name={"Formulario"} component={FormularioScreen} />
    </Stack.Navigator>
  );
};

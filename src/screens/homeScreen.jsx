import { Button, Text, View } from "react-native"

export const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Home page</Text>
            <Button title='Ir para Sobre'
                onPress={() => navigation.navigate("Sobre")} />

<Text>Home page</Text>
            <Button title='Ir para Blue'
                onPress={() => navigation.navigate("Blue")} />

<Text>Home page</Text>
            <Button title='Ir para Yellow'
                onPress={() => navigation.navigate("yellow")} />

        </View>
    );
    
};
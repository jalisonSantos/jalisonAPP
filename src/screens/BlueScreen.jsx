import { Button, Text, View } from "react-native"

export const BlueScreen =({navigation}) =>{
    return(
        <View>
            <Text>Blue</Text>
            <Button title = "volte" onPress={() =>navigation.navigate("Home")}
            ></Button>
        </View>
    )
}
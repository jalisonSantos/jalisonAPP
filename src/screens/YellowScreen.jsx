import { Button, Text, View } from "react-native"

export const YellowScreen =({navigation}) =>{
    return(
        <View>
            <Text>Yellow</Text>
            <Button title = "volte" onPress={() =>navigation.navigate("Home")}
            ></Button>
        </View>
    )
}
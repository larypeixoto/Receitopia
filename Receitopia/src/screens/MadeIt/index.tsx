import { View, Text, ActivityIndicator, FlatList } from "react-native";
import { Background } from "../../components/Background";
import { Title } from "../../components/Texts/Title"
import { styles } from "./styles";
import { useEffect, useState } from "react";

export const MadeIt = () => { 
    const [loading, setLoading] = useState<boolean>(true);


    return (
        <Background>
            <View style={styles.container}>
                <Title title={"Já fiz!"}/>
            </View>
            
        </Background>
    )
}

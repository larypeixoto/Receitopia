import { styles } from "./styles";

import { Text, View } from "react-native";

interface TextCardProps {
    nome: string;
    email: string;
}

export const TextCard = ({ email, nome }: TextCardProps) => {

    return(
        <View>
            <Text>{nome}</Text>
            <Text>{email}</Text>
        </View>
    )
}
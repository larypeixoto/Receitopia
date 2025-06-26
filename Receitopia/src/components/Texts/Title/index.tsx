import { Text } from "react-native";
import { styles } from "./styles";

interface TitleProps {
    title?: string;
}

export const Title = ({title}: TitleProps) => {
    return(
        <>
        <Text style={styles.titleFont}>
            {title}
        </Text>
        </>
    )
}
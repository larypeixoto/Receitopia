import { Text, View } from "react-native";
import { styles } from "./styles";

interface TextCardProps {
  nome: string;
  email: string;
}

export const TextCard = ({ email, nome }: TextCardProps) => {
  return (
    <View>
      <Text style={styles.textCard}>{nome}</Text>
      <Text style={styles.textCard}>{email}</Text>
    </View>
  );
};

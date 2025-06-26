import { Text } from "react-native";
import { styles } from "./styles";

interface TextProps {
  text?: string;
}

export const Subtitle = ({text}: TextProps) => {
  return (
    <>
      <Text style={styles.text}>
        {text}
      </Text>
    </>
  );
};

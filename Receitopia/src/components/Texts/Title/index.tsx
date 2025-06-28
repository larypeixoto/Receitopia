import { Text } from "react-native";
import { styles } from "./styles";
import { useFonts, Tangerine_700Bold } from "@expo-google-fonts/tangerine";

interface TitleProps {
  title?: string;
}

export const Title = ({ title }: TitleProps) => {
  const [fontsLoaded] = useFonts({
    Tangerine_700Bold,
  });

  if (!fontsLoaded) return null;

  return (
    <>
      <Text style={styles.titleFont}>{title}</Text>
    </>
  );
};

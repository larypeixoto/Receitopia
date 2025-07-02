import { StyleScript_400Regular, useFonts } from "@expo-google-fonts/style-script";
import { Text } from "react-native";
import { styles } from "./styles";

interface TitleProps {
  title?: string;
}

export const Title = ({ title }: TitleProps) => {
  const [fontsLoaded] = useFonts({
    StyleScript_400Regular,
  });

  if (!fontsLoaded) return null;

  return (
    <>
      <Text style={styles.titleFont}>{title}</Text>
    </>
  );
};

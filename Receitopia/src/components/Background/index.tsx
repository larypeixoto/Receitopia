import { SafeAreaView } from "react-native-safe-area-context"; 
import { ReactNode } from "react";
import { View } from "react-native";
import { styles } from "./styles";

interface BackgroundProps {
  children: ReactNode;
}

export const Background = ({ children }: BackgroundProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.background}>
        {children}
      </View>
    </SafeAreaView>
  );
};
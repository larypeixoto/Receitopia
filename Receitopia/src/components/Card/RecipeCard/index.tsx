import { Roboto_400Regular, useFonts } from "@expo-google-fonts/roboto";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { recipeProps } from "../../../services/recipesApi";
import { styles } from "./styles";

interface RecipeCpmProps extends recipeProps {
  setIsItemDetailsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedItemId: React.Dispatch<React.SetStateAction<string>>;
}

export const RecipeCard = ({
  receita,
  id,
  tipo,
  setIsItemDetailsModalOpen,
  setSelectedItemId,
}: RecipeCpmProps) => {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
  });

  if (!fontsLoaded) return null;

  function defineSelectedId() {
    setSelectedItemId(id);
    setIsItemDetailsModalOpen(true);
  }

  return (
    <TouchableOpacity onPress={defineSelectedId} style={styles.buttonRecipe}>
      <Text style={styles.recipeName}>{receita}</Text>
      <Text style={styles.recipeType}>{tipo}</Text>
    </TouchableOpacity>
  );
};

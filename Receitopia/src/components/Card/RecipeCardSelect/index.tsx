import React from "react";
import { TouchableOpacity, Text, Image, View } from "react-native";
import { recipeProps } from "../../../services/recipesApi";
import { styles } from "./styles";

export interface recipeCardProps {
    receita: string;
    id: string;
    tipo: string;
}

export const RecipeCardSelect = ({ receita, id, tipo  }: recipeCardProps) => {


  return (

    <TouchableOpacity onPress={() => {}} style={styles.buttonRecipe}>
      <Text style={styles.recipeName}>{receita}</Text>
      <Text style={styles.recipeType}>{tipo}</Text>
    </TouchableOpacity>
  );
};

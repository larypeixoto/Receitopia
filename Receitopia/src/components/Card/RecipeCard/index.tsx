import React from "react";
import { TouchableOpacity, Text, Image, View } from "react-native";
import { recipeProps } from "../../../services/recipesApi";
import { styles } from "./styles";

export const RecipeCard = ({ receita, id, tipo, link_imagem }: recipeProps) => {
  return (
    <TouchableOpacity style={styles.buttonRecipe}>
      <Text style={styles.recipeName}>{receita}</Text>
      <Text style={styles.recipeType}>{tipo}</Text>
    </TouchableOpacity>
  );
};

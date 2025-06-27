import React from "react";
import { TouchableOpacity, Text, Image, View } from "react-native";
import { recipeProps } from "../../../services/recipesApi";
import { styles } from "./styles";

export const RecipeCard = ({ receita, id, tipo, link_imagem }: recipeProps) => {
  return (
    <TouchableOpacity style={styles.buttonRecipe}>
      <View style={styles.left}>
        <Image source={{ uri: link_imagem }} style={styles.icon} />
      </View>
      <View style={styles.right}>
        <Text style={styles.recipeName}>{receita}</Text>
        <Text style={styles.recipeType}>{tipo}</Text>
      </View>
    </TouchableOpacity>
  );
};

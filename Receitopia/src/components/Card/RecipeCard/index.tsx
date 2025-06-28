import React from "react";
import { TouchableOpacity, Text, Image, View } from "react-native";
import { recipeProps } from "../../../services/recipesApi";
import { styles } from "./styles";

interface RecipeCpmProps extends recipeProps {
    setIsItemDetailsModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
    setSelectedItemId: React.Dispatch<React.SetStateAction<string>>
}

export const RecipeCard = ({ receita, id, tipo, link_imagem, setIsItemDetailsModalOpen, setSelectedItemId  }: RecipeCpmProps) => {

    function defineSelectedId () {
        setSelectedItemId(id);
        setIsItemDetailsModalOpen(true);
    }

  return (

    <TouchableOpacity onPress={defineSelectedId}style={styles.buttonRecipe}>
      <Text style={styles.recipeName}>{receita}</Text>
      <Text style={styles.recipeType}>{tipo}</Text>
    </TouchableOpacity>
  );
};

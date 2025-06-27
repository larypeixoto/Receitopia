import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { recipeProps } from "../../../services/recipesApi"
import { styles } from "./styles";


export const RecipeCard = ({ receita, id }: recipeProps) => {


    return (
        <TouchableOpacity style={styles.buttonRecipe}>
            <Text>
                { receita } 
            </Text>
        </TouchableOpacity>
    )
}
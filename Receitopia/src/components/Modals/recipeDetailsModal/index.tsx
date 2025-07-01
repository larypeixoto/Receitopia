import React, { useContext, useEffect, useState } from "react";
import { Modal, View, Text, ActivityIndicator, ScrollView, TouchableOpacity, Image, Pressable } from 'react-native';
import { styles } from "./styles";
import { getRecipesDetails, recipeProps } from "../../../services/recipesApi";
import AntDesign from '@expo/vector-icons/AntDesign';

interface RecipeDetailsModal {
  isRecipeDetailsModalOpen: boolean,
  setIsRecipeDetailsModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
  selectedRecipeId: string,
}

export const RecipeDetailsModal = ({ isRecipeDetailsModalOpen, setIsRecipeDetailsModalOpen, selectedRecipeId }: RecipeDetailsModal) => {
  const [recipeDetails, setRecipeDetails] = useState<recipeProps>({
    id: "",
    receita: "",
    tipo: '',
    link_imagem: "",
    ingredientes: "",
    modo_preparo: ""

  });
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getRecipesDetails(selectedRecipeId)
      .then(({ data }) => {
        setRecipeDetails(data)
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, []);


  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isRecipeDetailsModalOpen}
      onRequestClose={() => {
        setIsRecipeDetailsModalOpen(false);
      }}
    >
      <View style={styles.modal}>

        <View style={styles.modalContainer}>
          {isLoading ?
            <ActivityIndicator
              size={"large"}
            />
            :
            <>
                <TouchableOpacity style={styles.closeIcon} onPress={() => setIsRecipeDetailsModalOpen(false)}>
              <AntDesign name="closecircle" size={24} color="#D8E1CE" />
              </TouchableOpacity>
             

               <Image source={{ uri: recipeDetails.link_imagem }} style={styles.icon} />
                <Text style={styles.recipeName}>{recipeDetails.receita}</Text>
                 <Text style={styles.recipeType}>{recipeDetails.tipo}</Text>

              <ScrollView >
                <View style={styles.subTitleView}>
                <Text style={styles.subTitle}>Ingredientes</Text>
                </View>
                <Text style={styles.text}>{recipeDetails.ingredientes}.</Text>

                <View style={styles.subTitleView}>
                <Text style={styles.subTitle}>Preparo</Text>
                </View>
                <Text style={styles.text}>{recipeDetails.modo_preparo}</Text>
              </ScrollView>

              <View style={styles.buttonView}>
                <TouchableOpacity style={styles.button}>
                  <Text>Quero Fazer</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                  <Text>Já fiz</Text>
                </TouchableOpacity>
              
              </View>
            </>
          }
        </View>
      </View>
    </Modal>
  );
}
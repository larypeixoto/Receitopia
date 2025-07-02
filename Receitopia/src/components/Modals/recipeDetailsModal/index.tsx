import React, { useContext, useEffect, useState } from "react";
import { Modal, View, Text, ActivityIndicator, ScrollView, TouchableOpacity, Image, Pressable, Alert } from 'react-native';
import { styles } from "./styles";
import { getRecipesDetails, recipeProps } from "../../../services/recipesApi";
import AntDesign from '@expo/vector-icons/AntDesign';
import addQueroFazer from "../../../services/mock/queroFazer"
import addJaFiz from "../../../services/mock/jaFiz"
import { apiMock } from "../../../services/mock/api";
import async from "../../../services/async/storage"
import  { RecipeDetail }  from "../../../screens/Receita"
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
//import { ExportedRootParamList} from '../../../routes/routes'

interface RecipeDetailsModal {
  isRecipeDetailsModalOpen: boolean,
  setIsRecipeDetailsModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
  selectedRecipeId: string,
}



export const RecipeDetailsModal = ({ isRecipeDetailsModalOpen, setIsRecipeDetailsModalOpen, selectedRecipeId }: RecipeDetailsModal) => {
  let [idIdCliente, setIdCliente] = useState("");
  const [idIdReceita, setIdReceita] = useState("");
  const { navigate } = useNavigation();
  const [recipeDetails, setRecipeDetails] = useState<recipeProps>({
    id: "",
    receita: "",
    tipo: "",
    link_imagem: "",
    ingredientes: "",
    modo_preparo: ""

  });
  const [isLoading, setIsLoading] = useState<boolean>(true);
 // const navigation = useNavigation<NativeStackNavigationProp<ExportedRootParamList>>();

  const handleReceita = () => {
    setIsRecipeDetailsModalOpen(false); // fecha o modal
    navigate('RecipeDetail', { id: selectedRecipeId });
  };




  useEffect(() => {
    getRecipesDetails(selectedRecipeId)
      .then(({ data }) => {
        console.log(selectedRecipeId)
        setRecipeDetails(data)
        setIdReceita(data.id)
        async.saveIdReceita(idIdReceita)
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
                <TouchableOpacity 
                    style={styles.button}
                    onPress={handleReceita}
                >
                  <Text>Fazer agora</Text>
                </TouchableOpacity>
              
              </View>
            </>
          }
        </View>
      </View>
    </Modal>
  );
}
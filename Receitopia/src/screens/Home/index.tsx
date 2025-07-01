import {
  View,
  Text,
  Image,
  ScrollView,
  ActivityIndicator,
  FlatList,
} from "react-native";

import { useEffect, useState } from "react";
import { getRecipes, recipeProps } from "../../services/recipesApi";
import { Background } from "../../components/Background";
import { RecipeCard } from "../../components/Card/RecipeCard";
import { Title } from "../../components/Texts/Title";
import { Separator } from "../../components/Separator";
import { NavigationContainer } from "@react-navigation/native";
import { BottomTabs } from "../../routes/BottomTabs";
import { styles } from "./styles";
import { RecipeDetailsModal } from "../../components/Modals/recipeDetailsModal";


export const HomePage = () => {
  const [recipeList, setRecipeList] = useState<recipeProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [isRecipeDetailsModalOpen, setIsRecipeDetailsModalOpen] = useState<boolean>(false);
  const [selectedRecipeId, setSelectedRecipeId] = useState<string>('');

  useEffect(() => {
    getRecipes()
      .then(({ data }) => {
        setRecipeList(data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <Background>
        <View style={styles.header}>
          <Title title={"Receitopia"} />
        </View>

        {loading ? (
          <ActivityIndicator size={"large"} />
        ) : (
         <FlatList
              data={recipeList}
              renderItem={({ item }) => {
                return <RecipeCard receita={item.receita}
                id={item.id}
                tipo={item.tipo}
                setIsItemDetailsModalOpen={setIsRecipeDetailsModalOpen}     
                setSelectedItemId={setSelectedRecipeId}
                />;
            }}
          />
        )}
       {isRecipeDetailsModalOpen && <RecipeDetailsModal
            selectedRecipeId={selectedRecipeId}
            isRecipeDetailsModalOpen={isRecipeDetailsModalOpen}
            setIsRecipeDetailsModalOpen={setIsRecipeDetailsModalOpen}
        />}
      </Background>
    </>
  );
};
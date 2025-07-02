import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
import { Background } from "../../components/Background";
import { RecipeCard } from "../../components/Card/RecipeCard";
import { RecipeDetailsModal } from "../../components/Modals/recipeDetailsModal";
import { getRecipes, recipeProps } from "../../services/recipesApi";
import { styles } from "./styles";

interface RecipeDetailsModal {
  isRecipeDetailsModalOpen: boolean;
  setIsRecipeDetailsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedRecipeId: string;
}

export const HomePage = () => {
  const [recipeList, setRecipeList] = useState<recipeProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [isRecipeDetailsModalOpen, setIsRecipeDetailsModalOpen] =
    useState<boolean>(false);
  const [selectedRecipeId, setSelectedRecipeId] = useState<string>("");

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
        <View style={styles.header}></View>

        {loading ? (
          <ActivityIndicator size={"large"} />
        ) : (
          <FlatList
            data={recipeList}
            renderItem={({ item }) => {
              return (
                <RecipeCard
                  receita={item.receita}
                  id={item.id}
                  tipo={item.tipo}
                  link_imagem={item.link_imagem}
                  setIsItemDetailsModalOpen={setIsRecipeDetailsModalOpen}
                  setSelectedItemId={setSelectedRecipeId}
                />
              );
            }}
          />
        )}
        {isRecipeDetailsModalOpen && (
          <RecipeDetailsModal
            selectedRecipeId={selectedRecipeId}
            isRecipeDetailsModalOpen={isRecipeDetailsModalOpen}
            setIsRecipeDetailsModalOpen={setIsRecipeDetailsModalOpen}
          />
        )}
      </Background>
    </>
  );
};

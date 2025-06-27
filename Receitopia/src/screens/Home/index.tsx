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
import { Separator } from "../../components/Separator"
import { NavigationContainer } from "@react-navigation/native";
import { BottomTabs } from "../../routes/BottomTabs";
import { styles } from "./styles"


export const HomePage = () => {
  const [recipeList, setRecipeList] = useState<recipeProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

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
        <ScrollView>

          <View style={styles.header}>
              <Title title={"Receitopia"}/>
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
                link_imagem={item.link_imagem} />;
              }}
              ItemSeparatorComponent={Separator}
            />
          )}
        </ScrollView>
        
      </Background>
      <BottomTabs/>
    </>
  );
};

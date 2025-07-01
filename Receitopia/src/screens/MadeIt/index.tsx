import { View, Text, ActivityIndicator, FlatList } from "react-native";
import { Background } from "../../components/Background";
import { Title } from "../../components/Texts/Title";
import { styles } from "./styles";
import { useEffect, useState } from "react";
import { RecipeCardSelect } from "../../components/Card/RecipeCardSelect";
import { recipeCardProps } from "../../components/Card/RecipeCardSelect";

export const MadeIt = () => {
  // const [loading, setLoading] = useState<boolean>(true);

  const madeItList = [
    { receita: "Bolo de Cenoura", id: "1", tipo: "Doce" },
    { receita: "Salada de Frutas", id: "2", tipo: "Salada" },
    { receita: "Pão de Queijo", id: "3", tipo: "Salgado" },
    { receita: "Mousse de Maracujá", id: "4", tipo: "Doce" },
  ];

  return (
    <Background>
      <View style={styles.container}>
        <Title title={"Já fiz!"} />
      </View>

      <FlatList
        data={madeItList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <RecipeCardSelect
              receita={item.receita}
              id={item.id}
              tipo={item.tipo}
            />
          );
        }}
      />
    </Background>
  );
};

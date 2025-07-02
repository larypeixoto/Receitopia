import { Ionicons } from "@expo/vector-icons";
import { RouteProp, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Background } from "../../components/Background";
import { ExportedRootParamList } from "../../routes/StackNavigation";
import { getRecipesDetails } from "../../services/recipesApi";
import { styles } from "./styles";

type RecipeDetailRouteProp = RouteProp<ExportedRootParamList, "RecipeDetail">;

export const RecipeDetail = () => {
  const route = useRoute<RecipeDetailRouteProp>();
  const { id } = route.params;

  const [ingredientes, setIngredientes] = useState<
    { id: number; nome: string; checked: boolean }[]
  >([]);
  const [receita, setReceita] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [categoria, setCategoria] = useState("");
  const [imagem, setImagem] = useState("");
  const [nomeRec, setNomeRec] = useState("");

  useEffect(() => {
    async function fetchRecipe() {
      try {
        const response = await getRecipesDetails(id);
        const data = response.data;

        const ingredientesFormatados =
          data.IngredientesBase?.[0]?.nomesIngrediente?.map((nome, index) => ({
            id: index + 1,
            nome,
            checked: false,
          })) || [];

        setIngredientes(ingredientesFormatados);

        if (data.receita) setNomeRec(data.receita);
        if (data.modo_preparo) setReceita(data.modo_preparo);
        if (data.ingredientes) setQuantidade(data.ingredientes);
        if (data.tipo) setCategoria(data.tipo);
        if (data.link_imagem) setImagem(data.link_imagem);
      } catch (error) {
        console.error("Erro ao buscar detalhes da receita:", error);
      }
    }

    fetchRecipe();
  }, [id]);

  const toggleIngrediente = (id: number) => {
    setIngredientes((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  return (
    <Background>
      <View style={styles.header}>
        <Image style={styles.recipeImage} source={{ uri: imagem }} />
        <View style={styles.recipeInfo}>
          <Text style={styles.recipeTitulo}>{nomeRec}</Text>
          <Text style={styles.recipeSubtitle}>{categoria}</Text>
        </View>
      </View>

      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Ingredientes</Text>
          {ingredientes.map((ingrediente) => (
            <TouchableOpacity
              key={ingrediente.id}
              style={styles.ingredienteItem}
              onPress={() => toggleIngrediente(ingrediente.id)}
            >
              <View
                style={[
                  styles.checkbox,
                  ingrediente.checked && styles.checkboxChecked,
                ]}
              >
                {ingrediente.checked && (
                  <Ionicons name="checkmark" size={16} color="#fff" />
                )}
              </View>
              <Text
                style={[
                  styles.ingredienteText,
                  ingrediente.checked && styles.ingredienteTextChecked,
                ]}
              >
                {ingrediente.nome}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quantidade</Text>
          <View style={styles.receitaInput}>
            <ScrollView
              contentContainerStyle={{ flexGrow: 1 }}
              nestedScrollEnabled={true}
            >
              <Text style={styles.text}>{quantidade}</Text>
            </ScrollView>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Preparo</Text>
          <View style={styles.receitaInput}>
            <ScrollView
              contentContainerStyle={{ flexGrow: 1 }}
              nestedScrollEnabled={true}
            > 
              <Text style={styles.text}>{receita}</Text>
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </Background>
  );
};

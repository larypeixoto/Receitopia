import React from "react";
import axios, { AxiosResponse } from "axios";
import { useState, useEffect } from "react";
import {
  Alert,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { Background } from "../../components/Background";
import { Title } from "../../components/Texts/Title";
import { SearchInput } from "../../components/Input/SearchInput";
import { SearchIcon } from "../../components/SearchIcon";
import { RecipeCard } from "../../components/Card/RecipeCard";
import { recipeProps } from "../../services/recipesApi";

export const Search = () => {
  const [search, setSearch] = useState("");
  const [searchRecipeList, setSearchRecipeList] = useState<recipeProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const searchRecipes = async () => {
    if (!search.trim()) return;

    const searchCase = search.trim().toLowerCase();
    let tipo = searchCase;

    if (["peixe", "carne", "sal", "frango"].includes(searchCase)) {
      tipo = "salgado";
    } else if (
      ["açúcar", "bolo", "panqueca", "chocolate"].includes(searchCase)
    ) {
      tipo = "doce";
    } else if (["ketchup", "vinagre"].includes(searchCase)) {
      tipo = "agridoce";
    }

    setLoading(true);
    try {
      const response = await axios.get(
        `https://api-receitas-pi.vercel.app/receitas/tipo/${tipo}`
      );
      setSearchRecipeList(response.data);
    } catch (error) {
      console.error("Desculpe, houve algum erro na busca", error);
      Alert.alert("Erro", "Houve algum erro na busca");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Background>
      <View style={styles.container}>
        <View style={styles.avatarArea}>
          <Title title={"Receitopia"} />
          <ImageBackground
            source={{
              uri: "https://i.pinimg.com/736x/9b/01/b9/9b01b9b9967797f3a92c285b99745422.jpg",
            }}
            style={styles.avatarCircle}
          />
          <Ionicons name="star" size={18} color="#4e5c35" />
          <Text style={styles.pesquisa}>
            O que está com vontade de cozinhar hoje?
          </Text>
        </View>
        <View style={styles.containerSearch}>
          <SearchInput
            placeholder="Escolha um tipo de receita"
            placeholderTextColor="#d8e1ce"
            value={search}
            onChangeText={setSearch}
          />
          <SearchIcon onPress={searchRecipes} size={26} color="#829460" />
        </View>

        {loading ? (
          <ActivityIndicator size={"large"} />
        ) : (
          <FlatList
            data={searchRecipeList}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => {
              return (
                <RecipeCard
                  receita={item.receita}
                  id={item.id}
                  tipo={item.tipo}
                />
              );
            }}
          />
        )}
        <View></View>
      </View>
    </Background>
  );
};

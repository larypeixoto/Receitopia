import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, TextInput, FlatList, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";


import { Background } from "../../components/Background";
import { getRecipesDetails } from "../../services/recipesApi";
import { ExportedRootParamList} from "../../routes/StackNavigation"
import { RouteProp, useRoute } from "@react-navigation/native";

type RecipeDetailRouteProp = RouteProp<ExportedRootParamList, 'RecipeDetail'>;

export const RecipeDetail = () => {

    

    const route = useRoute<RecipeDetailRouteProp>();
    const { id } = route.params;

   

    // const id = "1"; //temporario 

    const [jaFiz, setJaFiz] = useState(false);

    // const [ingredientes, setIngredientes] = useState([
    //     { id: 1, nome: "Ingrediente 1 - Quantidade", checked: false },
    //     { id: 2, nome: "Ingrediente 2 - Quantidade", checked: false },
    //     { id: 3, nome: "Ingrediente 3 - Quantidade", checked: false },
    // ]);
    const [ingredientes, setIngredientes] = useState<{ id: number; nome: string; checked: boolean }[]>([]);
    const [receita, setReceita] = useState("");
    const [quantidade, setQuantidade] = useState("");
    const [categoria, setCategoria] = useState("");
    const [imagem, setImagem] = useState("")

    useEffect(() => {
        async function fetchRecipe() {
            try {
                const response = await getRecipesDetails(id);
                const data = response.data;

                const ingredientesFormatados = data.IngredientesBase?.[0]?.nomesIngrediente?.map((nome, index) => ({
                    id: index + 1,
                    nome,
                    checked: false
                })) || [];

                setIngredientes(ingredientesFormatados);

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
        setIngredientes(prev =>
            prev.map(item =>
                item.id === id ? { ...item, checked: !item.checked } : item
            )
        );
    };

    return (
        <Background>
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <View style={styles.recipeImageContainer}>
                        {/* <View style={styles.recipeImage} /> */}
                        <Image style={styles.recipeImage} source={{uri: imagem}}/>
                    </View>

                    <View style={styles.recipeInfo}>
                        <Text style={styles.recipeTitulo}>Receita</Text>
                        <Text style={styles.recipeSubtitle}>{categoria}</Text>
                    </View>
                </View>

                {/* já fiz - quero fazer */}
                <TouchableOpacity
                    style={[styles.actionButton, jaFiz && styles.actionButtonActive]}
                    onPress={() => setJaFiz(!jaFiz)}
                >
                    <Text style={[styles.actionButtonText, jaFiz && styles.actionButtonTextActive]}>
                        {jaFiz ? "Já fiz" : "Quero fazer"}
                    </Text>
                </TouchableOpacity>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Ingredientes</Text>



                    {ingredientes.map((ingrediente) => (
                        <TouchableOpacity
                            key={ingrediente.id}
                            style={styles.ingredienteItem}
                            onPress={() => toggleIngrediente(ingrediente.id)}
                        >

                            <View style={[styles.checkbox, ingrediente.checked && styles.checkboxChecked]}>
                                {ingrediente.checked && (
                                    <Ionicons name="checkmark" size={16} color="#fff" />
                                )}
                            </View>
                            <Text style={[styles.ingredienteText, ingrediente.checked && styles.ingredienteTextChecked]}>
                                {ingrediente.nome}
                            </Text>
                        </TouchableOpacity>



                    ))}

                </View>

                {/* Receita */}

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Quantidade</Text>
                    <View style={styles.receitaInput}>
                        <Text style={styles.text}>
                            {quantidade}
                        </Text>
                    </View>

                </View>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Preparo</Text>
                    <View style={styles.receitaInput}>
                        <Text style={styles.text}>
                            {receita}
                        </Text>
                    </View>

                </View>
            </ScrollView>

            {/* Bottom Navigation */}

            {/* <View style={styles.bottomNav}>
                    <TouchableOpacity style={styles.navItem}>
                        <Ionicons name="search" size={24} color="#7D8F69" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.navItem}>
                        <Ionicons name="home" size={24} color="#7D8F69" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.navItem}>
                        <Ionicons name="person" size={24} color="#7D8F69" />
                    </TouchableOpacity>
                </View> */}
        </Background>
    );
};
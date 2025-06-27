import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";

import { Background } from "../../components/Background";

export const RecipeDetail = () => {
    
    const [jaFiz, setJaFiz] = useState(false);

    const [ingredientes, setIngredientes] = useState([
        { id: 1, nome: "Ingrediente 1 - Quantidade", checked: false },
        { id: 2, nome: "Ingrediente 2 - Quantidade", checked: false },
        { id: 3, nome: "Ingrediente 3 - Quantidade", checked: false },
    ]);
    const [receita, setReceita] = useState("");

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
                        <View style={styles.recipeImage} />
                    </View>

                    <View style={styles.recipeInfo}>
                        <Text style={styles.recipeTitulo}>Receita</Text>
                        <Text style={styles.recipeSubtitle}>País • Categoria • 5 ⭐</Text>
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

                /* Receita */
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Receita</Text>
                    <TextInput
                        style={styles.receitaInput}
                        placeholder="Digite o modo de preparo da receita..."
                        placeholderTextColor="#8B9A8B"
                        multiline
                        numberOfLines={8}
                        textAlignVertical="top"
                        value={receita}
                        onChangeText={setReceita}
                    />
                </View>

                {/* Bottom Navigation */}
                <View style={styles.bottomNav}>
                    <TouchableOpacity style={styles.navItem}>
                        <Ionicons name="search" size={24} color="#7D8F69" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.navItem}>
                        <Ionicons name="home" size={24} color="#7D8F69" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.navItem}>
                        <Ionicons name="person" size={24} color="#7D8F69" />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </Background>
    );
};
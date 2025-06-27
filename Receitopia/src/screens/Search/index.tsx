import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { Background } from "../../components/Background"

export const Search = () => {
  return (
    <Background>
      <View style={styles.avatarArea}>
        <View style={styles.avatarCircle} />
        <Text style={styles.receitaTitle}>Receitopia</Text>
        <Text style={styles.pesquisa}>PESQUISAR</Text>
        <Ionicons name="star" size={18} color="#4e5c35" />
      </View>

      <View>
        <TouchableOpacity
          style={styles.menuPesquisa}
          onPress={() => console.log("Pesquisar Receitas")}
        >
          <Text style={styles.pesquisa}>Pesquisar Receitas</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

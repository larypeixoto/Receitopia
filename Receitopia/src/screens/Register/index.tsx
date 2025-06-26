import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";
import { View, TouchableOpacity } from "react-native";

import { Background } from "../../components/Background";
import { Title } from "../../components/Texts/Title";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { HideEye } from "../../components/HideEye";

export const Register = () => {
  const [senhaVisivel, setSenhaVisivel] = useState(false);
  const [senha, setSenha] = useState("");

  return (
    <Background>
      <View style={styles.container}>
        <Title title={"Cadastre-se!"} />

        <View style={styles.containersInputs}>
          <Input placeholder="Qual seu nome?" placeholderTextColor="#d8e1ce" />
          <Input
            placeholder="Qual seu e-mail?"
            placeholderTextColor="#d8e1ce"
          />
          <View style={styles.containerSenha}>
            <Input
              placeholder="Escolha uma senha!"
              placeholderTextColor="#d8e1ce"
              secureTextEntry={!senhaVisivel}
              value={senha}
              onChangeText={setSenha}
            />

            <HideEye
              visible={senhaVisivel}
              onPress={() => setSenhaVisivel(!senhaVisivel)}
              size={24}
              color="#d8e1ce"
            />
          </View>
          <Input
            placeholder="Escolha uma senha!"
            placeholderTextColor="#d8e1ce"
            secureTextEntry={!senhaVisivel}
            value={senha}
            onChangeText={setSenha}
          />
        </View>

        <Button
          title={"Criar cadastro!"}
          style={{
            width: 200,
            backgroundColor: "#7D8F69",
            paddingVertical: 12,
            paddingHorizontal: 30,
            borderRadius: 20,
            marginHorizontal: 5,
            alignItems: "center",
          }}
        />
      </View>
    </Background>
  );
};

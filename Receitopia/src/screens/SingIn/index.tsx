import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";
import { View, TouchableOpacity } from "react-native";

import { Background } from "../../components/Background";
import { Title } from "../../components/Title";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { HideEye } from "../../components/HideEye";

export const SingIn = () => {
  const [senhaVisivel, setSenhaVisivel] = useState(false);
  const [senha, setSenha] = useState("");

  return (
    <Background>
      <View style={styles.container}>
        <Title title={"Olá!"} />

        <View style={styles.containersInputs}>
          <Input
            placeholder="Insira seu e-mail"
            placeholderTextColor="#d8e1ce"
          />
          <View style={styles.containerSenha}>
            <Input
              placeholder="Digite sua senha!"
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
        </View>

        <View style={styles.containerButton}>
          <Button
            title={"Entrar!"}
            style={{
              width: 180,
              backgroundColor: "#7D8F69",
              paddingVertical: 12,
              paddingHorizontal: 30,
              borderRadius: 20,
              marginHorizontal: 5,
              alignItems: "center",
            }}
          />
          <Button
            title={"Cadastre-se!"}
            style={{
              width: 180,
              backgroundColor: "#7D8F69",
              paddingVertical: 12,
              paddingHorizontal: 30,
              borderRadius: 20,
              marginHorizontal: 5,
              alignItems: "center",
            }}
          />
        </View>
      </View>
    </Background>
  );
};

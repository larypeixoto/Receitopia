import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";
import { View, TouchableOpacity, Alert } from "react-native";

import { Background } from "../../components/Background";
import { Title } from "../../components/Texts/Title";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { HideEye } from "../../components/HideEye";
import { apiMock } from "../../services/api";
import { useNavigation } from "@react-navigation/native";
import { Register } from "../Register";
import { HomePage } from "../Home";

export const SingIn = () => {
  const [senhaVisivel, setSenhaVisivel] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const { navigate } = useNavigation<any>();

  const handleLogin = () =>{
    apiMock
      .get(`/usuarios?email=${email}`)
      .then(({data}) =>{
        if(data.length > 0){
          const usuarioEncontrado = data[0];
          if(usuarioEncontrado.email === email && usuarioEncontrado.senha === senha){
            navigate('HomePage');
            setEmail("");
            setSenha("");
          }
        } 
      })
      .catch((erro)=>{
        Alert.alert("Usuario não encontrado");
      })
  }


 const handleCadastrar = () =>{
    navigate('Register');

  }


  return (
    <Background>
      <View style={styles.container}>
        <Title title={"Olá!"} />

        <View style={styles.containersInputs}>
          <Input
            placeholder="Insira seu e-mail"
            placeholderTextColor="#d8e1ce"
            value={email}
            onChangeText={setEmail}
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
            onPress={handleLogin}
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
            onPress={handleCadastrar}
          />
        </View>
      </View>
    </Background>
  );
};

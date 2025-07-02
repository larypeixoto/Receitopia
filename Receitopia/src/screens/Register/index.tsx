import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Alert, View } from "react-native";
import { Background } from "../../components/Background";
import { Button } from "../../components/Button";
import { HideEye } from "../../components/HideEye";
import { Input } from "../../components/Input";
import { Title } from "../../components/Texts/Title";
import { apiMock } from "../../services/mock/api";
import { styles } from "./styles";

export const Register = () => {
  const [senhaVisivel, setSenhaVisivel] = useState(false);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confsenha, setConfsenha] = useState("");
  const { navigate } = useNavigation();

  const handleRegister = () => {
    if (!nome || !email || !senha || !confsenha) {
      Alert.alert("Preencha os campos");
      return;
    }

    if (senha !== confsenha) {
      Alert.alert("Senhas não coincidem");
      return;
    }

    const usuario = {
      name: nome,
      email: email,
      senha: senha,
      querofazer: [],
      jafiz: [],
    };

    apiMock
      .post("/usuarios", usuario)
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          navigate("SingIn");
          setNome("");
          setEmail("");
          setSenha("");
          setConfsenha("");
        }
      })
      .catch(() => {
        Alert.alert("Erro ao cadastrar");
      });
  };

  return (
    <Background>
      <View style={styles.container}>
        <Title title={"Cadastre-se!"} />

        <View style={styles.containersInputs}>
          <Input
            placeholder="Qual seu nome?"
            placeholderTextColor="#d8e1ce"
            value={nome}
            onChangeText={setNome}
          />
          <Input
            placeholder="Qual seu e-mail?"
            placeholderTextColor="#d8e1ce"
            value={email}
            onChangeText={setEmail}
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
            value={confsenha}
            onChangeText={setConfsenha}
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
          onPress={handleRegister}
        />
      </View>
    </Background>
  );
};

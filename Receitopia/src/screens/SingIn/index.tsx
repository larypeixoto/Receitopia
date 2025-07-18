import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View } from "react-native";
import { Background } from "../../components/Background";
import { Button } from "../../components/Button";
import { HideEye } from "../../components/HideEye";
import { Input } from "../../components/Input";
import { Title } from "../../components/Texts/Title";
import { useNotificacao } from "../../contexts/Notificação";
import async from "../../services/async/storage";
import { apiMock } from "../../services/mock/api";
import { styles } from "./styles";

export const SingIn = () => {
  const [senhaVisivel, setSenhaVisivel] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const { navigate } = useNavigation();
  const { notificar } = useNotificacao();

  const handleLogin = async () => {
    apiMock
      .get(`/usuarios?email=${email}`)
      .then(({ data }) => {
        if (data.length > 0) {
          const usuarioEncontrado = data[0];
          if (
            usuarioEncontrado.email === email &&
            usuarioEncontrado.senha === senha
          ) {
            navigate("AppDrawer");
            setEmail("");
            setSenha("");
            async.saveData(usuarioEncontrado.id);
            notificar({ tipo: "sucesso", mensagem: "Bem vindo!" });
          }
        }
      })
      .catch((erro) => {
        notificar({ tipo: "erro", mensagem: "usuario não encontrado." });
      });
  };

  const handleCadastrar = () => {
    navigate('Register');
  };

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

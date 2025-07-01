import { View, Text, Image, ScrollView, FlatList, Alert, ActivityIndicator} from "react-native";
import { styles } from "./styles";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { Background } from "../../components/Background";
import { Subtitle } from "../../components/Texts/Subtitle";
import { Button } from "../../components/Button";
import { TextCard } from "../../components/Card/TextCard";
import { apiMock } from "../../services/api";
import async from "../../services/async/storage"
import { useState, useEffect  } from "react";
import del from "../../services/usuarios"


export const Profile = () => {

  const [id, setId] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const { navigate } = useNavigation();
  const [loading, setLoading] = useState<boolean>(true);
    const registro = {
    email: email,
    nome: nome,
  };

  const carregarId = async () => {
      try{
      const idCarregada = await async.getUserId(); 
      return idCarregada;
      }
      finally{ 
        setLoading(false)
      };
    };


  useEffect(() => {
    const consultarUsuario = async () => {
      try {
        const id = await carregarId();
        const { data } = await apiMock.get(`/usuarios?id=${id}`);
        if (data.length > 0) {
          const usuarioEncontrado = data[0];
          setEmail(usuarioEncontrado.email)
          setNome(usuarioEncontrado.name)
          setId(usuarioEncontrado.id)
        }
      } catch (error) {
        Alert.alert("Erro ao buscar usuário");
      }
      
    };
    consultarUsuario();
  }, []);


  const handleLogout = async () => {
    await async.limparTudo();
    await async.removeData();
    navigate('SingIn');
  };

  const handleToDo = () => {
    navigate('ToDo')
  }

  const handleMadeIt = () => {
    navigate('MadeIt')
  }

  const handleDellUser = async () => {
    del.delUsuarios(id);
    await async.limparTudo();
    await async.removeData();
    navigate('SingIn');
    
  }


  return (
    <Background>
      <ScrollView
        contentContainerStyle={{ alignItems: "center", paddingTop: 80 }}
      >
        {loading ? (
          <ActivityIndicator size={"large"} />
        ) : (
        <View style={styles.container}>
          <FontAwesome name="user-circle-o" size={160} color="#829460" />
          <Subtitle text={`Olá, ${nome.split(" ")[0]}`} />
          <Subtitle text={"O que você quer cozinhar hoje?"} />

          <View style={styles.containerButton}>
            <Button
              title={"Já fiz!"}
              style={{
                width: 180,
                backgroundColor: "#7D8F69",
                paddingVertical: 12,
                paddingHorizontal: 30,
                borderRadius: 20,
                marginHorizontal: 5,
                alignItems: "center",
              }}
              onPress={handleMadeIt}
            />
            <Button
              title={"Quero fazer!"}
              style={{
                width: 180,
                backgroundColor: "#7D8F69",
                paddingVertical: 12,
                paddingHorizontal: 30,
                borderRadius: 20,
                marginHorizontal: 5,
                alignItems: "center",
              }}
              onPress={handleToDo}
            />
          </View>

          <FlatList
            data={[registro]}
            keyExtractor={(item) => item.nome}
            renderItem={({ item }) => (
              <TextCard nome={item.nome} email={item.email} />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
          />

          <View style={styles.containerButton}>
            <Button
              title={"Excluir cadastro"}
              style={{
                width: 180,
                backgroundColor: "#7D8F69",
                paddingVertical: 12,
                paddingHorizontal: 30,
                borderRadius: 20,
                marginHorizontal: 5,
                alignItems: "center",
              }}
              onPress={handleDellUser}
            />
            <Button
              title={"Sair"}
              style={{
                width: 180,
                backgroundColor: "#7D8F69",
                paddingVertical: 12,
                paddingHorizontal: 30,
                borderRadius: 20,
                marginHorizontal: 5,
                alignItems: "center",
              }}
              onPress={handleLogout}
            />
          </View>
        </View>
        )}
      </ScrollView>
    </Background>
  );
}

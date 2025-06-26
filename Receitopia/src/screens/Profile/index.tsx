import { View, Text, Image, ScrollView, FlatList } from "react-native";
import { styles } from "./styles";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import { Background } from "../../components/Background";
import { Subtitle } from "../../components/Texts/Subtitle";
import { Button } from "../../components/Button";
import { TextCard } from "../../components/Card/TextCard";

export const Profile = () => {
    
    const registro = {
        email: "olamundo@email.com",
        nome: "fulanildo de tal"
    }

  return (
    <Background>
      <View style={styles.container}>
        <FontAwesome name="user-circle-o" size={100} color="#829460" />
        <Subtitle text={"Olá, (nome)"} />
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
          />
        </View>

<FlatList
  data={[registro]}
  keyExtractor={(item) => item.nome}
  renderItem={({ item }) => (
    <TextCard
      nome={item.nome}
      email={item.email}
    />
  )}
  horizontal
  showsHorizontalScrollIndicator={false}
  contentContainerStyle={styles.list}
/>

      </View>
    </Background>
  );
};

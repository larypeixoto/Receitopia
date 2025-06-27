import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e9f0e5",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40,
  },

  avatarArea: {
    alignItems: "center",
    marginBottom: 20,
    padding: 20,
    backgroundColor: "#d0e0b0",
  },

  avatarCircle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#8d9c68",
    marginBottom: 20,
  },
  receitaTitle: {
    fontSize: 25,
    fontFamily: "serif",
    fontStyle: "italic",
    color: "#4e5c35",
    marginBottom: 10,
    textAlign: "center",
  },
  pesquisa: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4e5c35",
  },
  menuPesquisa: {
    backgroundColor: "#4e5c35",
    padding: 10,
    borderRadius: 5,
    marginBottom: 60,
    alignItems: "center",
  },

  textoReceita: {
    color: "#fff",
  },
  menuBottom: {
    backgroundColor: "#4e5c35",
    width: "100%",
    height: 50,
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

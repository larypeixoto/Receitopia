import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },

  avatarArea: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 0,
    padding: 20,
  },

  avatarCircle: {
    width: 90,
    height: 90,
    borderRadius: 200,
    overflow: "hidden",
    backgroundColor: "#8d9c68",
    marginBottom: 20,
  },

  pesquisa: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4e5c35",
    margin: 10,
  },

  containerSearch: {
    position: "relative",
    width: "100%",
    marginBottom: 20,
    alignItems: "center",
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

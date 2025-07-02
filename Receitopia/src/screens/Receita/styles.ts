import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 50,
    marginStart: 20,
    marginEnd: 20,
    gap: 10,
  },

  recipeImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#6B7B5A",
  },

  recipeInfo: {
    flex: 1,
  },

  recipeTitulo: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#4A5A3A",
    marginBottom: 4,
  },

  recipeSubtitle: {
    color: "#7D8F69",
    fontSize: 16,
    textTransform: "uppercase",
    letterSpacing: 0.8,
  },

  section: {
    marginBottom: 25,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4A5A3A",
    marginBottom: 10,
  },

  ingredienteItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#7D8F69",
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 15,
    marginBottom: 8,
    gap: 12,
  },

  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#D8E1CE",
    borderWidth: 2,
    borderColor: "#D8E1CE",
    justifyContent: "center",
    alignItems: "center",
  },

  checkboxChecked: {
    backgroundColor: "#4A5A3A",
    borderColor: "#4A5A3A",
  },

  ingredienteText: {
    flex: 1,
    fontSize: 14,
    color: "#fff",
    textTransform: "capitalize",
  },

  ingredienteTextChecked: {
    textDecorationLine: "line-through",
    opacity: 0.7,
  },

  receitaInput: {
    backgroundColor: "#7D8F69",
    borderRadius: 15,
    padding: 15,
    minHeight: 160,
    maxHeight: 160,
    textAlignVertical: "top",
  },

  text: {
    fontSize: 14,
    color: "#fff",
  },
});

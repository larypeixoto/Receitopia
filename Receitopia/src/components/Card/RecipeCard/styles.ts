import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  buttonRecipe: {
    backgroundColor: "#82946076",
    width: 396,
    height: 130,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    padding: 10,
    margin: 5,
    marginTop: 10,
  },

  recipeName: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 8,
    textShadowColor: "#829460",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
    fontFamily: "Roboto_400Regular",
  },

  recipeType: {
    fontSize: 16,
    alignSelf: "center",
    textTransform: "uppercase",
    fontFamily: "Roboto_400Regular",
    letterSpacing: 0.8,
  },
});

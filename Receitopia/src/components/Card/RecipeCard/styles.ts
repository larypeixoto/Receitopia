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
    padding: 15,
    margin: 5,
  },

  recipeName: {
    fontSize: 22,
    textAlign: "center",
    marginBottom: 8,
    textShadowColor: "#829460",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },

  recipeType: {
    fontSize: 16,
    alignSelf: "center",
    textTransform: "uppercase",
    letterSpacing: 0.8,
  },
});

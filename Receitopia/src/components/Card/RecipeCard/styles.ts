import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  buttonRecipe: {
    backgroundColor: "transparent",
    borderBottomColor: "#829460",
    padding: 15,
    flexDirection: "row",
    gap: 10,
  },

  icon: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },

  left: {
    alignItems: "center",
  },

  right: {
    width: 270,
    padding: 10,
    justifyContent: "center",
  },

  recipeName: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 8,
  },

  recipeType: {
    alignSelf: "center",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
});

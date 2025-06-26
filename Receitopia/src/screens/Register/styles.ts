import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  containersInputs: {
    marginTop: 20,
    marginBottom: 20,
    gap: 12,
  },

  containerSenha: {
    position: "relative",
    width: "100%",
    alignItems: "center",
  },

  icon: {
    position: "absolute",
    right: 10,
    marginTop: 22,
    transform: [{ translateY: -12 }],
    padding: 4,
  },
});

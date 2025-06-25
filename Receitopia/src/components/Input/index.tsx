import React from "react";
import { TextInput, TextInputProps } from "react-native";
import { styles } from "./styles";

export const Input = (props: TextInputProps) => {
  return <TextInput {...props} style={styles.input} />;
};
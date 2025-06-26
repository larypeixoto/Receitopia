import * as React from "react";
import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";
import { styles } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  title: string;  
}

export const Button = ({ title, ...rest }: ButtonProps) => {
    return (
        <TouchableOpacity style={styles.button} {...rest}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
}
import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { styles } from "./styles";

interface EyeIconProps {
  visible: boolean;
  onPress: () => void;
  size?: number;
  color?: string;
}

export const HideEye = ({ visible, onPress, size, color }: EyeIconProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.eyeIcon}>
      <Ionicons
        name={visible ? "eye" : "eye-off"}
        size={size}
        color={color}
      />
    </TouchableOpacity>
  );
};
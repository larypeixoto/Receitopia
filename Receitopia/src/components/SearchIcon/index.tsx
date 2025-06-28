import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { styles } from "./styles";

interface searchIconProps {
  onPress: () => void;
  size?: number;
  color?: string;
}

export const SearchIcon = ({onPress, size, color }: searchIconProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.searchIcon}>
      <Ionicons name="search" size={24} color={color} />
    </TouchableOpacity>
  );
};
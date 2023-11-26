import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./style";

const Button = ({ label, onPress }) => (
    <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{label}</Text>
    </TouchableOpacity >);
export default Button;




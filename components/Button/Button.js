import * as React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Text from "../Text/Text";
import theme from "../../theme";

export default function Button({ title, buttonPressed }) {
  return (
    <TouchableOpacity style={styles.button} onPress={buttonPressed}>
      <Text style={styles.buttonText} fontSize="body">
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    elevation: 8,
    backgroundColor: theme.colors.colorSecondary,
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  buttonText: {
    textTransform: "uppercase",
    color: theme.colors.colorWhite,
    fontWeight: theme.fontWeights.bold,
  },
});

import * as React from "react";
import { Text as NativeText, StyleSheet } from "react-native";

import theme from "../../theme";

export default function Text({ color, fontSize, fontWeight, style, ...props }) {
  const textStyle = [
    styles.text,
    color === "textSecondary" && styles.colorTextSecondary,
    fontSize === "heading" && styles.fontSizeHeading,
    fontSize === "subHeading" && styles.fontSizeSubHeading,
    fontWeight === "bold" && styles.fontWeightBold,
    style,
  ];
  return <NativeText style={textStyle} {...props} />;
}

const styles = StyleSheet.create({
  text: {
    color: theme.colors.colorWhite,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  colorTextSecondary: {
    color: theme.colors.colorPrimaryLight,
  },
  fontSizeHeading: {
    fontSize: theme.fontSizes.heading,
  },
  fontSizeSubHeading: {
    fontSize: theme.fontSizes.subHeading,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
});

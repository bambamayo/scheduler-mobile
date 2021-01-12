import * as React from "react";
import { StyleSheet, TextInput } from "react-native";
import { useField } from "formik";

import Text from "../Text/Text";
import theme from "../../theme";

export default function FormInput({ name, secure, label, ...props }) {
  const [field, meta] = useField(name);

  const textInputStyle = [
    styles.formInput,
    meta.touched && meta.error ? styles.formInputError : null,
  ];

  return (
    <>
      <Text style={styles.formLabel} fontSize="subHeading" fontWeight="bold">
        {label}
      </Text>
      <TextInput
        placeholderTextColor={theme.colors.colorWhite}
        style={textInputStyle}
        secureTextEntry={secure}
        {...props}
      />
      {meta.touched && meta.error ? (
        <Text style={styles.errorText}>{meta.error}</Text>
      ) : null}
    </>
  );
}

const styles = StyleSheet.create({
  formLabel: {
    marginBottom: 3,
  },
  formInput: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
    borderColor: theme.colors.colorWhite,
    borderWidth: 0.5,
    width: "100%",
    fontSize: theme.fontSizes.body,
    color: theme.colors.colorWhite,
  },

  formInputError: {
    borderColor: theme.colors.colorSecondary,
  },

  errorText: {
    marginTop: 3,
    color: theme.colors.colorSecondary,
    alignSelf: "flex-start",
    fontSize: 14,
  },
});

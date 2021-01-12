import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";

import FormInput from "../components/FormInput/FormInput";
import Button from "../components/Button/Button";
import theme from "../theme";
import Text from "../components/Text/Text";

const validationSchema = yup.object().shape({
  firstname: yup.string().required("First name is required"),
  lastname: yup.string().required("Last name is required"),
  email: yup
    .string()
    .email("Invalid email")
    .required("Please enter your email"),
  password: yup
    .string()
    .min(6, `password should be 6 characters or more`)
    .required("Please enter your password of 6 characters or more"),
});

export default function Signup({ navigation }) {
  return (
    <Formik
      initialValues={{
        firstname: "",
        lastname: "",
        email: "",
        password: "",
      }}
      onSubmit={(values) => {
        console.log(values, "values");
        navigation.navigate("Home");
      }}
      validationSchema={validationSchema}
    >
      {({ handleSubmit, handleChange, handleBlur, values }) => (
        <View style={styles.formContainer}>
          <Text style={styles.formHeader} fontSize="heading" fontWeight="bold">
            Create your free account
          </Text>
          <View style={styles.form}>
            <View style={styles.formGroup}>
              <FormInput
                name="firstname"
                placeholder="your firstname"
                secure={false}
                onChangeText={handleChange("firstname")}
                onBlur={handleBlur("firstname")}
                value={values.firstname}
              />
            </View>
            <View style={styles.formGroup}>
              <FormInput
                name="lastname"
                placeholder="your lastname"
                secure={false}
                onChangeText={handleChange("lastname")}
                onBlur={handleBlur("lastname")}
                value={values.lastname}
              />
            </View>

            <View style={styles.formGroup}>
              <FormInput
                name="email"
                placeholder="your email"
                secure={false}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
            </View>

            <View style={styles.formGroup}>
              <FormInput
                name="password"
                placeholder="your password(min of 6 characters)"
                secure={false}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
              />
            </View>
            <View style={styles.formBtnContainer}>
              <Button
                style={styles.formBtn}
                title="Create account"
                buttonPressed={handleSubmit}
              />
            </View>
          </View>
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: theme.colors.colorPrimaryDark,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  formHeader: {
    textAlign: "center",
    marginBottom: 5,
  },
  form: {
    width: "70%",
  },
  formGroup: {
    marginBottom: 5,
  },
  formBtnContainer: {
    marginTop: 10,
  },
});

import * as React from "react";
import { View, StyleSheet } from "react-native";

import Text from "../components/Text/Text";
import theme from "../theme";
import Button from "../components/Button/Button";

export default function Landing({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={{ fontSize: 30 }} fontWeight="bold">
          sCHEDULER
        </Text>
      </View>
      <View style={styles.callToAction}>
        <Text fontSize="heading" fontWeight="bold">
          Scheduler
        </Text>
        <Text fontWeight="bold" style={styles.textSecondary}>
          ...a simpler way to plan your day
        </Text>
        <Button
          title="Get started"
          buttonPressed={() => navigation.navigate("Sign up")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.colorPrimaryDark,
    flex: 1,
  },
  logoContainer: {
    flexBasis: `8%`,
    justifyContent: `center`,
    paddingLeft: 12,
  },
  callToAction: {
    flexBasis: `92%`,
    alignItems: `center`,
    justifyContent: `center`,
  },
  textSecondary: {
    marginTop: 3,
    marginBottom: 15,
    fontStyle: "italic",
  },
});

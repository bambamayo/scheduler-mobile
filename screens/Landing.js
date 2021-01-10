import * as React from "react";
import { Button, Text, View } from "react-native";

export default function Landing({ navigation }) {
  return (
    <View>
      <View>
        <Text>sCHEDULER</Text>
      </View>
      <View>
        <Text>Scheduler</Text>
        <Text>a simpler way to plan your day</Text>
        <Button
          title="Get started"
          onPress={() => navigation.navigate("Signup")}
        />
      </View>
    </View>
  );
}

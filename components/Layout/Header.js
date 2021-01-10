import * as React from "react";
import { Text, View } from "react-native";
import { Link } from "react-router-native";
import { Ionicons } from "@expo/vector-icons";

export default function Header() {
  return (
    <View>
      <View>
        <Link to="/">
          <Text>sCHEDULER</Text>
        </Link>
      </View>
      <View>
        <Text>
          <Ionicons name="add-outline" size={24} color="black" />
        </Text>
      </View>
    </View>
  );
}

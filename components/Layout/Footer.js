import * as React from "react";
import { Text, View } from "react-native";
import { Link } from "react-router-native";
import {
  SimpleLineIcons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";

export default function Footer() {
  return (
    <View>
      <Link to="/tasks">
        <Text>
          <MaterialCommunityIcons name="home" size={24} color="black" />
        </Text>
      </Link>
      <Link to="/user">
        <Text>
          <SimpleLineIcons name="user" size={24} color="black" />
        </Text>
      </Link>
      <Link to="/user/123">
        <Text>
          <FontAwesome5 name="user-edit" size={24} color="black" />
        </Text>
      </Link>
    </View>
  );
}

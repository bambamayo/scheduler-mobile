import * as React from "react";
import { SafeAreaView } from "react-native";

import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <SafeAreaView>
      <Header />
      {children}
      <Footer />
    </SafeAreaView>
  );
}

import { ThemedText } from "@/components/ThemedText";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link href={"/"} asChild>
        <ThemedText type="defaultSemiBold">Login Page</ThemedText>
      </Link>
    </View>
  );
}

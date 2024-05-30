import { ThemedText } from "@/components/ThemedText";
import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Well Be</Text>
      <Link href={"/login"} asChild>
        <Pressable>
          <ThemedText type="link">Login</ThemedText>
        </Pressable>
      </Link>
    </View>
  );
}

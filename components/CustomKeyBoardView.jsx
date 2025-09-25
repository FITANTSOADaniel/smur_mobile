import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";

export default function CustomKeyBoardView({ children }) {
  let kavConfig = {}
  let svConfig = {}
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      {...kavConfig}
    >
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          paddingHorizontal: 24,
        }}
        showsVerticalScrollIndicator={false}
        {...svConfig}
      >
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

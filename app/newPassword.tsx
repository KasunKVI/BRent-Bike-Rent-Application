import AppLoadingComponent from "@/components/AppLoadingComponent";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedView } from "@/components/ThemedView";
import { useRouter } from "expo-router";
import {
  useColorScheme,
  Image,
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

const NewPassword: React.FC = () => {
  const router = useRouter();
  const colorScheme = useColorScheme();

  // Define colors for light and dark themes
  const textColor = colorScheme === "dark" ? "#FFFFFF" : "#000000";
  const placeholderColor = colorScheme === "dark" ? "#666" : "#ccc";

  return (
    <AppLoadingComponent>
      <ParallaxScrollView
        headerBackgroundColor={{ light: "#FFFFFF", dark: "#000000" }}
        headerImage={<Image style={{ width: 0 }} />}
        headerHeight={120}>
        <ThemedView style={styles.titleContainer}>
          <Text style={[styles.welcometext, { color: textColor }]}>
            Create New Password
          </Text>
        </ThemedView>

        <View style={styles.newPassContainer}>
          <View style={styles.inputContainer}>
            <Text style={[styles.label, { color: textColor }]}>
              New Password
            </Text>
            <TextInput
              style={[styles.input, { color: textColor }]}
              placeholder="********"
              placeholderTextColor={placeholderColor}
              secureTextEntry
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={[styles.label, { color: textColor }]}>
              Confirm Password
            </Text>
            <TextInput
              style={[styles.input, { color: textColor }]}
              placeholder="********"
              placeholderTextColor={placeholderColor}
              secureTextEntry
            />
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={styles.signUpButton}
            onPress={() => router.push("")}>
            <Text style={styles.buttonText}>Done</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.divider}>
          <View style={styles.line} />
          <Text style={[styles.text, { color: textColor }]}> Or </Text>
          <View style={styles.line} />
        </View>

        <View>
          <TouchableOpacity
            style={styles.registerButton}
            onPress={() => router.push("/")}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
        </View>

        <Text style={[styles.copyright, { color: textColor }]}>
          @2024 All Right Reserved
        </Text>
      </ParallaxScrollView>
    </AppLoadingComponent>
  );
};

const styles = StyleSheet.create({
  registerButton: {
    backgroundColor: "#F2EEE1",
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 40,
  },

  titleContainer: {
    alignItems: "center",
  },
  welcometext: {
    fontSize: 26,
    fontWeight: "bold",
    fontFamily: "InknutAntiqua-Bold",
  },
  inputContainer: {
    marginVertical: 15,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginTop: 8,
    borderRadius: 7,
  },
  newPassContainer: {
    marginTop: 50,
  },
  signUpButton: {
    backgroundColor: "#FFCA28",
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 12,
  },
  buttonText: {
    textAlign: "center",
    color: "#000000",
    fontWeight: "bold",
    fontSize: 18,
  },
  divider: {
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#ccc",
    marginHorizontal: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    paddingHorizontal: 10,
  },
  copyright: {
    marginTop: 150,
    textAlign: "center",
    opacity: 0.3,
  },
});
export default NewPassword;

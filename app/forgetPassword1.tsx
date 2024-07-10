
import AppLoadingComponent from "@/components/AppLoadingComponent";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedView } from "@/components/ThemedView";
import { useRouter } from "expo-router";
import { useColorScheme, Image, Dimensions, StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";


const { width: screenWidth } = Dimensions.get('window');

const ForgetPassword1: React.FC = () => {

    const router = useRouter();
    const colorScheme = useColorScheme();

    // Define colors for light and dark themes
    const textColor = colorScheme === 'dark' ? '#FFFFFF' : '#000000';
    const buttonBackgroundColor ='#FFCA28';
    const forgetPasswordColor = colorScheme === 'dark' ? '#0079D1' : '#0013BA'; 

    return(
        <AppLoadingComponent>
            <ParallaxScrollView
                headerBackgroundColor={{ light: '#FFFFFF', dark: '#000000' }}
                headerImage={
                    <Image
                        source={require('@/assets/images/padlock.png')}
                        style={[styles.lock]}
                    />
                }
                headerHeight={300}
            >
                 <ThemedView style={styles.titleContainer}>
                    <Text style={[styles.welcometext, {color:textColor}]}>Forget Password</Text>
                </ThemedView>


            
          {/* Email Input Field */}
          <View style={styles.inputContainer}>
            <Text style={[styles.label, { color: textColor }]}>Enter Email Address</Text>
            <TextInput
              style={[styles.input, { color: textColor }]}
              placeholder="Example@gmail.com"
              placeholderTextColor="#ccc"
              // value={email}
              // onChangeText={setEmail}
            />
          
        </View>
        <View>
                    <TouchableOpacity
                        style={styles.signUpButton}
                        onPress={() => router.push('/forgetPassword2')}
                    >
                        <Text style={styles.buttonText}>Send Verification</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.divider}>
      <View style={styles.line} />
      <Text style={[styles.text, { color: textColor }]}> Or </Text>
      <View style={styles.line} />
    </View>
                
    <ThemedView style={styles.signupContainer}>
                    <Text style={[{color:textColor}]}>Don't Have an account?</Text>
        
                </ThemedView>

                <View>
                    <TouchableOpacity
                        style={styles.registerButton}
                        onPress={() => router.push('/signUp')}
                    >
                        <Text style={styles.buttonText}>Register</Text>
                    </TouchableOpacity>
                </View>

                <Text style={[styles.copyright,{color:textColor}]}>@2024 All Right Reserved</Text>
            </ParallaxScrollView>
        </AppLoadingComponent>
                

                
    )
}


const styles = StyleSheet.create({
    lock: {
      height: 150,
      width: 150,
      marginLeft:40,
      position: 'relative',
      top: 150,
      alignSelf: 'center',
    },
    titleContainer: {
        alignItems: 'center',
    },
    welcometext: {
        fontSize: 26,
        fontWeight: 'bold',
        fontFamily: 'InknutAntiqua-Bold',
    },
    label: {
        fontSize: 19,
        fontWeight: 'bold',
        alignSelf:'center',
        marginBottom: 8,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginTop: 8,
        borderRadius: 7,
    },
    inputContainer: {
        marginBottom: 12,
        marginTop: 30,
    },
    registerButton: {
        backgroundColor: '#F2EEE1',
        paddingVertical: 12,
        borderRadius: 8,
        marginTop:12,
    },
    signUpButton: {
        backgroundColor: '#FFCA28',
        paddingVertical: 12,
        borderRadius: 8,
        marginTop:12,
    },
    buttonText: {
        textAlign: 'center',
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 18,
    },

    divider: {
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
      },
      line: {
        flex: 1,
        height: 1,
        backgroundColor: '#ccc',
        marginHorizontal: 5,
      },
      text: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingHorizontal: 10,
      },
      signupContainer: {
        alignItems: 'center',
        marginTop:12,
    },
    copyright: {
        marginTop:70,
        textAlign: 'center',
        opacity: 0.3,
    },
});

export default ForgetPassword1;
import React from 'react';
import { Text, View, Image, StyleSheet, TextInput, TouchableOpacity, useColorScheme,Dimensions } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedView } from '@/components/ThemedView';
import AppLoadingComponent from '../components/AppLoadingComponent';
import { useRouter } from 'expo-router';
import { Colors } from '@/constants/Colors';

const { width: screenWidth } = Dimensions.get('window');

const Index: React.FC = () => {
  const router = useRouter();
  const colorScheme = useColorScheme();

  // Define colors for light and dark themes
  const textColor = colorScheme === 'dark' ? '#FFFFFF' : '#000000';
  const buttonBackgroundColor ='#FFCA28';
  const forgetPasswordColor = colorScheme === 'dark' ? '#0079D1' : '#0013BA'; 

  return (
    <AppLoadingComponent>
      <ParallaxScrollView
        headerBackgroundColor={{ light: '#FFFFFF', dark: '#000000' }}
        headerImage={
          <Image
            source={require('@/assets/images/Bike_banner_hero.png')}
            style={[styles.brentlogo, { width: screenWidth * 0.93 }]}
          />
        }
        headerHeight={330}
      >
        <ThemedView style={styles.titleContainer}>
          <Text style={[styles.welcometext, { color: textColor }]}>Welcome Back..!</Text>
          <HelloWave />
        </ThemedView>
        <ThemedView style={styles.expText}>
          <Text style={{ color: textColor }}>
            Sri Lanka’s best ever bike rental service. 
          </Text>
          <Text style={{ color: textColor }}>
            We offer the island wide bike rental..
          </Text>
        </ThemedView>

        <View style={styles.inputFields}>
          {/* Email Input Field */}
          <View style={styles.inputContainer}>
            <Text style={[styles.label, { color: textColor }]}>Email</Text>
            <TextInput
              style={[styles.input, { color: textColor }]}
              placeholder="Example@gmail.com"
              placeholderTextColor="#ccc"
              // value={email}
              // onChangeText={setEmail}
            />
          </View>

          {/* Password Input Field */}
          <View style={styles.inputContainer}>
            <Text style={[styles.label, { color: textColor }]}>Password</Text>
            <TextInput
              style={[styles.input, { color: textColor }]}
              placeholder="********"
              placeholderTextColor="#ccc"
              secureTextEntry={true}
              // value={password}
              // onChangeText={setPassword}
            />
          </View>
          <TouchableOpacity onPress={() => console.log('Forgot password pressed')}>
            <Text style={[styles.forgetPassText, { color: forgetPasswordColor }]}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        {/* Sign In Button */}
        <View>
          <TouchableOpacity
            style={[styles.signInButton, { backgroundColor: buttonBackgroundColor }]}
            onPress={() => console.log('Sign in pressed')}
          >
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.devider}>
          <Text style={{color:textColor}}>----------------------------------------------</Text>
          <Text style={{color:textColor}}> Or </Text>
          <Text style={{color:textColor}}>----------------------------------------------</Text>
        </View>

        <ThemedView style={styles.signupContainer}>
          <Text style={{ color: textColor }}>Don't have an account ?</Text>
          <TouchableOpacity onPress={() => router.push('/signUp')}>
            <Text style={[styles.signUp, { color: forgetPasswordColor}]}>Sign Up</Text>
          </TouchableOpacity>
        </ThemedView>

        <Text style={[styles.copyright,{color:textColor}]}>@2024 All Right Reserved</Text>
      </ParallaxScrollView>
    </AppLoadingComponent>
  );
};

const styles = StyleSheet.create({
  hero: {
    height: 300,
  },
  brentlogo: {
    height: 260,
    margin: 15,
    borderRadius: 10,
    position: 'relative',
    top: 60,
  },
  welcometext: {
    fontSize: 26,
    fontWeight: 'bold',
    fontFamily: 'InknutAntiqua-Bold',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  expText: {
    flexDirection: 'column',
    gap: 1,
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginTop: 8,
    borderRadius: 7,
  },
  inputFields: {
    marginBottom: 20,
  },
  forgetPassText: {
    textAlign: 'right',
    color: 'blue',
  },
  signInButton: {
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
  signupContainer: {
    paddingHorizontal: 90,
    flexDirection: 'row',
    gap: 10,
  },
  signUp: {
    color: 'blue',
  },
  copyright: {
    position: "relative",
    bottom: 0,
    textAlign: 'center',
    opacity: 0.3,
  },
  devider: {
    alignSelf: 'center',
    flexDirection: 'row',
  },
});

export default Index;

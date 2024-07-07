import React from 'react';
import { Text, View, Image, StyleSheet, TextInput, Button, TouchableOpacity, Dimensions } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedView } from '@/components/ThemedView';
import AppLoadingComponent from '../components/AppLoadingComponent';
import { blue } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';

const { width: screenWidth } = Dimensions.get('window');

const Index: React.FC = () => {
  return (
    <AppLoadingComponent
>
      <ParallaxScrollView
        headerBackgroundColor={{ light: '#FFFFFF', dark: '#FFFFFF' }}
        headerImage={
          <Image
            source={require('@/assets/images/Bike_banner_hero.png')}
            style={[styles.brentlogo, { width: screenWidth * 0.93 }]}
          />
        }
      >
        <ThemedView style={styles.titleContainer}>
          <Text style={styles.welcometext}>Welcome Back..!</Text>
          <HelloWave />
        </ThemedView>
        <ThemedView style={styles.expText}>
        <Text>
          Sri Lanka’s best ever bike rental service. 
        </Text>
        <Text>
          We offer the island wide bike rental..
        </Text>
        </ThemedView>


        <View style={styles.inputFields}>
        {/* Email Input Field */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            // value={email}
            // onChangeText={setEmail}
          />
        </View>

        {/* Password Input Field */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Example@gmail.com"
            secureTextEntry={true}
            // value={password}
            // onChangeText={setPassword}
          />
        </View>
        <TouchableOpacity onPress={() => console.log('Forgot password pressed')}>
            <Text style={styles.forgetPassText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
         {/* Sign In Button */}
         <View>
          <TouchableOpacity
            style={styles.signInButton}
            onPress={() => console.log('Sign in pressed')}
          >
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.devider}>
        <Text>----------------------------------------------</Text>
        <Text>Or</Text>
        <Text>----------------------------------------------</Text>
        </View>
        <ThemedView style={styles.signupContainer}>
          <Text>Don't have an account ?</Text>
          <TouchableOpacity>
            <Text style={styles.signUp}>Sign Up</Text>
          </TouchableOpacity>
        </ThemedView>
        <Text style={styles.copyright}>@2024 All Right Reserved</Text>
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
  expText:{
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
    borderRadius:7,
  },
  inputFields:{
    marginBottom:20,
  },
  forgetPassText:{
    textAlign:'right',
    color:'blue',
  },
  signInButton: {
    backgroundColor: '#FFCA28',
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonText: {
    textAlign: 'center',
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 18,
  },
  signupContainer:{
    paddingHorizontal: 90,
    flexDirection: 'row',
    gap: 10,
  },
  signUp:{
    color:'blue',
  },
  copyright:{
    position:"relative",
    bottom:0,
    textAlign:'center',
    opacity:0.3,
  },
  devider:{
    alignSelf:'center',
    flexDirection: 'row',
    
  }
});

export default Index;

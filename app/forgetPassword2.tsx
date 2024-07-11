import AppLoadingComponent from '@/components/AppLoadingComponent';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedView } from '@/components/ThemedView';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, useColorScheme, Image, TouchableOpacity} from 'react-native';

const ForgetPassword2 = () => {
  const [code, setCode] = useState(['', '', '', '']); // Array to hold 4 inputs
  const colorScheme = useColorScheme();
  const router = useRouter();
  const textColor = colorScheme === 'dark' ? '#FFFFFF' : '#000000';
  const forgetPasswordColor = colorScheme === 'dark' ? '#0079D1' : '#BA000B'; 
  const contactUsText = colorScheme === 'dark' ? '#0079D1' : '#127B2A'; 
  
  return (

    <AppLoadingComponent>
        <ParallaxScrollView
                headerBackgroundColor={{ light: '#FFFFFF', dark: '#000000' }}
                headerImage={<Image style={{ width: 0 }} />}
                headerHeight={120}
            >
        <ThemedView style={styles.titleContainer}>
                    <Text style={[styles.welcometext, {color:textColor}]}>Verification</Text>
                </ThemedView>

                <Text style={[styles.label, { color: textColor }]}>Enter Verification Code</Text>
       
        <View style={styles.container}>
        {code.map((value, index) => (
            <TextInput
            key={index}
            style={styles.input}
            keyboardType="numeric"
            maxLength={1}
            value={value}
            />
        ))}
        </View>

        <ThemedView style={styles.signupContainer}>
          <Text style={{ color: textColor }}>If you don't recieve the code ?</Text>
          <TouchableOpacity onPress={() => console.log('')}>
            <Text style={[styles.signUp, { color: forgetPasswordColor}]}>Resend</Text>
          </TouchableOpacity>
        </ThemedView>

        <View>
                    <TouchableOpacity
                        style={styles.signUpButton}
                        onPress={() => router.push('/newPassword')}
                    >
                        <Text style={styles.buttonText}>Next</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.divider}>
      <View style={styles.line} />
      <Text style={[styles.text, { color: textColor }]}> Or </Text>
      <View style={styles.line} />
    </View>

    <ThemedView style={styles.contactUsContainer}>
          <Text style={{ color: textColor }}>If you have any problem with verification ?</Text>
          <TouchableOpacity onPress={() => console.log('')}>
            <Text style={[styles.signUp, { color: contactUsText}]}>Contact Us</Text>
          </TouchableOpacity>
        </ThemedView>

<ThemedView style={styles.contactTypes}>
    <Image source={require('@/assets/images/whatsapp.png')}></Image>
    <Image source={require('@/assets/images/telegram.png')}></Image>
    <Image source={require('@/assets/images/faceBook.png')}></Image>
</ThemedView>
<Text style={[styles.copyright,{color:textColor}]}>@2024 All Right Reserved</Text>
        </ParallaxScrollView>
    </AppLoadingComponent>
  );
};

const styles = StyleSheet.create({
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
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  label: {
    fontSize: 19,
    fontWeight: 'bold',
    alignSelf:'center',

},
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    fontSize: 24,
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginHorizontal: 15,
    textAlign: 'center',
    width: 70,
  },
  titleContainer: {
    alignItems: 'center',
},
welcometext: {
    fontSize: 26,
    fontWeight: 'bold',
    fontFamily: 'InknutAntiqua-Bold',
    marginBottom: 80,
},
signupContainer: {
    paddingHorizontal: 90,
    flexDirection: 'row',
    gap: 10,
  },
  contactTypes: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 25,
    marginTop: 20,
},
  contactUsContainer: {
    paddingVertical: 20,
    alignItems: 'center',
    flexDirection: 'column',
    gap: 15,
  },
  signUp: {
    color: 'blue',
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
  copyright: {
    marginTop:70,
    textAlign: 'center',
    opacity: 0.3,
},
});

export default ForgetPassword2;

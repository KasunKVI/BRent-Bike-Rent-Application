import AppLoadingComponent from '@/components/AppLoadingComponent';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity, useColorScheme,Dimensions } from 'react-native';
import React, { useState , useEffect} from 'react';
import { ThemedView } from '@/components/ThemedView';
import { useRouter } from 'expo-router';
import RNPickerSelect from 'react-native-picker-select';
import { SceneMap, TabView, TabBar } from 'react-native-tab-view';

const initialLayout = { width: Dimensions.get('window').width };

interface State {
  label: string;
  value: string;
}


 // data for provinces and states
 const provinces = [
    { label: 'Western Province', value: 'western' },
    { label: 'Central Province', value: 'central' },
    { label: 'Southern Province', value: 'southern' },
    { label: 'Northern Province', value: 'northern' },
    { label: 'Eastern Province', value: 'eastern' },
    { label: 'North Western Province', value: 'north_western' },
    { label: 'North Central Province', value: 'north_central' },
    { label: 'Uva Province', value: 'uva' },
    { label: 'Sabaragamuwa Province', value: 'sabaragamuwa' },  
  ];
 
  const allStates = {
    western: [
        { label: 'Colombo', value: 'colombo' },
        { label: 'Gampaha', value: 'gampaha' },
        { label: 'Kalutara', value: 'kalutara' },
    ],
    central: [
        { label: 'Kandy', value: 'kandy' },
        { label: 'Matale', value: 'matale' },
        { label: 'Nuwara Eliya', value: 'nuwara_elilya' },
    ],
    southern: [
        { label: 'Galle', value: 'galle' },
        { label: 'Matara', value: 'matara' },
        { label: 'Hambantota', value: 'hambantota' },
    ],
    northern: [
        { label: 'Jaffna', value: 'jaffna' },
        { label: 'Kilinochchi', value: 'kilinochchi' },
        { label: 'Mannar', value: 'mannar' },
    ],
    eastern: [
        { label: 'Trincomalee', value: 'trincomalee' },
        { label: 'Batticaloa', value: 'batticaloa' },
        { label: 'Ampara', value: 'ampara' },
    ],
    north_western: [
        { label: 'Kurunegala', value: 'kurunegala' },
        { label: 'Puttalam', value: 'puttalam' },
    ],
    north_central: [
        { label: 'Anuradhapura', value: 'anuradhapura' },
        { label: 'Polonnaruwa', value: 'polonnaruwa' },
    ],
    uva: [
        { label: 'Badulla', value: 'badulla' },
        { label: 'Moneragala', value: 'moneragala' },
    ],
    sabaragamuwa: [
        { label: 'Ratnapura', value: 'ratnapura' },
        { label: 'Kegalle', value: 'kegalle' },
    ],
 };

const SupplierRegistration = () => {

     // State for form inputs
 const [name, setName] = useState('');
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [confirmPassword, setConfirmPassword] = useState('');
 const [mobile, setMobile] = useState('');
 const [city, setCity] = useState('');
 const [province, setProvince] = useState<string | null>(null);
 const [state, setState] = useState<State>({ label: '', value: '' });
 const [states, setStates] = useState<State[]>([]);



useEffect(() => {
    // Update states based on selected province
    if (province) {
        setStates(allStates[province as keyof typeof allStates]);
    } else {
        setStates([]);
    }
}, [province]);

const colorScheme = useColorScheme();
const router = useRouter();
   
const signInColor = colorScheme === 'dark' ? '#0079D1' : '#0013BA';
const textColor = colorScheme === 'dark' ? '#FFFFFF' : '#000000';
const placeholderColor = colorScheme === 'dark' ? '#666' : '#ccc';

    return(
        
        <View style={styles.inputFields}>
        <View style={styles.inputContainer}>
            <Text style={[styles.label,{color:textColor}]}>Name</Text>
            <TextInput
                style={[styles.input,{color:textColor}]}
                placeholder="Ex : John Fernando"
                placeholderTextColor={placeholderColor}
                value={name}
                onChangeText={setName}
            />
        </View>

        <View style={styles.inputContainer}>
            <Text style={[styles.label,{color:textColor}]}>Email</Text>
            <TextInput
                style={[styles.input,{color:textColor}]}
                placeholder="Example@gmail.com"
                placeholderTextColor={placeholderColor}
                value={email}
                onChangeText={setEmail}
            />
        </View>

        <View style={styles.inputContainer}>
            <Text style={[styles.label,{color:textColor}]}>Password</Text>
            <TextInput
                style={[styles.input,{color:textColor}]}
                placeholder="********"
                placeholderTextColor={placeholderColor}
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
        </View>

        <View style={styles.inputContainer}>
            <Text style={[styles.label,{color:textColor}]}>Confirm Password</Text>
            <TextInput
                style={[styles.input,{color:textColor}]}
                placeholder="********"
                placeholderTextColor={placeholderColor}
                secureTextEntry
                value={confirmPassword}
                onChangeText={setConfirmPassword}
            />
        </View>

       
        <View style={styles.inputContainer}>
            <Text style={[styles.label,{color:textColor}]}>Province</Text>
            <View style={styles.pickerContainer}>
                <RNPickerSelect
                    onValueChange={(value) => setProvince(value)}
                    items={provinces}
                    style={pickerSelectStyles}
                    placeholder={{ label: 'Select a province', value: null }}
                />
            </View>
        </View>

        <View style={styles.inputContainer}>
            <Text style={[styles.label,{color:textColor}]}>State</Text>
            <View style={styles.pickerContainer}>
                <RNPickerSelect
                    onValueChange={(value) => setState(value)}
                    items={states}
                    style={pickerSelectStyles}
                    placeholder={{ label: 'Select a state', value: null }}
                />
            </View>
        </View>

        <View style={styles.inputContainer}>
            <Text style={[styles.label,{color:textColor}]}>City</Text>
            <TextInput
                style={[styles.input,{color:textColor}]}
                placeholderTextColor={placeholderColor}
                placeholder="Input the city"
                value={city}
                onChangeText={setCity}
            />
        </View>
        <View style={styles.inputContainer}>
            <Text style={[styles.label,{color:textColor}]}>Mobile</Text>
            <TextInput
                style={[styles.input,{color:textColor}]}
                placeholderTextColor={placeholderColor}
                placeholder="Input the mobile no"
                value={mobile}
                onChangeText={setMobile}
            />
        </View>
        <View>
                    <TouchableOpacity
                        style={styles.signUpButton}
                        onPress={() => console.log('Sign Up pressed')}
                    >
                        <Text style={styles.buttonText}>Register</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.divider}>
      <View style={styles.line} />
      <Text style={[styles.text, { color: textColor }]}> Or </Text>
      <View style={styles.line} />
    </View>
                <ThemedView style={styles.signupContainer}>
                    <Text style={[{color:textColor}]}>Have an account?</Text>
                    <TouchableOpacity onPress={() => router.push('')}>
                        <Text style={[styles.signIn,{color:signInColor}]}>Sign In</Text>
                    </TouchableOpacity>
                </ThemedView>
                <Text style={[styles.copyright,{color:textColor}]}>@2024 All Right Reserved</Text>

    </View>
    );

}
const CustomerRegistration = () => {

     // State for form inputs
 const [name, setName] = useState('');
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [confirmPassword, setConfirmPassword] = useState('');

 const [city, setCity] = useState('');
 const [province, setProvince] = useState<string | null>(null);
 const [state, setState] = useState<State>({ label: '', value: '' });
 const [states, setStates] = useState<State[]>([]);

useEffect(() => {
    // Update states based on selected province
    if (province) {
        setStates(allStates[province as keyof typeof allStates]);
    } else {
        setStates([]);
    }
}, [province]);

const colorScheme = useColorScheme();
const router = useRouter();
   
const signInColor = colorScheme === 'dark' ? '#0079D1' : '#0013BA';
const textColor = colorScheme === 'dark' ? '#FFFFFF' : '#000000';
const placeholderColor = colorScheme === 'dark' ? '#666' : '#ccc';

    return(
        <View style={styles.inputFields}>
        <View style={styles.inputContainer}>
            <Text style={[styles.label,{color:textColor}]}>Name</Text>
            <TextInput
                style={[styles.input,{color:textColor}]}
                placeholder="Ex : John Fernando"
                placeholderTextColor={placeholderColor}
                value={name}
                onChangeText={setName}
            />
        </View>

        <View style={styles.inputContainer}>
            <Text style={[styles.label,{color:textColor}]}>Email</Text>
            <TextInput
                style={[styles.input,{color:textColor}]}
                placeholder="Example@gmail.com"
                placeholderTextColor={placeholderColor}
                value={email}
                onChangeText={setEmail}
            />
        </View>

        <View style={styles.inputContainer}>
            <Text style={[styles.label,{color:textColor}]}>Password</Text>
            <TextInput
                style={[styles.input,{color:textColor}]}
                placeholder="********"
                placeholderTextColor={placeholderColor}
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
        </View>

        <View style={styles.inputContainer}>
            <Text style={[styles.label,{color:textColor}]}>Confirm Password</Text>
            <TextInput
                style={[styles.input,{color:textColor}]}
                placeholder="********"
                placeholderTextColor={placeholderColor}
                secureTextEntry
                value={confirmPassword}
                onChangeText={setConfirmPassword}
            />
        </View>

       
        <View style={styles.inputContainer}>
            <Text style={[styles.label,{color:textColor}]}>Province</Text>
            <View style={styles.pickerContainer}>
                <RNPickerSelect
                    onValueChange={(value) => setProvince(value)}
                    items={provinces}
                    style={pickerSelectStyles}
                    placeholder={{ label: 'Select a province', value: null }}
                />
            </View>
        </View>

        <View style={styles.inputContainer}>
            <Text style={[styles.label,{color:textColor}]}>State</Text>
            <View style={styles.pickerContainer}>
                <RNPickerSelect
                    onValueChange={(value) => setState(value)}
                    items={states}
                    style={pickerSelectStyles}
                    placeholder={{ label: 'Select a state', value: null }}
                />
            </View>
        </View>

        <View style={styles.inputContainer}>
            <Text style={[styles.label,{color:textColor}]}>City</Text>
            <TextInput
                style={[styles.input,{color:textColor}]}
                placeholderTextColor={placeholderColor}
                placeholder="Input the city"
                value={city}
                onChangeText={setCity}
            />
        </View>
                <View>
                    <TouchableOpacity
                        style={styles.signUpButton}
                        onPress={() => console.log('Sign Up pressed')}
                    >
                        <Text style={styles.buttonText}>Register</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.divider}>
      <View style={styles.line} />
      <Text style={[styles.text, { color: textColor }]}> Or </Text>
      <View style={styles.line} />
    </View>
                
                <ThemedView style={styles.signupContainer}>
                    <Text style={[{color:textColor}]}>Have an account?</Text>
                    <TouchableOpacity onPress={() => router.push('')}>
                        <Text style={[styles.signIn,{color:signInColor}]}>Sign In</Text>
                    </TouchableOpacity>
                </ThemedView>
                <Text style={[styles.copyright,{color:textColor}]}>@2024 All Right Reserved</Text>
    </View>
    
    );
}

const SignUp: React.FC = () => {
    
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'customer', title: 'Customer' },
        { key: 'supplier', title: 'Supplier' },
    ]);

    const renderScene = SceneMap({
        customer: CustomerRegistration,
        supplier: SupplierRegistration,
    });

    const colorScheme = useColorScheme();
    const textColor = colorScheme === 'dark' ? '#FFFFFF' : '#000000';

    return (
        <AppLoadingComponent>
            <ParallaxScrollView
                headerBackgroundColor={{ light: '#FFFFFF', dark: '#000000' }}
                headerImage={<Image style={{ width: 0 }} />}
                headerHeight={20} // Custom header height
            >
                <ThemedView style={styles.titleContainer}>
                    <Text style={[styles.welcometext, {color:textColor}]}>Create Your Account</Text>
                </ThemedView>

               <TabView
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    onIndexChange={setIndex}
                    initialLayout={initialLayout}
                    renderTabBar={props => (
                        <TabBar
                            {...props}
                            indicatorStyle={{ backgroundColor: '#FFCA28' }}
                            style={{ backgroundColor: colorScheme === 'dark' ? '#000' : '#fff' }}
                            labelStyle={{ color: textColor }}
                        />
                    )}
                />
            </ParallaxScrollView>
        </AppLoadingComponent>
    );
};

const styles = StyleSheet.create({
    titleContainer: {
        alignItems: 'center',
    },
    welcometext: {
        fontSize: 26,
        fontWeight: 'bold',
        fontFamily: 'InknutAntiqua-Bold',
    },
    inputContainer: {
        marginBottom: 12,
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
    pickerContainer: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginTop: 8,
        borderRadius: 7,
        justifyContent: 'center',
    },
    inputFields: {
        marginBottom: 20,
    },
    signUpButton: {
        backgroundColor: '#FFCA28',
        paddingVertical: 12,
        borderRadius: 8,
        marginTop:15,
    },
    buttonText: {
        textAlign: 'center',
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 18,
    },
    signupContainer: {
        paddingHorizontal: 90,
        flexDirection: 'row',
        gap: 10,
        marginTop:12,
    },
    signIn: {
        color: 'blue',

    },
    copyright: {
        marginTop:10,
        textAlign: 'center',
        opacity: 0.3,
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
    
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        color:'dark' ? '#FFFFFF' : '#000000',
        paddingRight: 30, 
        backgroundColor: 'transparent', 
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        color:'dark' ? '#FFFFFF' : '#000000',
        paddingRight: 30, 
        backgroundColor: 'transparent', 
    },
    placeholder: {
        color: 'grey',
    }
});

export default SignUp;

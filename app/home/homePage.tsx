import React, {useEffect, useState} from "react";
import {Button, Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import AppLoading from "expo-app-loading";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import AppLoadingComponent from "@/components/AppLoadingComponent";
import {ThemedView} from "@/components/ThemedView";
import ignore from "ignore";

const images = [
    require("@/assets/images/home_images/sport_bike_img.png"),
    require("@/assets/images/home_images/off_road_bike_img.png"),
    require("@/assets/images/home_images/scooter_img.png"),
    require("@/assets/images/home_images/classic_bike_img.png"),
];
const {width: screenWidth} = Dimensions.get("window");

const HomePage: React.FC = () => {


    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, []);

    if (!images.length) {
        return <AppLoading/>;
    }

    const handleDetailsPress = (item: any) => {
        setSelectedItem(item);
    };

    if (selectedItem) {
        return (
            <DetailsPage item={selectedItem} onBack={() => setSelectedItem(null)}/>
        );
    }

    const DATA = [
        {
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
            title: "Pulsar 150",
            price: "Rs. 1500",
            location: "Matara",
            img: require("@/assets/images/bikes/pulsar.png")
        },
        {
            id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
            title: "Royal Enfield",
            price: "Rs. 2000",
            location: "Matara",
            img: require("@/assets/images/bikes/royal_enfield.png")
        },
        {
            id: "58694a0f-3da1-471f-bd96-145571e29d72",
            title: "WR250X",
            price: "Rs. 2500",
            location: "Matara",
            img: require("@/assets/images/bikes/srx.png")
        },
        {id: "58694f-3da1-471f-bd96-145571e29d72", title: "Fourth Item"},
        {id: "58694a0f-3da1-471f-bd96-145571ed72", title: "Fifth Item"},
        {id: "58694a0f-3da1-471f-bd96-1451e29d72", title: "Sixth Item"},
        {id: "58694a0f-3da1-471f-bd96-45571e29d72", title: "Seventh Item"},

    ];

    return (
        <AppLoadingComponent>

            <Image
                source={images[currentImageIndex]}
                style={[styles.brentlogo, {width: screenWidth * 0.93}]}
            />

            <FlatList style={{width: screenWidth * 0.97}}
                      data={DATA}
                      renderItem={({item}) => (

                          <ThemedView style={styles.itemStyle}>
                              <Text style={[styles.titleText, {width: screenWidth * 0.93}]}>{item.title}</Text>
                              <Text style={styles.priceText}>1 Km - {item.price}</Text>
                              <Text style={styles.locationHeader}>Location :
                              <Text style={styles.locationText}> {item.location}</Text></Text>
                              <TouchableOpacity style={styles.detailsButton}
                                                onPress={() => handleDetailsPress(item)}>
                                  <Text style={styles.buttonText}>Details</Text>
                              </TouchableOpacity>
                              <TouchableOpacity style={styles.bookButton}>
                                  <Text style={styles.buttonText}>Book Now</Text>
                              </TouchableOpacity>
                              <Image
                                  source={item.img}
                                  style={styles.bikeImage}

                              />
                          </ThemedView>

                      )}
                      keyExtractor={(item) => item.id}
            />

        </AppLoadingComponent>
    );
};

export default HomePage;

interface Item {
    id: string;
    title: string;
    price?: string;
    img?: any;
    location?: string;
}

interface DetailsPageProps {
    item: Item;
    onBack: () => void;
}


const DetailsPage: React.FC<DetailsPageProps> = ({ item, onBack }) =>{
    return (
        <AppLoadingComponent>
            <ParallaxScrollView
                headerBackgroundColor={{light: "#FFFFFF", dark: "#FFFFFF"}}
                headerImage={<Image
                    source={item.img}
                    style={[{width: 250,height:180},{marginHorizontal:100}]}/>}
                headerHeight={200}
            >
                <ThemedView style={{backgroundColor:'#FFFFFF'}}>
                    <Text style={styles.titleText}>{item.title}</Text>

                    <Text style={styles.titleText}>1 Km -  <Text style={styles.titleText}>{item.price}</Text></Text>
                    <Text style={styles.titleText}>District - {item.location}</Text>
                    <Text style={styles.titleText}>Province - Southren</Text>
                    <Text style={styles.titleText}>Contact - 0771234567</Text>

                    <Button title="Back" onPress={onBack}/>
                </ThemedView>
            </ParallaxScrollView>
        </AppLoadingComponent>
    )
}
// const Home: React.FC = () => {
//
// }

const styles = StyleSheet.create({
    brentlogo: {
        height: 400,
        resizeMode: "cover",
        margin: 10,
        borderRadius: 6,

    },
    titleText: {
        fontSize: 25,
        textAlign: 'left',
        fontWeight: 'bold',
        marginLeft: 10,

    },
    itemStyle: {
        height: 100,
        backgroundColor: '#FFFCB8',
        marginHorizontal: 10,
        marginVertical: 15,
    },
    bikeImage: {
        height: 100,
        width: 140,
        borderRadius: 10,
        alignSelf: 'flex-end',
        marginRight: 10,
        position: 'absolute',
        bottom: 22,
        backgroundColor: 'transparent',
    },
    detailsButton: {
        backgroundColor: "#13E435",
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5,
        marginTop: 5,
        alignSelf: "center",
        position: 'absolute',
        width: 100,
    },
    bookButton: {
        backgroundColor: "#FFD319",
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5,
        marginTop: 52,
        position: 'absolute',
        alignSelf: "center",
        width: 100,
    },
    buttonText: {
        color: "#000000",
        fontWeight: "bold",
        textAlign: "center",
    },
    priceText: {
        color:"#E71B1B",
        fontWeight: "bold",
        marginLeft: 10,
        marginTop: 5,
    },
    locationHeader:{
        color:"#000000",
        fontWeight: "bold",
        marginLeft: 10,
        marginTop: 5,
    },
    locationText: {
        color:"#755B00",
        marginLeft:10,
        fontWeight: "bold",

    },

});
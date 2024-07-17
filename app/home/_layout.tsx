import {Drawer} from "expo-router/drawer";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {Button} from "react-native";


export default function Layout() {


    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer>
                <Drawer.Screen
                    name="homePage"
                    options={
                        {
                            drawerLabel: "Home",
                            headerTitle: 'Home',

                        }
                    }
                />
                <Drawer.Screen
                        name="signIn"
                        options={
                            {
                                headerShown: false,
                                drawerLabel: "SignIn",

                            }
                        }
                    />
            </Drawer>
        </GestureHandlerRootView>
    )
}
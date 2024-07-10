import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import * as Font from 'expo-font';

interface AppLoadingProps {
  children: React.ReactNode;
}

const loadFonts = async () => {
  await Font.loadAsync({
    'InknutAntiqua': require('../assets/fonts/InknutAntiqua-Regular.ttf'),
    'InknutAntiqua-Bold': require('../assets/fonts/InknutAntiqua-Bold.ttf'),
  });
};

const AppLoadingComponent: React.FC<AppLoadingProps> = ({ children }) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    loadFonts().then(() => setFontsLoaded(true));
  }, []);

  if (!fontsLoaded) {
    return <Text>Loading...</Text>; // Placeholder for loading indicator
  }

  return <>{children}</>;
};

export default AppLoadingComponent;

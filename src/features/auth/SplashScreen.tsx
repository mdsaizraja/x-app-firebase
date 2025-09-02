import Logo from '@assets/images/logo.jpeg';
import { Colors } from '@utils/Constants.tsx';
import { screenHeight, screenWidth } from '@utils/Scaling.tsx';
import React, { useEffect, FC } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { navigate } from '@utils/NavigationUtils';

const SplashScreen: FC = () => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate('CustomerLogin');
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logoImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoImage: {
    width: screenWidth * 0.7,
    height: screenHeight * 0.7,
    resizeMode: 'contain',
  },
});

export default SplashScreen;

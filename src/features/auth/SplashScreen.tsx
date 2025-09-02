import Logo from '@assets/images/logo.jpeg';
import { Colors } from '@utils/Constants.tsx';
import { navigate } from '@utils/NavigationUtils';
import { screenHeight, screenWidth } from '@utils/Scaling.tsx';
import { FC, useEffect } from 'react';
import { Image, StyleSheet, View } from 'react-native';

const SplashScreen:FC = () => {
  useEffect(() => {

    const navigateUser=async()=>{
      try {
        navigate("CustomerLogin")
        
      } catch (error) {
        
      }
    }
    const timeoutId = setTimeout(navigateUser,1000)

    return () =>clearTimeout(timeoutId)
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

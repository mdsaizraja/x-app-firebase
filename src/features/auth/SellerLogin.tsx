import { View, Text, StyleSheet } from 'react-native';
import React, { FC } from 'react';
import { Colors } from '@utils/Constants.tsx';

const SellerLogin: FC = () => {
  return (
    <View style={styles.container}>
      <Text>SellerLogin</Text>
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
});

export default SellerLogin;

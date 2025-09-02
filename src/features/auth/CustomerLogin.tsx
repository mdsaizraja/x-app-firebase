import CustomeSafeAreaView from '@components/global/CustomeSafeAreaView';
import { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CustomerLogin:FC = () => {
  return (
    <View style={styles.container}>
      <CustomeSafeAreaView>
        <Text>CustomerLogin</Text>
      </CustomeSafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
    
    
  },
});

export default CustomerLogin;

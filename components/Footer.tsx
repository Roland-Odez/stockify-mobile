import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.container}>
        <MaterialCommunityIcons name="shield-half-full" size={24} color="#ddd" />
        <View>
            <Text className='text-[#ddd] text-center text-sm'>Stockify is offered by Exinity Me Ltd.</Text>
            <Text className='text-[#ddd] text-center text-sm'> Regulated by ADGM FSRA</Text>
        </View>
        <View style={styles.media}>
            <FontAwesome6 name="x-twitter" size={20} color="white" />
            <FontAwesome6 name="tiktok" size={20} color="white" />
            <FontAwesome6 name="youtube" size={20} color="white" />
            <FontAwesome6 name="facebook-f" size={20} color="white" />
            <FontAwesome6 name="instagram" size={20} color="white" />
        </View>
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: 16,
        marginVertical: 4,
    },
    media: {
        flexDirection: 'row',
        gap: 35,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
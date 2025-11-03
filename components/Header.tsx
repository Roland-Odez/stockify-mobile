import { useMenuAnimation } from '@/context/MenuAnimationContext';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Link } from 'expo-router';
import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

const Header = () => {
  const {menuOpen} = useMenuAnimation()





  return (
    <View style={styles.container}>
      
      {/* logo - link - menubar */}
      <View style={styles.row}>
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.img}
          resizeMode='cover'
        />
        <View className='flex flex-row items-center'>
          {/* Link */}
          <Link href='/(auth)/get-started' asChild>
            <View style={styles.link}>
              <MaterialIcons name="person-add-alt" size={20} color="black" />
              <Text style={styles.linkText}>Create account</Text>
            </View>
          </Link>

          {/* Hamburger */}
          <Pressable
            onPress={() => {
              menuOpen.value = menuOpen.value ? 0 : 1
            }}
          >
            <View className='pl-2'>
              <Ionicons name="menu" size={27} color="white" />
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    position: 'relative'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  img: {
    width: 25,
    height: 25,
  },
  link: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00FF99', // your nemo-green
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 50,
  },
  linkText: {
    marginLeft: 6, // 👈 replaces gap
    fontWeight: '600',
  },
});

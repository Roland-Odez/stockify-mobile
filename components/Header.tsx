import { useMenuAnimation } from '@/context/MenuAnimationContext';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Fontisto from '@expo/vector-icons/Fontisto';
import Foundation from '@expo/vector-icons/Foundation';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Href, Link, useLocalSearchParams, usePathname } from 'expo-router';
import React, { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';


interface TabLinkTypes {
    name: string;
    path: Href;
    icon: (active: boolean)=> React.ReactElement;
}

const Header = () => {
  const {menuOpen} = useMenuAnimation()
  const [search, setSearch] = useState('')
  const params = useLocalSearchParams()
  const pathname = usePathname()
  console.log(pathname)

  const tabLink: TabLinkTypes[] = [
    { 
      name: 'Stocks & ETFs', 
      path: '/(tabs)/discovery?tab=stocks',
      icon: (active) => <View className='w-7 h-7 items-center justify-center rounded-full' style={{backgroundColor: active? 'black':'white'}}><FontAwesome name="building" size={15} color={active? 'white':'black'} /></View>
    },
    { 
      name: 'Crypto', 
      path: '/(tabs)/discovery?tab=crypto',
      icon: (active) => <View className='w-7 h-7 items-center justify-center rounded-full' style={{backgroundColor: active? 'black':'white', transform: 'rotate(20deg)'}}><Foundation name="bitcoin" size={20} color={active? 'white':'black'} /></View>
    },
    { 
      name: 'Boost', 
      path: '/(tabs)/discovery?tab=boost',
      icon: (active) => <View className='w-7 h-7 items-center justify-center rounded-full' style={{backgroundColor: active? 'black':'white'}}><MaterialIcons name="bolt" size={20} color={active? 'white':'black'} /></View>
    }
  ]



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
      
      {
        !pathname.endsWith('/portfolio') &&
         (<>
          <View style={styles.row}>
            <View className='bg-nemo-lightPurple rounded-md px-4 flex-row items-center flex-1 gap-2 my-6'>
              <Fontisto name="search" size={15} color="#878585e8" />
              <TextInput 
                onChangeText={setSearch}
                placeholder='Search assets and topics'
                placeholderTextColor='#878585e8'
                value={search}
                className='text-lg text-[#878585e8]'/>
            </View>
          </View>
          <View style={[styles.row, {justifyContent: 'flex-start',}]} className='gap-2'>
            {
              tabLink.map((tab, idx) => {
                const isActiveInner = params.tab === tab.path.toString().split('=')[1]
              return (<Link href={tab.path} key={`${tab.name}-${idx}`}>
                <View style={[styles.link, {backgroundColor: isActiveInner ? '#eb4fc2':'#221f2a', borderRadius: 5, paddingVertical: 10, flex: 1}]}>
                  {tab.icon(isActiveInner)}
                  <Text style={[styles.linkText, {color: isActiveInner ? 'black': 'white'}]}>{tab.name}</Text>
                </View>
              </Link>
              )})
            }
          </View>
        </>)
      }
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
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

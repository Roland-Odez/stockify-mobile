import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { Tabs } from 'expo-router';


export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <>
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#000',
        },
        tabBarInactiveTintColor: '#878585e8',
      }}>
        
      <Tabs.Screen
        name="portfolio"
        options={{
          title: 'Portfolio',
          tabBarIcon: ({ focused }) => <SimpleLineIcons name="bag" size={22} color={focused ? 'white': '#878585e8'} />,
        }}
      />
      <Tabs.Screen
        name="discovery"
        options={{
          title: 'Discovery',
          tabBarIcon: ({ focused }) => <FontAwesome6 name="earth-americas" size={22} color={focused ? 'white': '#878585e8'} />,
        }}
      />
      <Tabs.Screen
        name="invest"
        options={{
          title: 'Invest',
          tabBarIcon: ({ focused }) => <AntDesign name="dollar" size={22} color={focused ? 'white': '#878585e8'} />,
        }}
      />
      <Tabs.Screen
        name="stockify-ai"
        options={{
          title: 'Stockify AI',
          tabBarIcon: ({ focused }) => <FontAwesome6 name="microchip" size={22} color={focused ? 'white': '#878585e8'} />,
        }}
      />
    </Tabs>
    </>
  );
}

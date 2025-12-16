import { useState } from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';

const Notifications = () => {
    const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(prev => !prev);
  return (
    <View className='flex-row items-center justify-between p-4'>
      <Text className='text-lg text-white'>Market Notifications</Text>
      <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isEnabled ? '#1974cf' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  )
}

export default Notifications

const styles = StyleSheet.create({})
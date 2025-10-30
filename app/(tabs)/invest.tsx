import { StyleSheet, Text, View } from 'react-native'

const Invest = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Invest</Text>
    </View>
  )
}

export default Invest

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'white'
  }
})
import { StyleSheet, Text, View } from 'react-native'

const StockifyAI = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>StockifyAI</Text>
    </View>
  )
}

export default StockifyAI

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
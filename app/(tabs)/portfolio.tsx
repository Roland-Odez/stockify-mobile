import { StyleSheet, Text, View } from 'react-native'

const Portfolio = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Portfolio</Text>
    </View>
  )
}

export default Portfolio

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
import { StyleSheet, Text, View , Button } from 'react-native'
import React from 'react'

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Button title='take photo' onPress={()=>navigation.navigate('CameraScreen')}/>
      <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container : {
    justifyContent : 'center',
    alignItems: 'center',
    height : '100%'
  }
})
import { StyleSheet, Text, View , Image , Dimensions} from 'react-native'
import React , {useEffect} from 'react'
import image from '../../assets/images/homework.png'
import PushNotification from 'react-native-push-notification'
import { useDispatch , useSelector} from 'react-redux'
import { setColor, setSettings } from '../redux/actions/settingsActions'
import AsyncStorage from '@react-native-async-storage/async-storage'

const getSettings = async (dispatch) => {
    
  await AsyncStorage.getItem('settings').then(settings => {
    let transformedData = JSON.parse(settings);
    console.log(settings)
    if (typeof transformedData === 'object') {
      dispatch(setSettings(transformedData))
    }
  }).catch(err => console.log(err))
}
const SplashScreen = ({ navigation }) => {

  const dispatch = useDispatch()
  const {settings} = useSelector(state =>state.settings)
  
  useEffect(() => {
    getSettings(dispatch)
    createChannels()
    setTimeout(() => {
      navigation.navigate('TabScreen')
      
    },2000)
  }, [])
  const createChannels = () => {
    PushNotification.createChannel({
      channelId: 'test-channel',
      channelName : 'test Channel'
    })
  }
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.header}>To Do App</Text>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : '#f53',
    alignItems: 'center',
    justifyContent : 'center'
  },
  image: {
    width: Dimensions.get('screen').width * .5,
    height : Dimensions.get('screen').height * .23
  },
  header: {
    fontSize: 30,
    color: 'white',
    fontWeight : '900'
  }
})
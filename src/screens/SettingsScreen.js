import {
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
    Linking,
  ToastAndroid
} from 'react-native';
import React, {useState} from 'react';
import SideBarColor from '../components/sideBarColor/SideBarColor';
import {Switch} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useSelector, useDispatch} from 'react-redux';
import {setColor , setMuteNotification as setNotify} from '../redux/actions/settingsActions';
import localStorage from '@react-native-async-storage/async-storage'

const SettingsScreen = () => {
  const [muteNotification, setMuteNotification] = useState('');

  const dispatch = useDispatch();
    const { settings } = useSelector(state => state.settings);
    
    const changeMuteNotificationHandler = async () => {
        
        dispatch(setNotify(!settings.muteNotification))
        const transformedData = JSON.stringify({...settings ,muteNotification : settings.muteNotification})
        await localStorage.setItem('settings', transformedData).then(() => {
            ToastAndroid.show('the App in cilent mode' , 2000)
        }).catch(e=>console.log(e))
        
    }
    const changeColorHandler = async (color) => {
        dispatch(setColor(color))
        const transformedData = JSON.stringify({...settings , color})
        await localStorage.setItem('settings', transformedData).then(() => {
            ToastAndroid.show('the App color has been changed' , 2000)
        }).catch(e=>console.log(e))
        
    }
  return (
    <View style={styles.settingsContainer}>
      <View style={styles.dataContainer}>
        <View style={styles.titleContainer}>
          <Text style={{fontSize: 15, fontWeight: 'bold'}}>Settings</Text>
        </View>
        <View style={styles.elementContainer}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{marginRight: 10}}>
              <Icon name="bell" color={'#ccc'} solid size={15} />
            </Text>
            <Text>Mute Notification</Text>
          </View>
          <Switch
            value={settings.muteNotification}
            color={'#900'}
            onValueChange={() => changeMuteNotificationHandler()}
          />
        </View>
        <TouchableNativeFeedback
          onPress={() => {
            Linking.openURL('https://www.facebook.com/Prophet.lov/');
          }}>
          <View style={styles.elementContainer}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{marginRight: 10}}>
                <Icon name="envelope" color={'#ccc'} solid size={15} />
              </Text>
              <Text>Help & Support</Text>
            </View>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback
          onPress={() => {
            Linking.openURL('https://github.com/mostafaM212');
          }}>
          <View style={styles.elementContainer}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{marginRight: 10}}>
                <Icon name="eye" color={'#ccc'} solid size={15} />
              </Text>
              <Text>Feedback</Text>
            </View>
          </View>
        </TouchableNativeFeedback>
        <View
          style={{
            alignItems: 'flex-end',
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <Text style={{marginRight: 10, marginTop: 10}}>
            <Icon name="arrow-right" color={'#ccc'} solid size={15} />
          </Text>
          <Text style={{fontSize: 8}}>
            © All copyright Reserved by Mostafa Mohamed Development
          </Text>
        </View>
      </View>

      <SideBarColor
        color={settings.color}
        changeColorHandler={color => changeColorHandler(color)}
      />
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  settingsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccc',
  },
  elementContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    margin: 5,
    height: 75,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  dataContainer: {
    backgroundColor: '#ffff',
    width: '90%',
    height: '60%',
    borderRadius: 20,
    borderTopEndRadius: 20,
    elevation: 5,
    padding: 5,
    overflow: 'hidden',
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 75,
    backgroundColor: '#ffff',
    borderBottomColor: '#ccc',
    borderBottomWidth: 2,
  },
});

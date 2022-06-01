import {StyleSheet, Text, View, TouchableNativeFeedback} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useSelector} from 'react-redux';

const SingleTaskButtons = ({
  editTaskHandler,
  showNotificationModal,
  navigation,
}) => {
  const {settings} = useSelector(state => state.settings);
  return (
    <View style={styles.buttonsContainer}>
      <View style={styles.singleButtons}>
        <TouchableNativeFeedback onPress={() => {
          if (!settings.muteNotification) {
            showNotificationModal()
          }
        }}>
          <View
            style={
              settings.muteNotification
                ? [{...styles.notificationButton}, {backgroundColor: '#cccc'}]
                : {...styles.notificationButton}
            }>
            <Icon name="bell" size={25} color={'white'} solid />
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback
          onPress={() => navigation.navigate('CameraScreen')}>
          <View style={styles.notificationButton}>
            <Icon name="camera" size={25} color={'white'} solid />
          </View>
        </TouchableNativeFeedback>
      </View>

      <TouchableNativeFeedback onPress={editTaskHandler}>
        <View style={styles.editButton}>
          <Icon name="edit" size={25} color={'white'} solid />
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

export default SingleTaskButtons;

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'column',
    alignSelf: 'center',
    width: '90%',
    alignItems: 'center',
    height: 120,
  },
  editButton: {
    backgroundColor: '#0080ff',
    height: 40,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 4,
    marginTop: 10,
    width: '100%',
  },
  notificationButton: {
    backgroundColor: '#32de84',
    height: 50,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginLeft: 5,
  },
  singleButtons: {
    flexDirection: 'row',
    width: '100%',
  },
});

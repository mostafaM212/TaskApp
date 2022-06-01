import {
  StyleSheet,
  Text,
  View,
  Modal,
  Dimensions,
  TextInput,
  TouchableNativeFeedback,
} from 'react-native';
import React, {useState} from 'react';
import propTypes from 'prop-types';

const NotificationModal = ({show, closeModal , addNotificationHandler}) => {
  const [minutes, setMinutes] = useState(0);
  return (
    <Modal
      visible={show}
      animationType="slide"
      transparent
      onRequestClose={closeModal}
      hardwareAccelerated>
      <View style={styles.modal}>
        <View style={styles.dataContainer}>
          <View style={styles.inputsContainer}>
            <Text style={styles.title}>Remind me After</Text>
            <TextInput
              keyboardType="numeric"
              value={minutes}
              onChangeText={text => setMinutes(text)}
              textAlign="center"
              style={styles.textInput}
            />
            <Text style={styles.title}>minute(s)</Text>
            <View style={styles.buttonsContainer}>
              <TouchableNativeFeedback onPress={closeModal}>
                <View style={styles.buttonContainer}>
                  <Text style={[{...styles.title}, {color: 'red'}]}>
                    cancel
                  </Text>
                </View>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback onPress={()=>addNotificationHandler(minutes)}>
                <View style={styles.buttonContainer}>
                  <Text style={[{...styles.title}, {color: 'green'}]}>ok</Text>
                </View>
              </TouchableNativeFeedback>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default NotificationModal;

NotificationModal.propTypes = {
    show: propTypes.bool.isRequired,
    closeModal: propTypes.func.isRequired,
    addNotificationHandler : propTypes.func.isRequired
    
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: '#00000099',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dataContainer: {
    width: Dimensions.get('window').width * 0.7,
    height: Dimensions.get('window').height * 0.3,
    backgroundColor: '#ffffff',
    borderRadius: 15,

    alignItems: 'center',
    alignContent: 'space-around',
  },
  inputsContainer: {
    alignItems: 'center',
    height: '100%',
    justifyContent: 'space-around',
  },
  textInput: {
    width: 50,
    height: 50,
    borderColor: '#ccc',
    borderWidth: 2,
    color : 'black'
  },
  title: {
    fontSize: 20,
    color : 'black'
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Dimensions.get('window').width * 0.5,
  },
  buttonContainer: {
    color: 'red',
  },
});

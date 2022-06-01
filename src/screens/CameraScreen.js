import {StyleSheet, Text, View, TouchableNativeFeedback} from 'react-native';
import React from 'react';
import {RNCamera} from 'react-native-camera';
import {useCamera} from 'react-native-camera-hooks';
import { Button } from 'react-native-paper';
import RNFS from 'react-native-fs';
import { useDispatch } from 'react-redux';
import { setImage } from '../redux/actions/imageActions';


const CameraScreen = ({navigation}) => {
  const [{ cameraRef }, { takePicture }] = useCamera(null);
  const dispatch = useDispatch()

  const takePhoto = async () => {
    
    try {
        let picture = await takePicture();
      
        const oldPath = picture.uri;
        const newPath = RNFS.ExternalDirectoryPath + '/myTest.jpg';
        dispatch(setImage({...picture }))
          navigation.goBack()
        /*await RNFS.moveFile(oldPath, newPath).then(() => {
          console.log('file moved from', oldPath, ' **to **', newPath)
          
        })*/
    } catch (error) {
      console.log(error)
    }
  }
  return (
    
      <View style={styles.container}>
        <RNCamera
          ref={cameraRef}
          type={RNCamera.Constants.Type.back}
          style={styles.camera}
        />
        <Button onPress={takePhoto} >take photo</Button>
      </View>
    
  );
};

export default CameraScreen;

const styles = StyleSheet.create({
  camera: {
    flex : 1
  },
  container: {
    flex : 1,

  },
});

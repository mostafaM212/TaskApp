import {
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
  ImageBackground,
} from 'react-native';
import React from 'react';
import propTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome5';

const PhotoContainer = ({uri , deletePhotoHandler}) => {
  return (
    <View style={styles.imageContainer}>
      <ImageBackground source={{uri: uri}} style={styles.image}>
        <TouchableNativeFeedback onPress={deletePhotoHandler}>
          <View style={styles.notificationButton}>
            <Icon name="trash" size={25} color={'red'} solid />
          </View>
        </TouchableNativeFeedback>
      </ImageBackground>
    </View>
  );
};

PhotoContainer.propTypes = {
    uri: propTypes.string.isRequired,
    deletePhotoHandler : propTypes.func.isRequired
};
export default PhotoContainer;

const styles = StyleSheet.create({
  imageContainer: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 10,

    overflow: 'hidden',
  },
  image: {
    flex: 1,
    width: 150,
    height: 150,
  },
  notificationButton: {
    color: 'red',
    height: 50,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginLeft: 5,
    position: 'absolute',
      bottom: 2,
    right : 15
  },
});

import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import SingleColorViewer from './SingleColorViewer';

const SideBarColor = ({color , changeColorHandler}) => {
  
  
  return (
    <View style={styles.sideBarContainer}>
      <SingleColorViewer
        color="#f28b82"
        onPressHandler={selectedColor => changeColorHandler(selectedColor)}
        selectedColor={color === '#f28b82' ?true : false}
      />
      <SingleColorViewer
        color="#aecbfa"
        onPressHandler={selectedColor => changeColorHandler(selectedColor)}
        selectedColor={color === '#aecbfa'?true : false}
      />
      <SingleColorViewer
        color="#0080ff"
        onPressHandler={selectedColor => changeColorHandler(selectedColor)}
        selectedColor={color === '#0080ff'?true : false}
      />
      <SingleColorViewer
        color="#ccff90"
        onPressHandler={selectedColor => changeColorHandler(selectedColor)}
        selectedColor={color === "#ccff90"?true : false}
      />
    </View>
  );
};

export default SideBarColor;

const styles = StyleSheet.create({
  sideBarContainer: {
    width: '80%',
    alignItems: 'center',
    marginVertical: 10,
    borderColor: '#ccc',
    borderWidth: 2,
    alignSelf: 'center',
    height: 60,
    borderRadius: 10,
    flexDirection: 'row',
    overflow: 'hidden',
  },
});

import { View, Text , StyleSheet , TouchableNativeFeedback} from 'react-native'
import React from 'react';
import propTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome5';

const SingleColorViewer = ({ color, onPressHandler, selectedColor }) => {
    //console.log(selectedColor , color)
  return (
    <TouchableNativeFeedback onPress={()=>onPressHandler(color)}>
        <View style={{...styles.sideColorContainer , backgroundColor : color} }>
            {selectedColor &&(<Icon name={'check'} size={25} color={"#900"} />)}
        </View>
    </TouchableNativeFeedback>
  )
}

SingleColorViewer.propTypes = {
    color: propTypes.string.isRequired,
    onPressHandler: propTypes.func.isRequired,
    selectedColor : propTypes.bool.isRequired
}

const styles = StyleSheet.create({
    sideColorContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        height : '100%'
    }
})
export default SingleColorViewer; 
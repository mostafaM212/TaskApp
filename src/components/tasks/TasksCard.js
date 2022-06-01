import {
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
  Dimensions,
} from 'react-native';
import React from 'react';
import CheckBox from '@react-native-community/checkbox';
import propTypes from 'prop-types';
import { useSelector } from 'react-redux';


const TasksCard = ({
  title,
  description,
  id,
  navigation,
  date,
  isDone,
  color,
  image
}) => {
  const {settings}=useSelector(state =>state.settings)
  return (
    <TouchableNativeFeedback
      onPress={() =>
        navigation.navigate('SingleTaskScreen', {
          taskId: id,
          title 
        })
      }>
      <View style={styles.card}>
        <View style={ [{backgroundColor : color} , {...styles.taskColor}] }/>

        <View style={styles.infoContainer}>
          <View style={styles.header}>
            <Text style={[{...styles.title} , {color : settings.color}]} numberOfLines={1}>
              {title}
            </Text>
            <Text style={styles.subTitle} numberOfLines={1}>
              {date}
            </Text>
          </View>
          <View style={styles.isDone}>
            <Text style={styles.content} numberOfLines={1}>
              {description}
            </Text>
            <CheckBox value={isDone}  />
          </View>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};
TasksCard.propTypes = {
  title: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  navigation: propTypes.object.isRequired,
  date: propTypes.string.isRequired,
};

export default TasksCard;

const styles = StyleSheet.create({
  card: {
    marginVertical: 2,
    width: Dimensions.get('window').width*.96,
    
    borderBottomColor: '#cccc',
    borderBottomWidth: 1,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    flexDirection: 'row',
    borderRadius: 20,
    overflow: 'hidden',
    borderBottomStartRadius: 20,
    elevation :2
  },
  title: {
    fontSize: 25,
    fontFamily: 'italic',
    
    margin: 5,
  },
  subTitle: {
    fontSize: 11,
  },
  content: {
    fontSize: 18,
    color: '#9999',
    width : '90%'
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  isDone: {
    flexDirection: 'row',
    width : '100%',
    justifyContent: 'space-between',
  },
  taskColor: {
    width: '5%',
    height: '100%',
    
  },
  infoContainer: {
    width: '95%',
    padding : 5
  }
});

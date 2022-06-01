import {
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
  FlatList,
  Button
} from 'react-native';
import React, {useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {getTasks} from './AddTaskScreen';
import {useSelector, useDispatch} from 'react-redux';
import TasksCard from '../components/tasks/TasksCard';

const ToDoListScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {tasks} = useSelector(state => state.tasks);
  const {settings} = useSelector(state => state.settings);

  useEffect(() => {
    getTasks(dispatch);

  }, [tasks]);

  return (
    <View style={styles.container}>
      {tasks.length > 0 ? (
        <FlatList
          data={tasks}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TasksCard
              title={item.title}
              description={item.description}
              id={item.id}
              date={item.date ? item.date : new Date().toLocaleDateString()}
              isDone={item.isDone}
              color={item.color}
              image={item.image}
              navigation={navigation}
            />
          )}
        />
      ) : (
        <View style={styles.notFound}>
          <Text>Add Some Tasks</Text>
        </View>
      )}
      <TouchableNativeFeedback
        onPress={() => navigation.navigate('AddTaskScreen')}>
        <View style={[{...styles.plusButton} , {backgroundColor : settings.color}]}>
          <Icon name="plus" size={25} color="#ffffff" solid />
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

export default ToDoListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: 2,
    height: '100%',
  },
  plusButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    
    position: 'absolute',
    bottom: 10,
    right: 10,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  plus: {
    fontSize: 20,
    color: 'white',
    paddingBottom: 10,
  },
  notFound: {
    fontSize: 25,
  },
});

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setTasks} from '../redux/actions/actions';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getTasks = async dispatch => {
  try {
    await AsyncStorage.getItem('tasks').then(tasks => {
      const pursedTasks = JSON.parse(tasks);
      if (pursedTasks && typeof pursedTasks === 'object') {
        dispatch(setTasks(pursedTasks));
      }
    });
  } catch (error) {
    console.log(error);
  }
};

const AddTaskScreen = ({navigation}) => {
  let {tasks} = useSelector(state => state.tasks);

  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [showIndicator, setShowIndicator] = useState(false);
  useEffect(() => {
    getTasks(dispatch);
  }, []);

  const AddTaskHandler = async () => {
    var newTask = {
      id: new Date(),
      date: new Date().toLocaleDateString(),
      isDone: false,
      color : '#ffffff',
      title,
      description,
      image : {}
    };
    const newTasks = [...tasks, newTask];
    if (title.length === 0 || description.length === 0) {
      ToastAndroid.show('Invalid Data Entery', 2000);
      return;
    } else {
        await AsyncStorage.setItem('tasks', JSON.stringify(newTasks))
            .then(() => {
            dispatch(setTasks(newTasks));
            ToastAndroid.show('the task has been added successfully', 2000);
            navigation.goBack();
            })
            .catch(e => {
            console.log(e);
            });
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.boxContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Title"
          value={title}
          onChangeText={text => setTitle(text)}
        />
        <TextInput
          style={styles.textInput}
          placeholder="description"
          multiline
          value={description}
          onChangeText={text => setDescription(text)}
        />
        <Button title="Submit" onPress={AddTaskHandler} />
      </View>
    </View>
  );
};

export default AddTaskScreen;

const styles = StyleSheet.create({
  textInput: {
    width: '90%',
    fontSize: 20,
    borderColor: 'blue',
    borderBottomWidth: 1,
    borderRadius: 6,
    marginVertical: 5,
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  boxContainer: {
    backgroundColor: 'white',
    width: '90%',
    elevation: 5,
    borderRadius: 6,
    padding: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    paddingVertical: 5,
  },
});

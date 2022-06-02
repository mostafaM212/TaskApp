import {
  StyleSheet,
  Text,
  View,
  ToastAndroid,
  Alert,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Button, ActivityIndicator, TextInput} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';
import localeStorage from '@react-native-async-storage/async-storage';
import {setTasks} from '../redux/actions/actions';
import CheckBox from '@react-native-community/checkbox';
import SideBarColor from '../components/sideBarColor/SideBarColor';
import Icon from 'react-native-vector-icons/FontAwesome5';
import SingleTaskButtons from '../components/SingleTaskComponents/SingleTaskButtons';
import NotificationModal from '../components/SingleTaskComponents/NotificationModal';
import PushNotification from 'react-native-push-notification';
import PhotoContainer from '../components/SingleTaskComponents/PhotoContainer';
import {setImage} from '../redux/actions/imageActions';

export const deleteTask = async (id, dispatch, tasks, navigation) => {
  const newTasks = tasks.filter(task => {
    return task.id !== id;
  });
  console.log(newTasks , id);

  try {
    await localeStorage.setItem('tasks', JSON.stringify(newTasks)).then(() => {
      dispatch(setTasks([...newTasks]));
      ToastAndroid.show('the task is removed successfully', 2000);
      navigation.goBack();
    });
  } catch (error) {
    console.log(error);
  }
};

const SingleTaskScreen = ({navigation, route}) => {
  const [task, setTask] = useState({});
  const [showNotificationModal, setShowNotificationModal] = useState(false);

  const dispatch = useDispatch();

  const {tasks} = useSelector(state => state.tasks);
  const {image} = useSelector(state => state.image);

  
  if (!image && task.image.hasOwnProperty('uri')) {
    dispatch(setImage(task.image));
  }
  useEffect(() => {
    const selectedTask = tasks.find(task => task.id === route.params.taskId);
    console.log(selectedTask);
    if (!task.hasOwnProperty('title')) {
      setTask(selectedTask);
    }
    navigation.setOptions({
      title: route.params.title,
      headerRight: () => (
        <Button
          color="red"
          onPress={() => {
            Alert.alert('Confirm', 'Do You Want To Delete That Task?', [
              {
                text: 'ok',
                onPress: () => {
                  deleteTask(route.params.taskId, dispatch, tasks, navigation);
                },
              },
              {
                text: 'cancel',
              },
            ]);
          }}>
          <Icon name={'trash'} size={15} color={'#900'} solid />
        </Button>
      ),
    });
  }, []);
  const editTaskHandler = async () => {
    let newTask = {
      ...task,
      image,
    };
    console.log(newTask);

    if (task.title.length > 3 && task.description.length > 5) {
      let newTasks = tasks.map(taskData => {
        if (taskData.id === task.id) {
          return newTask;
        }
        return taskData;
      });
      try {
        await localeStorage
          .setItem('tasks', JSON.stringify(newTasks))
          .then(data => {
            dispatch(setTasks(newTasks));
            ToastAndroid.show('the task has been updated successfully', 2000);
            navigation.goBack();
          });
      } catch (error) {
        console.log(error);
      }
      return;
    }
    ToastAndroid.show('Invalid Data', 2000);
  };
  const handleNotification = mintues => {
    PushNotification.localNotification({
      channelId: 'test-channel',
      title: task.title,
      message: task.description,
    });
    setShowNotificationModal(false);
  };
  return (
    <View style={styles.container}>
      {task ? (
        <ScrollView>
          <View>
            <NotificationModal
              show={showNotificationModal}
              closeModal={() => setShowNotificationModal(false)}
              addNotificationHandler={handleNotification}
            />
            <View>
              <TextInput
                placeholder="title"
                value={task.title}
                onChangeText={text =>
                  setTask(oldTask => {
                    return {
                      ...oldTask,
                      title: text,
                    };
                  })
                }
              />
              <TextInput
                placeholder="description"
                value={task.description}
                multiline
                onChangeText={text =>
                  setTask(oldTask => {
                    return {
                      ...oldTask,
                      description: text,
                    };
                  })
                }
              />
            </View>
            <View style={styles.isDoneContainer}>
              <Text style={{color: 'black'}}>is Done</Text>
              <CheckBox
                style={styles.isDoneCheckBox}
                value={task.isDone}
                onValueChange={newValue => {
                  setTask(oldTask => {
                    return {
                      ...oldTask,
                      isDone: newValue,
                    };
                  });
                }}
              />
            </View>
            <SideBarColor
              color={task.color}
              changeColorHandler={selectedColor =>
                setTask(oldTask => {
                  return {
                    ...oldTask,
                    color: selectedColor,
                  };
                })
              }
            />
            {image.hasOwnProperty('uri') && (
              <PhotoContainer uri={image.uri} deletePhotoHandler={() => {
                setTask(oldTask => {
                  return {
                    ...oldTask,
                    image : {}
                  }
                })
              }} />
            )}
            <SingleTaskButtons
              editTaskHandler={editTaskHandler}
              showNotificationModal={() => setShowNotificationModal(true)}
              navigation={navigation}
            />
          </View>
        </ScrollView>
      ) : (
        <ActivityIndicator size={50} color={'green'} />
      )}
    </View>
  );
};

export default SingleTaskScreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },

  isDoneContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  isDoneCheckBox: {
    marginTop: 10,
  },
});

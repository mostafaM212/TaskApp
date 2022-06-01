import AsyncStorage from '@react-native-async-storage/async-storage';

export const getTasks = async () => {
  try {
      const tasks = await AsyncStorage.getItem('tasks').then(tasks => {
        
          const pursedTasks = JSON.parse(tasks)
    });
  } catch (error) {}
};

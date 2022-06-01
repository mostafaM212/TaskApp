import {StyleSheet, Text, View, ScrollView, FlatList} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import TasksCard from '../components/tasks/TasksCard';

const DoneScreen = ({navigation}) => {
  const {tasks} = useSelector(state => state.tasks);

  let doneTasks = tasks.filter(task => task.isDone);

  return (
    <ScrollView style={styles.container}>
      <FlatList
        data={doneTasks}
        keyExtractor={task => task.id}
        renderItem={({item}) => (
          <TasksCard
            id={item.id}
            isDone={item.isDone}
            date={item.date}
            description={item.description}
            navigation={navigation}
            title={item.title}
            key={item.id}
            color ={item.color}
          />
        )}
      />
    </ScrollView>
  );
};

export default DoneScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

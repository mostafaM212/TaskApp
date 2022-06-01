export const SET_TASKS = 'SET_TASKS';
export const set_task_id = 'SET_TASKS_ID';

export const setTasks = tasks => dispatch => {
    
   
    dispatch({
        type: SET_TASKS,
        payload: tasks
    })
}


export const setTasksId = task_id => dispatch => {
    
    dispatch({
        type: setTasksId,
        payload: task_id
    })
}
import { setTasks, setTasksId, SET_TASKS, set_task_id } from "../actions/actions";

const initialState = {
    tasks: [],
    tasksId :1
}

export const reducer = (state = initialState , action) => {
    
    
    switch (action.type) {
        case SET_TASKS:
            
            return {...state , tasks : action.payload}
        case setTasksId:
            
            return {...state , tasksId : action.payload}
        default:
            return state;
    }
}
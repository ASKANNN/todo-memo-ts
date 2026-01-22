import './App.css';
import { useCallback, useState } from "react";
import Task from "./components/Task.tsx";

interface TaskType {
    id: number;
    text: string;
}

let taskId = 0;

const App = () => {
    const [tasks, setTasks] = useState<TaskType[]>([]);

    const deleteTask = useCallback((id: number) => {
        setTasks(prev => prev.filter(task => task.id !== id));
    }, []);

    const editTask = useCallback((id: number, text: string) => {
        setTasks(prev => prev.map(task => task.id === id ? { ...task, text } : task));
    }, []);

    const addTask = () => {
        setTasks(prev => [...prev, { id: taskId++, text: 'New task' }]);
    }

    return (
        <div className='field'>
            <button onClick={addTask} className='btn new'>Add task</button>
            {tasks.map((task, index) => (
                <Task
                    key={task.id}
                    id={task.id}
                    index={index}
                    text={task.text}
                    remove={deleteTask}
                    edit={editTask}
                />
            ))}
        </div>
    );
}

export default App;

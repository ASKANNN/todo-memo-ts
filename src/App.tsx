import './App.css';
import {useState} from "react";
import Task from "./components/Task.tsx";

const App = () => {
    const [tasks, setTasks] = useState<string[]>([]);

    console.log(`App rendered`)

    const deleteTask = (index: number) => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    }

    const ediTask = (index: number, text: string) => {
        const newTasks = [...tasks];
        newTasks[index] = text;
        setTasks(newTasks);
    }

    const addTask = () => {
        setTasks([...tasks, 'New task']);
    }

    return (
        <div className={'field'}>
            <button onClick={addTask} className={'btn new'}>Add task</button>
            {tasks.map((t, i) => <Task key={i + 1} index={i} remove={deleteTask} edit={ediTask}>{t}</Task>)}
        </div>
    )
}

export default App

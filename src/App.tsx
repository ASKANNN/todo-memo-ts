import './App.css';
import {useMemo, useState} from "react";
import Task from "./components/Task.tsx";

const App = () => {
    const [tasks, setTasks] = useState<string[]>([]);

    console.log(`App rendered`)

    const deleteTask = useMemo(() => (index: number) => {
        setTasks(prev => {
            const newTasks = [...prev];
            newTasks.splice(index, 1);
            return newTasks;
        });
    }, []);

    const ediTask = useMemo(() => (index: number, text: string) => {
        setTasks(prev => {
            const newTasks = [...prev];
            newTasks[index] = text;
            return newTasks;
        });
    }, []);


    const addTask = () => {
        setTasks(prev => [...prev, 'New task']);
    }

    return (
        <div className={'field'}>
            <button onClick={addTask} className={'btn new'}>Add task</button>
            {tasks.map((t, i) => <Task key={i + 1} index={i} remove={deleteTask} edit={ediTask}>{t}</Task>)}
        </div>
    )
}

export default App

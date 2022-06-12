import React from "react";

// Components Import
import { Form } from "../components/form/form";
import { TaskList } from "../components/taskList/taskList";
import { TimerContainer } from "../components/timerContainer/timerContainer";
import { Task } from "../models/task";
import style from './app.module.scss';

// Returns the app Component
export function App() {

  // Task List State
  const [tasks, setTasks] = React.useState<Task[]>([]);
  
  /**
   * add a new task to the task list
   * @param newTask the new task to be added to the list
   */
  const onAddTaskSubmit = (newTask:Task) => {
    setTasks([...tasks, newTask]);
  }

  return (
    <main className={style.appContainer}>

      <Form onSubmit={onAddTaskSubmit}/>
      <TaskList tasks={tasks}/>
      <TimerContainer timing="00:00"/>

    </main>
  );
}
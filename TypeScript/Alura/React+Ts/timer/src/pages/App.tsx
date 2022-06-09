import React from "react";

// Components Import
import { Form } from "../components/form/form";
import { TaskProps } from "../components/task/task";
import { TaskList } from "../components/taskList/taskList";
import style from './app.module.scss';

// Returns the app Component
export function App() {

  const [tasks, setTasks] = React.useState<TaskProps[]>([]);

  const onAddTaskSubmit = (subject:string, time:string) => {
    setTasks([...tasks, {name: subject, time: time}]);
  }

  return (
    <main className={style.appContainer}>

      <Form onSubmit={onAddTaskSubmit}/>
      <TaskList tasks={tasks}/>

    </main>
  );
}
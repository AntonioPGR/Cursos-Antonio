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
  const [selectedTask, setSelectedTask] = React.useState<Task | undefined>()
  
  /**
   * add a new task to the task list
   * @param newTask the new task to be added to the list
   */
  const onAddTaskSubmit = (newTask:Task) => {
    setTasks([...tasks, newTask]);
  }

  /**
   * update the task list changing the selected state of the task and unselecting the others
   * @param newSelectedTask the task to be selected
   */
  const onSelectTask = (newSelectedTask:Task) => {

    // mapeia o array, selecionando a tarefa clicada e desselecionando as demais
    setTasks(tasks.map(task => {

      const prevSelectTaskId = selectedTask?.getId()
      const newSelectTaskId = newSelectedTask.getId();
      const taskId = task.getId();
      const taskState = task.getSelected();

      // desmarca a task caso o id seja diferente da nova task selecionada
      if(taskState === true && taskId !== newSelectTaskId){
        task.unselect()
      }

      // caso o clique seja em cima de uma task já selecionada, desseleciona ela 
      if(prevSelectTaskId === newSelectTaskId){
        task.unselect()
        setSelectedTask(undefined)
      }
      // seleciona a task caso não esteja selecionada ainda
      else if(taskId === newSelectTaskId){

        task.select()
        setSelectedTask(task)

      }

      return task;
    }))

  }

  return (
    <main className={style.appContainer}>

      <Form onSubmit={onAddTaskSubmit}/>
      <TaskList tasks={tasks} onSelectTask={onSelectTask} />
      <TimerContainer timing="00:00"/>

    </main>
  );
}
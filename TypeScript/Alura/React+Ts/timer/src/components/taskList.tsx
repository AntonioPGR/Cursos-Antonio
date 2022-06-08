import { Task, TaskProps } from './task';

export interface TaskListProps {
  tasks?: TaskProps[];
}

export function TaskList(props: TaskListProps){
  const tasks = props.tasks? props.tasks : [];

  const renderTasks = () => {

    if(tasks.length === 0){
      return <p>Nenhuma tarefa agendada, que tal adicionar uma?</p>
    }

    return (
      <ul>
        {tasks.map((task, index) => <Task key={index} name={task.name} time={task.time} />)}
      </ul>
    )
  }

  return (
    <aside>
      <h2>Estudos do dia</h2>
      {renderTasks()}
    </aside>
  )
}

import { Task, TaskProps } from '../task/task';
import style from './taskList.module.scss'

export interface TaskListProps {
  tasks?: TaskProps[];
}

export function TaskList(props: TaskListProps){
  const tasks = props.tasks? props.tasks : [];

  const renderTasks = () => {

    if(tasks.length === 0){
      return <p className={style.warning}>Nenhuma tarefa agendada, que tal adicionar uma?</p>
    }

    return tasks.map((task, index) => <Task key={index} name={task.name} time={task.time} />)
  }

  return (
    <aside>
      <h2 className={style.title} >Estudos do dia</h2>
      <ul className={style.list}>
        {renderTasks()}
      </ul>
    </aside>
  )
}

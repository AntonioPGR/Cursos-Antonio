import { Task } from '../../models/task';
import { TaskComponent } from '../taskComponent/taskComponent';
import style from './taskList.module.scss'

export interface TaskListProps {
  tasks?: Task[];
}

const presetTasks : Task[] = [new Task("Task1", "00:10:00"), new Task("Task2", "00:20:00"), new Task("Task3", "00:30:00")];

export function TaskList(props: TaskListProps){

  // Task List State
  const tasks = props.tasks? [...presetTasks, ...props.tasks] : [...presetTasks];

  const handleTaskSelection = (newSelectedTask:Task) => {
    console.log(newSelectedTask);
  }

  /**
   * render the task list to be showed in de DOM
   * @returns the task list in JSX format
   */
  const renderTasks = () => {

    if(tasks.length === 0){
      return <p className={style.warning}>Nenhuma tarefa agendada, que tal adicionar uma?</p>
    }

    return tasks.map((task, index) => <TaskComponent onSelect={handleTaskSelection} key={index} task={task} />)
  }

  return (
    <aside className={style.container}>
      <h2 className={style.title} >Estudos do dia</h2>
      <ul className={style.list}>
        {renderTasks()}
      </ul>
    </aside>
  )
}

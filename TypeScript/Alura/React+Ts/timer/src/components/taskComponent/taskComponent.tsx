import { Task } from '../../models/task';
import style from './task.module.scss';

interface TaskProps {
  task: Task,
  onSelect: (selectedTask:Task) => void
}

export function TaskComponent({task}: TaskProps) {

  /**
   * Action to be performed when the task is clicked
   */
  const handleClick = () => {
    console.log(task);
  }

  return (
    <li onClick={handleClick} className={style.container}>
      <h3 className={style.title}> {task.getSubject()} </h3>
      <span className={style.time}> {task.getTime()} </span>
    </li>
  )

}
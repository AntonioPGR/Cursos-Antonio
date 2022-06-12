import { Task } from '../../models/task';
import style from './task.module.scss';

interface TaskProps {
  task: Task;
}

export function TaskComponent({task}: TaskProps) {

  return (
    <li className={style.container}>
      <h3 className={style.title}> {task.subject} </h3>
      <span className={style.time}> {task.time} </span>
    </li>
  )

}
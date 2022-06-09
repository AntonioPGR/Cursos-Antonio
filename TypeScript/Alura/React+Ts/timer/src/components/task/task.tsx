import style from './task.module.scss';

export interface TaskProps {
  name: string;
  time: string;
}

export function Task(props: TaskProps) {

  return (
    <li className={style.container}>
      <h3 className={style.title}> {props.name} </h3>
      <span className={style.time}> {props.time} </span>
    </li>
  )

}
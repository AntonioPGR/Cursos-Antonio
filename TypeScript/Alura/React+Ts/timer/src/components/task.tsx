export interface TaskProps {
  name: string;
  time: string;
}

export function Task(props: TaskProps) {

  return (
    <li>
      <h3> {props.name} </h3>
      <span> {props.time} </span>
    </li>
  )

}
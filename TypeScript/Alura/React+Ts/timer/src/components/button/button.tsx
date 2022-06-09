import style from './button.module.scss';

interface ButtonProps {
  text: string,
  onClickEvent: () => void;
}

export function Button(props: ButtonProps) {

  const handleClick = (ev:any) => {
    ev.preventDefault();
    props.onClickEvent();
  }

  return (
    <button onClick={(e) => handleClick(e)} className={style.button}>
      <span>{props.text} </span>
    </button> 
  )

}
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
    <button onClick={(e) => handleClick(e)}>
      {props.text} 
    </button> 
  )

}
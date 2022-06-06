interface ButtonProps {
  text: string
}

export function Button(props: ButtonProps) {

  return (
    <button>
      <span> {props.text} </span>
    </button> 
  )

}
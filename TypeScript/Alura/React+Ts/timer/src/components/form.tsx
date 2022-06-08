import { Button } from "./button";

interface FormProps {
  onSubmit: (subject:string, time:string) => void;
}

export function Form(props: FormProps) {

  const handleSubmitEvent = () => {
    
    const subject_input = document.querySelector("#study-subject-input") as HTMLInputElement;
    const subject = subject_input.value;
    const time_input = document.querySelector("#study-time-input") as HTMLInputElement;
    const time = time_input.value;

    props.onSubmit(subject, time);

  }

  return(
    <form>
      <div className="form-element" id="study-subject-input-content">
        <label htmlFor="study-subject-input">
          Adicionar um novo estudo
        </label>
        <input 
          type="text" 
          name="study-subject" 
          id="study-subject-input" 
          placeholder="O que deseja estudar?"
          required
        />
      </div>
      <div className="form-element" id="study-time-input-content">
        <label htmlFor="study-time-input">tempo</label>
        <input 
          type="time" 
          step="1"
          min="00:00:00"
          max="02:00:00"
          name="study-time" 
          id="study-time-input" 
          required
        />
      </div>

      <Button text="Adicionar" onClickEvent={() => handleSubmitEvent()} />

    </form>
  )
}
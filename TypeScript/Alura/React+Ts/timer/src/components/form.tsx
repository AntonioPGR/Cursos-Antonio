import { Button } from "./button";

interface FormProps {}

export function Formulario(props: FormProps) {
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

      <Button text="Adicionar" />

    </form>
  )
}
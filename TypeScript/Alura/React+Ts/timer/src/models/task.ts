import { v4 as uuidv4} from 'uuid';

export class Task{

  private id: string
  private selected: boolean
  private completed: boolean

  constructor(
    private subject: string,
    private time: string,
  ){
    this.id = uuidv4()
    this.selected = false
    this.completed = this.time === "00:00:00"? true:false
  }

  public select(){
    this.selected = true;
  }
  public unselect(){
    this.selected = false
  }
  public complete(){
    this.completed = true
  }
  public decreaseTime(){

  }

  /* GETTERS */
  getTime(){
    return this.time
  }
  getSubject(){
    return this.subject
  }
  getId(){
    return this.id
  }
  getSelected(){
    return this.selected
  }
  getCompleted(){
    return this.completed
  }

  /* SETTERS */
  setSubject(subject: string){
    this.subject = subject
  }

}
import { v4 as uuidv4} from 'uuid';

export class Task{

  private id: string
  private selected: boolean
  private completed: boolean
  private time: number

  constructor(
    private subject: string,
    private formatedTime: string,
  ){
    this.id = uuidv4();
    this.selected = false;
    this.time = Task.timeToNumber(formatedTime);
    this.completed = this.time === 0? true:false;
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

  /* STATIC */
  static timeToNumber(time: string){
    let timeArray = time.split(':');
    let hours = Number(timeArray[0]);
    let minutes = Number(timeArray[1]);
    let seconds = Number(timeArray[2]);

    return hours * 3600 + minutes * 60 + seconds;
  }

  /* GETTERS */
  getSeconds(){
    return this.time
  }
  getFormatedTime(){
    return this.formatedTime
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
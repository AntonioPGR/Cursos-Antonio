import { msgViewType } from "../interfaces/msgViewType.js";
import { View } from "./view.js";

export class MensagensViews extends View <string>{
  
  protected template(model : string) : string{

    return `
      <p class="alert alert-info"> ${model} </p>
    `

  }

}
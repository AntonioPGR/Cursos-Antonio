import { View } from "./view.js";
export class MensagensViews extends View {
    template(model) {
        return `
      <p class="alert alert-info"> ${model} </p>
    `;
    }
}

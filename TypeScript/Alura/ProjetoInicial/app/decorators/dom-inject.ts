export function domInjector(selector:string){
  return function(target:any, key:string){

    let element : HTMLElement | null;

    const getter = function(){
      if(!element){
        element = document.querySelector(selector) as HTMLElement;
        console.log(`definida o valor ${element} para ${key}`)
      }
      
      return element;
    }

    Object.defineProperty(
      target, 
      key,
      {get:getter})

  }
}
export function domInjector(selector:string){
  return function(target:any, key:string){

    const getter = function(){
      const element = document.querySelector(selector) as HTMLElement;
      console.log(`definida o valor ${element} para ${key}`)
      return element;
    }

    Object.defineProperty(
      target, 
      key,
      {get:getter})

  }
}
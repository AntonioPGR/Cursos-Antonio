export function inspecionarMetodo(){

  return (
    (target : any,
     propertyKey : string,
     descriptor : PropertyDescriptor) => {

       const OriginalMethod = descriptor.value;

       descriptor.value = function (...args : any[]) {
        
        console.log("--------")
        console.log(`Método: ${propertyKey}`)
        console.log(`parâmetros: ${JSON.stringify(args)}`)

        const r1 = OriginalMethod.apply(this, args);

        console.log(`-retorno: ${r1}`)
        console.log("--------")

        return r1
       }

       return descriptor

    }
  )

}
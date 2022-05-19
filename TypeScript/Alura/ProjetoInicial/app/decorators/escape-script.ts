export function escapeScript(){

  return (
    target: any,
    key: string,
    descriptor: PropertyDescriptor
  ) => {
    const metodoOriginal = descriptor.value
    descriptor.value = function(...args : any[]){

      let response = metodoOriginal.apply(this, args)
      if(typeof response === "string"){
        // console.log(`@escape-script na classe ${this.constructor.name} para o método ${key}`)
        response = response.replace(/<script>[\s\S]*?<\/script>/, '')
      }
      return response

    }
    return descriptor
  }

}
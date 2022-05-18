type TimeOption = 's' | 'ms'

export function logarTempoDeExecucao(tm:TimeOption="ms"){

  return (
    target : any,
    propertyKey : string,
    descriptor : PropertyDescriptor
  ) => {
    const metodoOriginal = descriptor.value;

    descriptor.value = function(...args: any[]) {

      const t1 = performance.now()
      const resposta = metodoOriginal.apply(this, args)
      const t2 = performance.now()

      let time = (t2 - t1);
      if(tm == 's'){
        time /= 1000;
      }
      console.log(`${propertyKey}, Tempo de execução: ${time} ${tm}`)
      resposta
    }

    return descriptor;
  }

}


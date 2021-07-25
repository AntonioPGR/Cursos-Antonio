(()=>{
    const map = new Map()
    
    map.set('personagens', ['levi', 'eren', 'erwin'])
    map.set('anime', 'Shingeki no Kyojin')

    if (!map.has('hate')){
        map.set('hate', 10)
    }

    console.log(map)
    console.log(`O anime ${map.get('anime')} possui os personagens ${map.get('personagens')} e tem nota ${map.get('hate')}`)
})()

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

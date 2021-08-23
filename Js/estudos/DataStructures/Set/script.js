(()=>{
    const set = new Set()

    set.add(['levi', 'eren', 'erwin'])
    set.add('Shingeki no Kyojin')

    if (!set.has(10)){
        set.add(10)
    }

    console.log(set)
})()
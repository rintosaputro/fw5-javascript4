const divideAndSort = (num) => {
    while(typeof(num) !== 'number') {
        console.log(num)
    }

    const toStr = String(num)
    let tempo = []
    let result = []

    for(let i = 0; i<toStr.length; i++) {
        if(toStr[i] != '0') {
            tempo.push(toStr[i])
        } 
        if((toStr[i] == '0') || (i == toStr.length-1)) {
            tempo.sort()
            result.push(...tempo)
            tempo = []
        }
    }

    const arrJoin = Number(result.join(''))
    console.log(arrJoin)
}

divideAndSort(5956560159466056)

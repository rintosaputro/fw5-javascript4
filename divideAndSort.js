const divideAndSort = (num) => {
    while(typeof(num) !== 'number') {
        console.log(num)
    }

    const toStr = String(num)
    let tempo = []
    let result = []

    for(let i = 0; i<toStr.length; i++) {
        if(toStr[i] != '0') {
            let toInt = Number(toStr[i])
            tempo.push(toInt)
        } 
        if((toStr[i] == '0') || (i == toStr.length-1)) {
            tempo.sort()
            result.push(...tempo)
            tempo = []
        }
    }

    console.log(...result)
}

divideAndSort(5956560159466056)

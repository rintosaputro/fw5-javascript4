// reverse word dengan looping seperti pada flowchart
const reverseWord = (kalimat) => {
    while(typeof(kalimat) !== 'string') {
        console.log(kalimat)
    }

    let res = ''
    let found = ''

    for(let i = 0; i<=kalimat.length; i++) {
        if(kalimat[i]) {
            found = found + kalimat[i]
        }
        if(kalimat[i] == ' ') {
            res = found + res
            found = ''
        }
        if(i == kalimat.length) {
            res = found + ' ' + res
            found = ''
        }
    }
    console.log(res)
}
reverseWord('Saya belajar Javascript')


// reverse word dengan method javascript
const reverseWord2 = (kalimat) => {
    while(typeof(kalimat) !== 'string') {
        console.log(kalimat)
    }

    const splitKalimat = kalimat.split(' ')
    const revKalimat = splitKalimat.reverse()
    const res = revKalimat.join(' ') 
    console.log(res)
}
reverseWord2('html css')
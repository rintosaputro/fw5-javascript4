// Menggunakan perulangan seperti pada flowchart
const palindrome = (teks) => {
    while(typeof(teks) !== 'string') {
        console.log(teks)
    }
    
    let reverse = ''

    for(let i = teks.length-1; i>=0; i--) {
        reverse += teks[i]
    }

    if(reverse.toLowerCase() == teks.toLowerCase()) {
        console.log('Palindrome')
    } else {
        console.log('Not Palindrome')
    }
}
palindrome('Malam')


// Menggunakan method javascript
const palindrome2 = (teks) => {
    while(typeof(teks)!=='string') {
        console.log(teks)
    }
    
    const smallTeks = teks.toLowerCase()
    const splitTeks = smallTeks.split('')
    const revTeks = splitTeks.reverse()
    const reverse = revTeks.join('')

    if(reverse == smallTeks) {
        console.log('Palindrome')
    } else {
        console.log('Not Palindrome')
    }
}
palindrome2('kotak')

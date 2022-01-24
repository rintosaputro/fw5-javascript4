// Menggunakan perulangan seperti pada flowchart
const palindrome = (teks) => { // deklarasi function palindrome dengan parameter teks
    while(typeof(teks) !== 'string') { // deklarasi while untuk validasi dengan pengkondisian type data teks apakah tidak string 
        console.log(teks) // jika teks bukan string maka mencetak nilai teks
    }
    
    let reverse = '' // deklarasi reverse yang nanti akan diisi hasil pembalikan teks

    for(let i = teks.length-1; i>=0; i--) { // perulangan dengan for dimana nilai awal i adalah panjang dari teks - 1, pengkondisian i >=0, i akan dikurangi satu jika pengkondisannya masih benar
        reverse += teks[i] // nilai reverse akan ditambah dengan teks[i]
    }

    if(reverse.toLowerCase() == teks.toLowerCase()) { // pengkondisian apakah nilai reverse dan teks yang telah diubah ke huruf kecil nilainya sama
        console.log('Palindrome') // jika sama maka mencetak pesan 'Palindrome'
    } else { // jika reverse dan teks tidak sama
        console.log('Not Palindrome') // akan mencetak pesan 'Not Palindrome'
    }
}
palindrome('Malam') // memanggil fungsi palindrome dengan mengisi parameter nya 'Malam'
// Output: Palindrome


// Menggunakan method javascript
const palindrome2 = (teks) => { // deklarasi function palindrome2 dengan parameter teks
    while(typeof(teks)!=='string') { // deklarasi while untuk validasi dengan pengkondisian type data teks apakah tidak string 
        console.log(teks) // jika teks bukan string maka mencetak nilai teks
    }
    
    const smallTeks = teks.toLowerCase() // deklarasi smallTeks yang berisi perintah mengubah nilai teks menjadi huruf kecil semua dengan toLowerCase()
    const splitTeks = smallTeks.split('') // deklarasi splitTeks yang akan membagi nilai smallTeks menjadi substring ke dalam array
    const revTeks = splitTeks.reverse() // deklarasi revTeks yang akan membalikan nilai array dari splitTeks dengan reverse()
    const reverse = revTeks.join('') // deklarasi reverse yang akan menggabungkan seluruh nilai di revTeks dengan join('')

    if(reverse == smallTeks) { // melakukan pengkondisian apakah nilai dari reverse dan smallTeks sama
        console.log('Palindrome') // jika kondisi true akan mencetak 'Palindrome'
    } else { // pengkondisian jika reverse dan smallTeks berbeda 
        console.log('Not Palindrome') // mencetak pesan 'Not Palindrome'
    }
}
palindrome2('kotak') // memanggil fungsi palindrome2 dengan mengisi parameter teks 'kotak'
// Output: Not Palindrome
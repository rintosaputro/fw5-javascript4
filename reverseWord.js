// reverse word dengan looping seperti pada flowchart
const reverseWord = (kalimat) => { // deklarasi function reverseWord dengan parameter kalimat
    while(typeof(kalimat) !== 'string') { // validasi nilai kalimat dengan while dengan pengkondisian apakah type data kalimat bukan string
        console.log(kalimat) // jika pengkondisian true akan mencetak nilai dari kalimat
    }

    let res = '' // deklarasi res sebagai nilai akhir
    let found = '' // deklarsi found sebagai penempatan nilai sementara

    for(let i = 0; i<=kalimat.length; i++) { // perulangan dengan for dimana nilai awal i adalah 0, pengkondisian i kurang dari sama dengan panjang kalimat, i akan ditambah satu jika pengkondisannya masih benar
        if(kalimat[i]) { // pengkondisian apakah kalimat[i] ada nilainya
            found = found + kalimat[i] // jika true nilai found akan ditambah kalimat[i]
        }
        if(kalimat[i] == ' ') { // pengkondisian jika nilai kalimat[i] adalah string kosong
            res = found + res // nilai dari res akan ditambah found kemudian ditambah nilai dari res sebelumnya
            found = '' // nilai dari found akan dikosongkan
        }
        if(i == kalimat.length) { // pengkondisian jika nilai i sama dengan panjang kalimat
            res = found + ' ' + res // nilai res akan ditambah nilai found kemudian ditambah spasi kemudian ditambah nilai dari res sebelumnya
            found = '' // mengkosongkan nilai found
        }
    }
    console.log(res) // mencetak nilai dari res
}
reverseWord('Saya belajar Javascript') // memanggil fungsi reverseWord dengan mengisi parameter kalimat dengan nilai 'Saya belajar Javascript'
// Output: Javascript belajar Saya 


// reverse word dengan method javascript
const reverseWord2 = (kalimat) => { // deklarasi fungsi reverseWord2 dengan parameter kalimat
    while(typeof(kalimat) !== 'string') { // validasi nilai kalimat dengan while dengan pengkondisian apakah type data kalimat bukan string
        console.log(kalimat) // mencetak nilai dari kalimat
    }

    const splitKalimat = kalimat.split(' ') // deklarasi splitKalimat yang akan membagi nilai kalimat menjadi tiap kata dengan penanda spasi dan di masukan ke dalam array
    const revKalimat = splitKalimat.reverse() // deklarasi revKalimat yang akan membalikan array pada splitKalimat menggunakan reverse()
    const res = revKalimat.join(' ')  // deklarasi res yang akan menggabung element array pada revkalimat dengan memberi spasi pada tiap element yang digabung dengan .join(' ')
    console.log(res) // mencetak nilai res
}
reverseWord2('html css') // memanggil fungsi reverseWord2 dengan memberi nilai parameter kalimat 'html css'
// Output: css html
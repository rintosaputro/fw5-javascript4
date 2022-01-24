const divideAndSort = (num) => { // deklarasi fungsi bernama divideAndSort dengan parameter num
    while(typeof(num) !== 'number') { // validasi nilai num dengan while dengan pengkondisian apakah type data kalimat bukan number
        console.log(num) // mencetak nilai dari parameter num
    }

    const toStr = String(num) // deklarasi toStr yang akan mengubah nilai parameter num menjadi string
    let tempo = [] // deklarasi tempo berisi array kosong sebagai penampung nilai sementara
    let result = [] // deklarasi result berisi array kosong yang akan diisi dengan hasil akhir

    for(let i = 0; i<toStr.length; i++) { // perulangan dengan for dimana nilai awal i adalah 0, pengkondisian i kurang dari panjang toStr, i akan ditambah satu jika pengkondisannya masih benar
        if(toStr[i] != '0') { // pengkondisian apakah nilai toStr[i] tidak sama dengan '0'
            tempo.push(toStr[i]) // memasukan nilai toStr[i] ke dalam tempo dengan .push()
        } 
        if((toStr[i] == '0') || (i == toStr.length-1)) { // pengkondisian apakah nilai toStr[i] sama dengan '0' atau i sama dengan panjang toStr -1
            tempo.sort() // melakukan pengurutan nilai di tempo dengan sort
            result.push(...tempo) // memasukan seluruh nilai tempo ke dalam result menggunakan spread operator
            tempo = [] // mengkosongkan nilai array dari tempo
        }
    }

    const arrJoin = Number(result.join('')) // deklarasi arrJoin dengan perintah mengubah nilai dari result yang telah digabung dengan .join('') menjadi type data number dengan Number()
    console.log(arrJoin) // mencetak nilai dari arrJoin
}

divideAndSort(5956560159466056) // memanggil fungsi divideAndSort dengan mengisi parameter num dengan 5956560159466056
// Output: 55566914566956

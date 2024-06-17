// Assynchronous promis 

// pake ajax
// $.ajax({
//     url: 'https://www.omdbapi.com/?apikey=dca61bcc&s=avengers',
//     success: tampilkan => console.log(tampilkan)
// });


// pake vanilla js modern
// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function(){
//     if(xhr.status ===200){
//         if(xhr.readyState === 4){
//             console.log(JSON.parse(xhr.response));
//         }
//     }else{
//         console.log(xhr.responseText);
//     }
// }

// xhr.open('get','https://www.omdbapi.com/?apikey=dca61bcc&s=avengers');
// xhr.send();

// Menggunakan fetch
// fetch('https://www.omdbapi.com/?apikey=dca61bcc&s=avengers')
// .then(film => film.json())
// .then(film => console.log(film));



// contoh 1
// let ditepati = true;

// const promise01 = new Promise((resolve,reject) =>{
//     if(ditepati){
//         resolve('Perintah dijalankan(Perintah disini boleh apa aja bisa request ke api atau melakukan apa.)');
//     }else{
//         reject('Perintah ini dijalankan ketika nilai tidak sesuai')
//     }
// });
// // Menangkap resolve dan reject
// promise01
// .then(response => console.log('Oke perintah akan segera dilaksanakan setelah saya makan' + response))
// .catch(response => console.log('Maaf perintahmu terlalu berat, silahkan pergi..!' + response))

// Contoh 2
//   janjinya nggak langsung ditepati,jadi nunggu prooses dulu dan memang seperti ini karena nanti datanya banyak atau prosesnya kompleks sehingga gak langsung beresdocument.querySelector
// let aksi = false;
// const promise02 = new Promise ((resolve, reject) => {
//     if(aksi ){
//         setTimeout(()=>{
//             resolve('Janji saya telah di laksanakan ,maaf nunggu ya....')
//         },2000);
//     }else{
//         setTimeout(()=>{
//             resolve('Tidak ditepati')
//         },2000);
//     }
// });
// console.log("mulai");
// // console.log(promise02.then(()=> console.log(promise02)));
// promise02
//     .finally(() => //method finally adalah method yang digunakan ketika salah satu dari then atau catch selesai dan siap di jalankan
//         console.log("Ini result nya :")
//     )
//     .then(response => console.log("Ok,"+response))
//     .catch(response=> console.log("Not Ok," +response))
// console.log("Selesai")


// Promise.all()
const buku =new Promise(resolve =>{
    setTimeout(()=>{
        resolve([{
            judul: 'Rahasia menjadi superman',
            penulis: "Aladin aye",
            banyakhal: "90 halaman",
            harga:65000
        }])
    },1000);
});

const film = new Promise(resolve =>{
    setTimeout(()=>{
        resolve([{
            judul: 'Vina',
            sutradara: "Egi",
            banyakeps: "20 eps",
            harga:90000
        }])
    }, 1500);
});

const datamhs = new Promise(resolve => {
    setTimeout(()=>{
        resolve([{
            nim : 21110004,
            nama: "Budi",
            jenjang:"S1",
            Jurusan: "Teknik mesin",
            angkatan: "sebelum abad ke 14"
        }])
    }, 500);
});

// Pemanggilan 3 promise di atas manua
// buku .then(response => console.log(response));
// film .then(response => console.log(response))
// datamhs .then(response => console.log(response));

// dengan promise.all()
Promise.all([buku,film,datamhs])
    // .then(response => console.log(response));

// kalo mau arraynya terpisah pake spread operator
.then(response => {
    const [buku, film, datamhs] = response;
    console.log(buku);
    console.log(film);
    console.log(datamhs);
})


$('.btn').on('click', function(){
    $.ajax({
        url:'http://www.omdbapi.com/?apikey=b6797021&s=' + $('.input-keyword').val(),
        success: results => {
            const movies = results.Search;
            // Menamplkan data ke dalam card menggunakan looping. Lalu ganti namanya, tahunnya gambarnya
            // start
            let cards = '';
            movies.forEach(m => {
                cards += showCards(m);
            });
            $('.movies-container').html(cards);


        //   ketika di klik tombolnya dia request ajax lagi
        $('.modal-detail-btn').on('click', function() {// ini event handler bukan arrow function, saya pake event hanler karena butuh skop thisnya
            // console.log($(this).data('imdbid')); ini bbuat ngecek apakah id sudah terambil atau belum

            $.ajax({
                url:'http://www.omdbapi.com/?apikey=b6797021&i='+ $(this).data('imdbid'),
                success: m =>{//masukan ke movie detal
                    const movieDeatail = showDetails(m);
                //   MAsukkan ke dalam kolom detail 
                    $('.modal-body').html(movieDeatail);
                }, error: (err)=>{
                    console.log(err.responseText);
                }
            })
        })
        },
        error: (err) => {
        console.log(err.responseText);
        }
});
})

function showCards(m){// fungsi untuk memanggil show cards
        return `<div class="col-md-4 my-3 ">
                        <div class="card">
                            <img src="${m.Poster} class="card-img-top" alt="">
                            <div class="card-body">
                            <h5 class="card-title">${m.Title}</h5>
                            <h6 class="card-subtitle mb-2 text-body-secondary">${m.Year}</h6>
                            <a href="#" class="btn btn-primary modal-detail-btn" data-bs-toggle="modal" data-bs-target="#detailMovie" data-imdbid="${m.imdbID}">Show details</a>
                            </div>
                        </div>
                    </div>`
    }
function showDetails(m){// fungsi untuk memanggil show detail
     return `<div class="container-fluid">
            <div class="row">
            <div class="col-md-3">
            <img src="${m.Poster}" class="img-fluid" alt="">
            </div>
            <div class="col-md">
                <ul class="list-group">
                    <li class="list-group-item"><h3> Judul : </h3>${m.Title} ${m.Year}</li>
                    <li class="list-group-item"><strong>Director :</strong> ${m.Director}</li>
                    <li class="list-group-item"><strong>Actors :</strong>${m.Actors}  </li>
                    <li class="list-group-item"><strong>Writers :</strong>${m.Writer}</li>
                    <li class="list-group-item"><strong>Language :</strong>${m.Language} </li>
                </ul>
            </div>
        </div>
    </div>`
}
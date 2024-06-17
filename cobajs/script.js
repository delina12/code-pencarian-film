// Menjadikan setiap hurup timbul ketika di hover/ bikin animasi perhuruf

const Nama =document.querySelector('.namaSaya');//ngambil elemen
const huruf =[...Nama.textContent].map(ph =>`<span>${ph}</span>`).join("");//mencah tiap2 huruf pake spread dan ngeluping pake map
Nama.innerHTML = huruf;//nempelin variavbel nama nya
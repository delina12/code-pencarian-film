// Ini intinya, disini assynchronous callbacknya
function getMhs(url, succes,error){
    let xhr =new XMLHttpRequest();

    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            if(xhr.status===200){
                succes(xhr.response);
            }else if(xhr.status === 404){
                error();
            }
        }
    }

    xhr.open('get', url);
    xhr.send();
}
console.log("mulai")
getMhs('../data/main03.json', XPathResult => {
    const mhs = JSON.parse(XPathResult);
    mhs.forEach(m => {
        console.log(m.prodi)
    },()=>{
        
    });
});
console.log("Selesai")
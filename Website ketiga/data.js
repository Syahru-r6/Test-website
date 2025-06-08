const nama = "alfath syahru";
let usia = 5;

let biodata = document.getElementById('biodata');
console.log(biodata);

function generateBiodata() {
    let jancok;

    if(usia >1 && usia <10) {
        jancok = "NOMOR-SUDAH-BENAR";
    }
    else {
        jancok = "NOMOR SALAH";
    }

    return biodata.innerHTML = jancok;
}

console.log(nama);
generateBiodata();


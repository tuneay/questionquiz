//Dikkat kod yapısı temiz bir kod değildir genel çalışma mantığını kavramak için yazdığım bir kod yapısıdır github'a
//Öylesine yüklenmiştir.

const birincicevapA = document.getElementById('birinciA');
const ikincicevapA = document.getElementById('ikinciA');
const üçüncücevapA = document.getElementById('üçüncüA');
const dördüncücevapA = document.getElementById('dördüncüA');
var cevapdogru = document.getElementById('trueques');
var soru1 = document.getElementById('soru-1');

var cevaplar = {
    birinciSoru : birincicevapA,
    ikinciSoru : "İşaretlediğiniz (B)",
    üçüncüSoru : "İşaretlediğiniz (C)",
    dördüncüSoru : "İşaretlediğiniz (D)"
}

var cevap;
var cevaplar;
var yanliscevap;

birincicevapA.addEventListener("click",cevapAtaması);

function cevapAtaması(){
    cevap = true;
    if(cevap == true){
        cevapdogru.innerText = "Tebrikler cevap doğru";
        cevapdogru.style.display = "block";
        cevapdogru.style.color = "green";

    }
}
ikincicevapA.addEventListener("click",hataliDegerler);

function hataliDegerler(){
    cevap = false;
    if(cevap == false){
        cevapdogru.innerText = `${cevaplar.ikinciSoru} cevabınız yanlıştır`
        cevapdogru.style.display = "block";
        cevapdogru.style.color = "black";
    }
}

üçüncücevapA.addEventListener("click",hataliDegerler2);

function hataliDegerler2(){
    cevap = false;
    if(cevap == false){
        cevapdogru.innerText = `${cevaplar.üçüncüSoru} cevabınız yanlıştır`
        cevapdogru.style.display = "block";
        cevapdogru.style.color = "black";
    }
}
dördüncücevapA.addEventListener("click",hataliDegerler3);

function hataliDegerler3(){
    cevap = false;
    if(cevap == false){
        cevapdogru.innerText = `${cevaplar.dördüncüSoru} cevabınız yanlıştır`
        cevapdogru.style.display = "block";
        cevapdogru.style.color = "black";
    }
}



 "use stict"

const relogio = document.getElementById('Relogio')

const resultado = ()=>{
    const hora = new Date()
    const horas = hora.getHours()
    const minutos = hora.getMinutes()
    const segundos = hora.getSeconds()
    const img = document.getElementById('imagem')

     if(horas >= 0 && horas < 12){
        img.src="style.css/Bomdia.png"
        
    } else if( horas >= 12 && horas <= 18){
        // Bom tarde

        img.src="style.css/Boatarde.png"

      } else {
        //Boa noite
        img.src="style.css/Boanoite.png"

      }
    

   

    const tela = `
     <div id="hora1">  <span>${horas}</span></div>
     <div id="hora2">  <span>${minutos}</span> </div>
     <div id="hora3"> <span>${segundos}</span></div>
    ` 



    relogio.innerHTML=tela
}

setInterval(resultado,  1000)

const Ano = document.getElementById('Ano')

const mesano = ()=>{
    const hora = new Date
    const ano = 22
    const Data = hora.getDate()
    const mes = hora.getMonth()


    const AnoTela = `
    <div id="ano1"> <span>${Data}</span></div>
    <div id="ano2"> <span>${mes}</span></div>
    <div id="ano3"> <span>${ano}</span> </div>
   ` 

    Ano.innerHTML=AnoTela

}
setTimeout(mesano)


// cronometro


var hh = 0
var mm = 0
var ss = 0

var tempo = 10
var cronometro; 


function iniciar(){

    cronometro = setInterval(()=>{timer()} , tempo);

}
function pausar(){
    clearInterval(cronometro);

}
function parar(){

    clearInterval(cronometro);

     hh = 0;
     mm = 0;
     ss = 0;

     document.getElementById('counter').innerText= '00:00:00'

}

function timer(){

    ss++

    if(ss== 60){
        ss=0
        mm++
    }

    if(mm == 60){
        mm = 0 
        hh++
    }



    formatandoHora =  (hh < 10 ? '0'+ hh : hh ) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss)
       document.getElementById('counter').innerText= formatandoHora
}



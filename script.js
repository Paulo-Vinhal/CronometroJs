
// Váriaveis de controle
let s = 0;
let m = 0;
let h = 0;
let cronometro;
let isRunning = false;


function start(){
    if(isRunning == false){
        // Aqui utilizamos a váriavel para referenciar a instância da função, para para-la posteriormente.
        cronometro = setInterval(timer, 1000);
        isRunning = true;
    }
}

function stop(){
    clearInterval(cronometro);
    isRunning = false;
}

function restart(){
    clearInterval(cronometro)
    isRunning = false;
    s = 0;
    m = 0;
    h = 0;
    let format = (h < 10 ? '0' + h : h) + ':' + (m < 10 ? '0' + m : m) + ':' + (s < 10 ? '0' + s : s);
    document.querySelector('#contador').innerText = format;
}

function timer(){
    s++;

    if(s == 60){
        s = 0;
        m ++;
        if(m == 60){
            m = 0;
            h ++;
        }
    }

    //Este bloco formata o testo do timer na tela e o exibe.
    let format = (h < 10 ? '0' + h : h) + ':' + (m < 10 ? '0' + m : m) + ':' + (s < 10 ? '0' + s : s);
    document.querySelector('#contador').innerText = format;
}


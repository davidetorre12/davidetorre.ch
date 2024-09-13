
const ora = document.getElementById("ora")
const data = document.getElementById("data")


aggiornamentoOra();

setInterval(aggiornamentoOra, 100);

function aggiornamentoOra(){
    
	let macDate = new Date();
    aggiungiZero();
    ora.innerHTML = aggiungiZero(macDate.getHours()) + ":" + aggiungiZero(macDate.getMinutes()) + ":" + aggiungiZero(macDate.getSeconds());
    data.innerHTML = macDate.getDate() + "/" + (macDate.getMonth()+1) + "/" + macDate.getFullYear();
}

function aggiungiZero(valore){
    let orario = 0;
    if(valore<=9){
        orario = "0" + valore
    } else {
        orario = valore
    };

    return orario;

}
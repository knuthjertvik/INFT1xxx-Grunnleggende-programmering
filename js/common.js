/*function lagDatoTekstForVisning(dato) {
    return dato.toLocaleString().replace(',', '').substr(0, 15);
  }*/
  
  function heipådeg(){
    alert('Hei')
    alert('på')
    alert('deg')
  }

  function endreTekst(){
    document.getElementById('sluttnote').innerHTML = 'Denne er endret av javascript-funksjon';
    document.getElementById('sluttnote').classList.toggle('fetSkrift');
  }

  function visOgSkjulMeny() {
    document.getElementById('page').classList.toggle('pageUtenMeny');
}





function visHandleliste() {
    document.getElementById('innhold').innerHTML = `
        <p>
            <small>onsdag 17.10.18</small><br/>
            <b>Vinneren er Ole!</b><br/>
            <small>Trukket fra totalt 3 personer: Per, Pål og Ole</small>
        </p>
        `;
}

console.log('Hei');
console.log('på');
console.log(vareListe);
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

function visVareliste() {
    document.getElementById('innhold').innerHTML = `
                <table>
                    <tr><td><input type="checkbox"/></td><td>Personer</td><td>+</td><td>✎</td></tr>
                    <tr><td><input type="checkbox" checked/></td><td>Per</td><td onclick="visPersonerMinusPer()">☒</td></tr>
                    <tr><td><input type="checkbox" checked/></td><td>Pål</td><td>☒</td></tr>
                    <tr><td><input type="checkbox"/></td><td>Espen</td><td>☒</td></tr>
                    <tr><td><input type="checkbox" checked/></td><td>Ole</td><td>☒</td></tr>
                    <tr><td colspan="4"><button onclick="visVinnere2()">Trekk!</button> <input type="text" size="1" value="1"/>
                        <button>▲</button>
                        <button>▼</button></td></tr>
                </table>
                `;
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
console.log('deg!');

var navnFraSkjema = document.getElementById('navn').value;
console.log(navnFraSkjema);
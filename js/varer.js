function leggTilVareListe(){
    //finn id i index.html
    var itemElement = document.getElementById('nyVare');
    vareListe.push(itemElement.value)
}

function visVareListe() {
    let html = vareListe.reduce((htmlListe, navn) =>
        htmlListe +
        `<li>${navn}&emsp;<button onclick="slettVareListe('${navn}')">🗑</button></li>`,
        '<ul>'
    ) + '</ul>';
    document.getElementById("vlContainer").innerHTML = html;
    console.log(html);
}

function slettVareListe(navn) {
    const index = vareListe.indexOf(navn);
    if (index !== -1) {
        vareListe.splice(index, 1);
    }
    visVareListe();
}






/**
 * 
 * @param {String} carta // Carta
 * @param {HTMLImageElement} divCartas //Elemento HTML para mostrar imagen
 * @returns {imgCarta} //retorna un elemento HTML creado
 */
export const createCardHtml = (carta, divCartas) => {

    if (!carta) throw new Error('La carta es necesaria')


    // <img class="carta" src="assets/cartas/2C.png">
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`; //3H, JD
    imgCarta.classList.add('carta');
    divCartas.append(imgCarta);

    return imgCarta
}
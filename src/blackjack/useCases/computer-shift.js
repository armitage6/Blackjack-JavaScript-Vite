import { pedirCarta, valorCarta, createCardHtml } from "./";


/**
 * 
 * @param {Number} puntosMinimos //Puntos minimos que la computadora necesita para ganar
 * @param {Array<String>} puntosHTML //elemento HTML para mostrar los puntos
 * @param {Array<String>} deck 
 * @param {Number} puntosComputadora //elemento HTML para mostrar las cartas
 * @param {HTMLImageElement} divCartasComputadora 
 */
export const turnoComputadora = (puntosMinimos, puntosHTML, divCartasComputadora, deck = []) => {

    if (!puntosMinimos) throw new Error('Puntos minimos son necesarios');
    if (!puntosHTML) throw new Error('Argumento es necesario');


    let puntosComputadora = 0

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta(carta);
        puntosHTML.innerText = puntosComputadora;

        createCardHtml(carta, divCartasComputadora)

        if (puntosMinimos > 21) {
            break;
        }

    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    setTimeout(() => {
        if (puntosComputadora === puntosMinimos) {
            alert('Nadie gana :(');
        } else if (puntosMinimos > 21) {
            alert('Computadora gana')
        } else if (puntosComputadora > 21) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100);
}


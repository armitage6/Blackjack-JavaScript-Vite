import _ from 'underscore'


/**
 * Esta funcion crea un nuevo deck
 * @param {Array<String>} typeCart //ej: ['C', 'D', 'H', 'S'];
 * @param {Array<String>} typeSpecial // eje: ['A', 'J', 'Q', 'K'];
 * @returns  {Array<String>} //regresa un nuevo deck de cartas
 */
export const crearDeck = (typeCart, typeSpecial) => {

    if (!typeCart || typeCart.length === 0) throw new Error('tiposDeCarta es obligatorio como un arreglo de string')

    if (!typeSpecial || typeSpecial.length === 0) throw new Error('typeSpecial es obligatorio como un arreglo de string')



    let deck = []

    for (let i = 2; i <= 10; i++) {
        for (let tipo of typeCart) {
            deck.push(i + tipo);
        }
    }

    for (let tipo of typeCart) {
        for (let esp of typeSpecial) {
            deck.push(esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle(deck);

    return deck;
}

//export default crearDeck
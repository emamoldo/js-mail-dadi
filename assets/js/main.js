/* devo creare un ciclo che mi permette di avere un numero random da 1 a 6
    - devo spampare in console il numero:
        - per il giocatore;
        - per il computer;

    - devo comparare i due numeri per vedere qual'è il più grande:
        - stampare quel numero; 
*/

let numbers = [1, 2, 3, 4, 5, 6]
const elementName = document.getElementById("container")

// Creating a cicle with random numbers

for (let i = 0; i < 2; i++) {
    let count = 1;
    for (numbers = 0; numbers < Math.floor(Math.random() * 6); numbers++) {
        count++;
    }
    console.log(count);
    /*elementName.insertAdjacentHTML('beforeend', `<p>${count}</p>`)*/
    
    if (count === numbers) {
        elementName.insertAdjacentHTML('beforeend', `<p>${count} I numeri sono uguali, Parità</p>`)
        
    } else if (count > numbers) {
        elementName.insertAdjacentHTML('beforeend', `<p>${count} Il computer ha vinto</p>`)

    } else{
        elementName.insertAdjacentHTML('beforeend', `<p>${count} Il giocatire ha vinto</p>`)

    }

}

// ``

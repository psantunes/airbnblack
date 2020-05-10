let cards = document.getElementById('cards');
let arrayCards = [];
carregaAPI();

function carregaAPI() {
    fetch("https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72")
    .then(
        function(resp){
            resp.json().then(
             function (cards) {
                 arrayCards = cards;
                exibeCards(cards);
             }   
            ).catch(function(error) {
                alert('Erro: ' + error.message);
              })
        } 
    ).catch(function(error) {
        alert('Erro: ' + error.message);
      })
}


function exibeCards(cardsArray) {

    cardsArray.map(function(card) {
        cards.innerHTML += ` 
        <div class="card">
            <div class="card-img">
                <img src="${card.photo}">
            </div>
            <div class="card-body">
                <p>${card.property_type}</p>
                <h3>${card.name}</h3>
                <p class="card-price"><strong>R$ ${card.price}</strong>/noite</p>
            </div>
        </div>
        `;
    } );
   
}

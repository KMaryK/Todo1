const url = 'https://gist.githubusercontent.com/orlov-oleg-developer/0640923f210e574e267472572ff60423/raw/a63a1accbe482def652a2b587661df52939f177e/TodoLists.json'

export const getData = () => {
  return fetch(`${url}`, { method: 'GET' })
    .then((data) => {
      return data.json()
    })
    .catch((error) =>{
        console.log(error)
    })
}
// загрузка данных с  сервера
buttonDownloadCards.addEventListener("click", 
    (event) => {
        getData()
        .then((data) => {

            data.info.forEach(info => {
                const cardTemplate = document.querySelector(cardSelectors.template).content;
                const card = cardTemplate.querySelector(cardSelectors.card).cloneNode(true)
                card.querySelector(cardSelectors.title).value = info.title
                card.querySelector(cardSelectors.deadline).value = info.time
                cardsContainer.append(card)
    
                card.addEventListener("click",
                    (event) => {
                        if (event.target.className === "card__button") {
                            card.remove()
                        }
                    }
                
                )
            })   
        })
 

        
    }
)
import { getData } from "./api/api.js"
import { getData } from "./api/api.js"
import {selectors, cardSelectors, todoListInfo} from "./utils/constants.js"
//контейнер для карточек, ищем по селектору, который класс 
const cardsContainer = document.querySelector(cardSelectors.container)
const buttonAddCard = document.querySelector(selectors.buttonAddCard)
const buttonDownloadCards = document.querySelector(selectors.buttonDownloadCards)
// /**
//  * создали новую карточку
//  */
// const cardTemplate = document.querySelector(cardSelectors.template).content;
// const card = cardTemplate.querySelector(cardSelectors.card).cloneNode(true)
// /**
//  * поместили карточку в контейнер
//  */
// cardsContainer.append(card)


buttonAddCard.addEventListener("click", 
    (event) => {
        const cardTemplate = document.querySelector(cardSelectors.template).content;
        const card = cardTemplate.querySelector(cardSelectors.card).cloneNode(true)
        cardsContainer.append(card)

        card.addEventListener("click",
            (event) => {
                if (event.target.className === "card__button") {
                    card.remove()
                }
            }
        
        )
    }
)
// загрузка данных из файла
// buttonDownloadCards.addEventListener("click", 
//     (event) => {
//         todoListInfo.forEach(info => {
//             const cardTemplate = document.querySelector(cardSelectors.template).content;
//             const card = cardTemplate.querySelector(cardSelectors.card).cloneNode(true)
//             card.querySelector(cardSelectors.title).value = info.title
//             card.querySelector(cardSelectors.deadline).value = info.time
//             cardsContainer.append(card)

//             card.addEventListener("click",
//                 (event) => {
//                     if (event.target.className === "card__button") {
//                         card.remove()
//                     }
//                 }
            
//             )
//         })    

        
//     }
// )
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



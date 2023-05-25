const selectors = {
  buttonAddCard: '.todoList__button',
  buttonDownloadCards: '.todoList__download-button',
}
//просто селекторы не объекты (объект , который содержит селекторы)
const cardSelectors = {
  template: "#card-template",
  card: '.card',
  title: '.card__title',
  button: '.card__button',
 deadline: '.card__deadline',
  container: '.todoList__cards'
}

const todoListInfo = [
  {
    title: 'Сходить на тренировку',
    time: '17:30',
  },
  {
    title: 'Покушать',
    time: '20:30',
  },
  {
    title: 'Начать делать дз',
    time: '22:30',
  },
]

export { selectors, cardSelectors, todoListInfo }

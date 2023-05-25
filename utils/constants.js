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
    title: 'Погладить Персика',
    time: '19:15',
  },
  {
    title: 'Провести трансялцию',
    time: '20:30',
  },
  {
    title: 'Почистить зубы',
    time: '22:30',
  },
]

export { selectors, cardSelectors, todoListInfo }

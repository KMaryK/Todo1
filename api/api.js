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

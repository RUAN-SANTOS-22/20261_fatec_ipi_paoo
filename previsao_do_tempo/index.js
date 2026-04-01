require('dotenv').config()
const axios = require('axios')

//console.log(process.env.APPID)
const baseURL = 'https://api.openweathermap.org/data/2.5/forecast'

const q = 'Itu'

const appid = process.env.APPID

const units = 'metric'

const lang = 'pt_br'

const cnt = 3

const url = `${baseURL}?q=${q}&appid=${appid}&units=${units}&lang=${lang}&cnt=${cnt}`

const exercicio = async() => {
  try{
    const res = await axios.get(url)
    console.log(res)
    console.log("--------------------")
    console.log(res.data)
    console.log("--------------------")
    console.log(res.data.cnt)
    console.log("--------------------")
    console.log(res.data.list[0])
    console.log("--------------------")
    console.log(res.data.list[0].main.temp_max)

    let previsoes = res.data.list
    for (let previsao of previsoes) {
      console.log(`
        tempMin: ${previsao.main.temp_min}, 
        tempMax: ${previsao.main.temp_max}, 
        weather: ${previsao.weather[0].description}
      `)
      console.log("--------------------")
    }
  }
  catch(erro){
    console.log(`erro: ${erro}`)
  }
}
exercicio()


// axios.get(url)
// .then(res => {
//   console.log(res)
//   console.log("--------------------")
//   return res.data
// })
// .then(res => {
//   console.log(res)
//   console.log("--------------------")
//   return res
// })
// .then(abc => {
//   console.log(abc.cnt)
//   console.log("--------------------")
//   return abc.list//complete aqui, não vale devolver o abc
// })
// //complete o then para exibir o objeto que se encontra na primeira posição do list
// .then(list => {
//   console.log(list[0])
//   console.log("--------------------")
//   return list //não vale devolver list[0]
// })
// //mais um then para exibir a temperatura maxima somente do primeiro
// .then(list => {
//   console.log(list[0].main.temp_max)
//     console.log("--------------------")
//     return list
//   })
//   .then(previsoes => {
//     for (let previsao of previsoes) {
//       console.log(
//         `tempMin: ${previsao.main.temp_min}, tempMax: ${previsao.main.temp_max}, weather: ${previsao.weather[0].description}
//       `)
//       console.log("--------------------")
//   }
// })
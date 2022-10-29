const axios = require('axios')

let num = 39
const start = Date.now()

for (let i = 0; i < 10; i++) {
    const url = `http://127.0.0.1:9000/fibo?num=${--num}`
    // console.log('begin request: ', num)
    handle(num, url)
}

function handle(num, url) {
  axios.get(url).then(res => {
    console.log(`input: ${num}`, res.data, `耗时: ${ Date.now() - start }ms`)
  })
}

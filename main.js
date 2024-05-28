console.log('Hola mundo con Node JS')


const express = require('express')
const app = express()
const port = 3000

//------------------Endpoint--------------------------

// con get se indica que nuestra Api acepta el method Get
// El primer parámetro (req), establece el path (ruta)del código que queremos ejecutar
// El segundo parámetro (res) establece el código a ejecutar en forma de callback (función que se ejecuta como parámetro)
//- El cllback recibe dos parámetros 
//- req (request o petición)
//- res (response o la respuesta)
app.get('/', (req, res) =>{
res.send('Hello Wrold!')
})
 
// Le indicamos a nuestra API que empiece a escuchar peticiones
// en el puerto 3000 y cuando se encienda nos muestre el mensaje 
// que hay en el consol.log....
app.listen(port, () =>{
console.log(`La Api está escuchando en el puerto ${port}`)
})
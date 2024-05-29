console.log('Hola mundo con Node JS')


import express from 'express'
const app = express()
const port = 3000
import client from './db.js'

//------------------Endpoint--------------------------

// con get se indica que nuestra Api acepta el method Get
// El primer parámetro (req), establece el path (ruta)del código que queremos ejecutar
// El segundo parámetro (res) establece el código a ejecutar en forma de callback (función que se ejecuta como parámetro)
//- El cllback recibe dos parámetros 
//- req (request o petición)
//- res (response o la respuesta)
app.get('/api/v1/usuarios', async (req, res) => {

    await client.connect()
    const db = client.db('sample_mflix')
    const  users = db.collection('users')

    const listaUsuarios = await users.find({}).toArray()
    console.log(listaUsuarios)
    // const respuesta = {
    //     mensaje: "hola"
    // }

    // res.json(respuesta)

    res.json({
        mensaje: 'lista de usuarios',
    })
})

app.get('/api/v1/usuarios/:cedula', (req, res) => {

    console.log(req.params)
    const cedula = req.params.cedula

    res.json({
        mensaje: `usuario obtenido con la cedula: ${cedula}`
    })
})

// post: crear datos
app.post('/api/v1/usuarios', (req, res) => {

    res.json({
        mensaje: 'usuario guardado'
    })
})

// put: actualizar todos los
// datos de un elemento
app.put('/api/v1/usuarios/:cedula', (req, res) => {

    const cedula = req.params.cedula

    res.json({
        mensaje: `usuario con cedula ${cedula} actualizado`
    })
})

// patch: actualiza algunos campos
// de nuestro elemetno
app.patch('/api/v1/usuarios/:cedula', (req, res) => {

    const cedula = req.params.cedula

    res.json({
        mensaje: `edad del usuario con cedula ${cedula} actualizada`
    })
})

// delete: eliminar un elemento
app.delete('/api/v1/usuarios/:cedula', (req, res) => {

    const cedula = req.params.cedula

    res.json({
        mensaje: `usuario con cedula ${cedula} eliminado`
    })
})

// Le indicamos a nuestra API que empiece a escuchar peticiones
// en el puerto 3000 y cuando se encienda nos muestre el mensaje 
// que hay en el consol.log....
app.listen(port, () =>{
console.log(`La Api está escuchando en el puerto ${port}`)


})


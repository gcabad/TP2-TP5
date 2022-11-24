import express from 'express'
import { RouterNotas } from './router/notas.js'
import CnxMongoDB from './model/DB.js'
import config from './config.js'


const app = express()
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/query', (req,res) => {
    const query = req.query
    res.json(query)
})

/* --------------------------------------------- */
/*     ZONA DE RUTAS MANEJADAS POR EL ROUTER     */
/* --------------------------------------------- */

app.use('/', new RouterNotas().start())

/* --------------------------------------------- */
/*               SERVIDOR LISTEN                 */
/* --------------------------------------------- */
if(config.MODO_PERSISTENCIA == 'MONGO') {
    await CnxMongoDB.conectar()
}

const PORT = process.env.PORT || config.PORT
const server = app.listen(PORT, () => console.log(`Servidor express escuchando en el puerto ${PORT}.`))
server.on('error', error => console.log(`Error en el servidor: ${error.message}`))

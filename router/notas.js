import express from 'express'
import ControladorNotas from '../controller/notas.js'

export class RouterNotas {
    
    constructor() {
        this.router = express.Router()
        this.controladorNotas = new ControladorNotas()
    }

    start () {
        /*GET cliente/s */
        this.router.get('/listar', this.controladorNotas.getNotas)

        /* POST Notas */
        this.router.post('/guardar', this.controladorNotas.postNotas)

        /* Endpoint de calculo */
        this.router.get('/calculo', this.controladorNotas.getCalculo)

        return this.router
    }
}

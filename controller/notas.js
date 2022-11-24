import ApiNotas from '../api/notas.js'

class ControladorNotas {

    constructor () {
        this.apiNotas = new ApiNotas()
    }

    postNotas = async (req, res) => {
        const nota = req.body
        res.json(await this.apiNotas.guardarNota(nota))
    }
    
    getNotas = async (req, res) => {
        res.json(await this.apiNotas.obtenerNotas())
    }

    getCalculo = async(req, res) => {
        res.json(await this.apiNotas.obtenerCalculo())
    }

}

export default ControladorNotas

import config from '../config.js'
import NotasFactoryDAO from '../model/DAO/notasFactory.js'

class ApiNotas {

    constructor () {
        console.log(config.MODO_PERSISTENCIA)
        
        this.notasModel = NotasFactoryDAO.get(config.MODO_PERSISTENCIA)
    }

    obtenerNotas = async id => {
        return await this.notasModel.findNotas() 
    }
    guardarNota = async nota => {
        return await this.notasModel.saveNota(nota)
    }
    
    obtenerCalculo = async () => {
        let notas = await this.notasModel.findNotas()
        if(notas.length > 0) {
            let resultado = {total: 0, promedio: 0}
            for(let i = 0; i < notas.length; i++) {
                resultado.total += notas[i].valor
            }
            resultado.promedio = resultado.total / notas.length
            return resultado
        } else {
            return {mensaje: 'No hay notas guardadas'}
        }
    } 

}

export default ApiNotas
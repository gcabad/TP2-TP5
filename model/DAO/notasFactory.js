import NotasMongoDAO from './notasMongoDB.js'
import NotasMemDAO from './notasMem.js'

class NotasFactoryDAO {
    static get(tipo) {
        switch(tipo) {
            case 'MEM' :
                console.log('***** Persistiendo en Memoria *****')
                return new NotasMemDAO()
            case 'MONGO':
                console.log('***** Persistiendo en MongoDB *****')
                return new NotasMongoDAO()
            default:
                console.log('***** Persistiendo en default (Memoria) *****')
                return new NotasMemDAO()
        }
    }
}

export default NotasFactoryDAO
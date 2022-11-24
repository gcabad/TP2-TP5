import CnxMongoDB from '../DB.js'

class NotasMongoDAO {
        
    findNotas = async () => {
        if(!CnxMongoDB.connection) return []

        try {
            let notas = await CnxMongoDB.db.collection('notas').find({}).toArray()
            return notas
        }
        catch {
            return []
        }
    }
    
    saveNota = async nota => {
        if(!CnxMongoDB.connection) return {}
        try {
            nota.valor = parseInt(nota.valor)
        
            await CnxMongoDB.db.collection('notas').insertOne(nota)
            return {status: "ok"}
        } catch {
            return {status: "error"}
        }
    }

}


export default NotasMongoDAO

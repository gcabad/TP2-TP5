import dotenv from 'dotenv'

dotenv.config()

const PORT = 8080
const STRCNX = process.env.STRCNX || 'mongodb://localhost'
const BASE = process.env.BASE
const MODO_PERSISTENCIA = process.env.MODO_PERSISTENCIA ||'MONGO'

export default {
    PORT, 
    STRCNX, 
    MODO_PERSISTENCIA,
    BASE
}
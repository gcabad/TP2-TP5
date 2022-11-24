class NotasMemDAO {

    constructor() {
        this.notas = [{id: 1, valor: 6,nombre: "Raul", apellido: "alumnouno", curso: "1A"}
        ]
    }

    findNotas = async () => {
        try {
            return this.notas
        }
        catch {
            return []
        }
    }

    saveNota = async nota => {
        try {
            nota.valor = parseInt(nota.valor)
            const id = parseInt(this.notas[this.notas.length-1].id) + 1
            nota.id = String(id)

            this.notas.push(nota)  
            
            return {status: 'ok'}
        }
        catch {
            return {status: 'error'}
        }
    }

}



export default NotasMemDAO

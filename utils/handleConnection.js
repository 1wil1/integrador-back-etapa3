import mongoose from 'mongoose'

const handleConnection = async (uri) => {
    try {
        await mongoose.connect(uri)
        console.log('Conexión a Mongo realizada con éxito!')
    } catch (error) {
        console.log('Error al conectar a Mongo DB', error)
    }
}

export default handleConnection
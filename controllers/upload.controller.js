
const uploadImagen = (req, res, next) => {
    const file = req.file

    console.log("uploadImagen//,",req.method);
    if (!file) {
        res.status(400).send('No se recibió ninguna imagen')
    }

    const urlCompletaBack = `${req.protocol}://${req.get('host')}/uploads/${file?.filename}`

    res.status(200).json({foto: urlCompletaBack})

}

export default {
    uploadImagen
}
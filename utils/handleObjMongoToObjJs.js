
const handleObjMongoToObjJs = (elemento) => {
    return JSON.parse(JSON.stringify(elemento)) // Transformo un obj de mongoose a un obj de js
}

export default handleObjMongoToObjJs
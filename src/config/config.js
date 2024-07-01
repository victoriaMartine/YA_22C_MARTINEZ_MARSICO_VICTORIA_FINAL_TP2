import "dotenv/config"

const PORT = process.env.PORT || 3000
// agrego un puerto defaul en caso de no existir la variable env en el server
const MODE = process.env.MODE || 'memory'
// agrego la activacion de la factory en caso de no existir la variable env en el server
//NOTA: si el valor de la variable ENV no es 'memory' la factory no se activara.
export  {PORT, MODE}
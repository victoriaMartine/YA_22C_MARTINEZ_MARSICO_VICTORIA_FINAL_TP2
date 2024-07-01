export const validateID = (id)=>{
    if(  id < 1 || id > 5){
        throw new Error('Numero de sonda incorrecto')
    }
}
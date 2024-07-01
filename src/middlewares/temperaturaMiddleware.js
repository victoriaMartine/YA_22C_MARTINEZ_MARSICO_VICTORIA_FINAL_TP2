
export const validateTemperatura = (temperatura)=>{
    if(temperatura < -20 || temperatura > 100){
        throw new Error('Temperatura invalido')
    }
}
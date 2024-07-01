
const archive =  'data.json'
import { readFile, writeFile } from "../utils/editFile.js";
import Sonda from "../models/sonda.js";
class Sondas{
    constructor(){
    }

    registrarSonda =  async(id, temperatura)=>{
        try {
            const sondas = await readFile(archive)
            const fechaRecepcion = new Date().toISOString();
            const nuevaSonda = new Sonda(id, temperatura, fechaRecepcion)
            sondas.push(nuevaSonda);
            await writeFile(archive, sondas);
            console.log('Sonda registrada correctamente!!')
            return nuevaSonda;
            
        } catch (error) {
            return(error)
        }
        
    }

    getSondas = async()=>{
        const sondas = await readFile(archive)
        return sondas ;
    }
    getSondasById = async (id)=>{
    const sondas = await readFile(archive)
    const sondasById = sondas.filter(sonda=> sonda.id === id)
    return sondasById;
  }
  getMuestras = async ()=>{
    const sondas  = await readFile(archive)
    const estadisticas = {
        cantidadTotalMuestras: sondas.length,
        temperaturaSondas: {}
      };
    
      for (let i = 1; i <= 5; i++) {
        const muestras = sondas.filter(s => s.id === i);
        const cantidad = muestras.length;
        const promedio = cantidad > 0 ? muestras.reduce((acc, curr) => acc + curr.temperatura, 0) / cantidad : 0;
    
        estadisticas.temperaturaSondas[i] = {
          cantidad,
          promedio
        };
      }
      return estadisticas;
  }
  
    }export default Sondas;
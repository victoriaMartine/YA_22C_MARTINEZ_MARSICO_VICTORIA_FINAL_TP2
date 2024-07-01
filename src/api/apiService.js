import Factory from "../DAOS/factory.js";

class ApiService{
    constructor(){
        this.factory = Factory.factory();
    }
    
    registrarSonda = async(id, temperatura)=>{
        
            return await this.factory.sondaService.registrarSonda(id, temperatura)
          
    }
    getSondas = async()=>{
           return await this.factory.sondaService.getSondas()
    }

    getSondasById = async(id)=>{
            return await this.factory.sondaService.getSondasById(id)
         
    }
    getMuestras = async()=>{
        return await this.factory.sondaService.getMuestras()
 }
    }
    export default ApiService
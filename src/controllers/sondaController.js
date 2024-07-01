import ApiService from "../api/apiService.js";
import ApiResponse from "../models/apiResponse.js";
import { validateParams } from "../utils/validateParams.js";
import { validateID } from "../middlewares/idMiddleware.js";
const service  = new ApiService();

class Controller{
    constructor(){}
 
    registrarSonda = async (req = request, res= response)=>{
        try {
            const {id, temperatura} = req.body;
            if(!id || !temperatura) throw new Error('Los datos no pueden venir vacios');
            const errors = validateParams(id, temperatura)
            if(errors.length > 0) throw new Error(errors.join(','));
               const data =  await service.registrarSonda(id,temperatura)
            res.status(200).send(new ApiResponse(true, "Sonda registrada exitosamente!!",data));
        } catch (error) {
            res.status(500).send(new ApiResponse(false, error.message, null));
        }
    }
    getSondas = async (req = request, res= response)=>{
        try {
          const data = await service.getSondas();
          res.status(200).send(new ApiResponse(true, "Sondas", data));
        } catch (error) {
            res.status(500).send(new ApiResponse(false, error.message, null));
        }
    }
    getSondasById = async (req = request, res= response)=>{
        try {
            const id = parseInt(req.query.id)
            validateID(id)
            let data = await service.getSondasById(id);
            res.status(200).send(new ApiResponse(true, `Sondas por id '${id}' : `, data));
        } catch (error) {
            res.status(500).send(new ApiResponse(false, error.message, null));
        }
    }
    getMuestras = async (req = request, res= response)=>{
        try {
            let data = await service.getMuestras();
            res.status(200).send(new ApiResponse(true, "Estadisticas: ", data));
        } catch (error) {
            res.status(500).send(new ApiResponse(false, error.message, null));
        }
    }
  
}
export default Controller;
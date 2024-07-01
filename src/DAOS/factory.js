import {MODE} from "../config/config.js";
import Sondas from "./sondaDao.js";

class Factory{
    constructor(){}
   
    static factory = ()=>{
       if(MODE === "memory"){
          return{
           sondaService:new Sondas(),
          };     
       }
    };
   }
   export default Factory
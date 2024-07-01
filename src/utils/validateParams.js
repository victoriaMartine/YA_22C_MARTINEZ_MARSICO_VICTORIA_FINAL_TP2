import { validateID } from "../middlewares/idMiddleware.js";
import { validateTemperatura } from "../middlewares/temperaturaMiddleware.js";

export const validateParams = (id, temperatura)=>{
    let errors = [];
    try {
      validateID(id);
    } catch (error) {
      errors.push(error);
    }
  try {
    validateTemperatura(temperatura);
  } catch (error) {
    errors.push(error);
  }
    return errors;
  }
  
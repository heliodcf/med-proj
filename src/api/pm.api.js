import axios from "axios";

import { isEmpty } from '../Utils/validation.util';
import { getToken, storeToken } from '../Utils/token.util';

import { handleResponseError } from "../Utils/error.util";

const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:5000"

class ApiPatient {
    constructor () {
        this.api = axios.create({baseURL: apiUrl})
    }

    signup = async ({username, email, password}) => {
        try {
            await this.api.post('/auth/signup', {username, email, password} )
            
        } catch (error) {
            handleResponseError(Error);
        }

    }   

 
  login = async ({ email, password }) => {
   
    try {
      const hasEmptyFields = isEmpty(email, password);
       
      if (hasEmptyFields) {
        throw new Error('Campos obrigatórios.')
      }
      const { data } = await this.api.post('/auth/login', {email, password});
      storeToken(data.token);

    } catch (error) {
      handleResponseError(error);
    }
  }

  verify = async () => {
    const token = getToken();
    try {

      const { data } = await this.api.get('/auth/verify', {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
      return data;
    } catch (error) {
      handleResponseError(error);
    }
  }

  anamnese = async ({gender, weight, height, isSmoker, isAlcoholic, exerciseRestriction,
haveDisease, useMedicine, hereditaryDisease, doDiet, diffcultyLosingWeight, sleepTime, wakeUpTired, medicineAllergy, someSurgery}) => {
    try {
        await this.api.post('/anamnese', {gender, weight, height, isSmoker, isAlcoholic, exerciseRestriction,
            haveDisease, useMedicine, hereditaryDisease, doDiet, diffcultyLosingWeight, sleepTime, wakeUpTired, medicineAllergy, someSurgery} )
        
    } catch (error) {
        handleResponseError(Error);
    }

}   




}

const apiPatient = new ApiPatient()

export default apiPatient;
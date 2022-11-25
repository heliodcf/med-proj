import axios from "axios";

import { isEmpty } from "../Utils/validation.util";
import { getToken, storeToken } from "../Utils/token.util";

import { handleResponseError } from "../Utils/error.util";

const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:5000";

class ApiPatient {
  constructor() {
    this.api = axios.create({ baseURL: apiUrl });
    this.api.interceptors.request.use((request) => {
      const token = getToken();
      if (token) {
        request.headers = {
          Authorization: `Bearer ${token}`,
        };
      }
      return request;
    });
  }

  signup = async ({ username, email, password }) => {
    try {
      await this.api.post("/auth/signup", { username, email, password });
    } catch (error) {
      handleResponseError(Error);
    }
  };

  login = async ({ email, password }) => {
    try {
      const hasEmptyFields = isEmpty(email, password);

      if (hasEmptyFields) {
        throw new Error("Campos obrigatórios.");
      }
      const { data } = await this.api.post("/auth/login", { email, password });
      storeToken(data.token);
    } catch (error) {
      handleResponseError(error);
    }
  };

  verify = async () => {
    try {
      const { data } = await this.api.get("/auth/verify");
      return data;
    } catch (error) {
      handleResponseError(error);
    }
  };

  anamnese = async ({
    gender,
    weight,
    height,
    isSmoker,
    isAlcoholic,
    exerciseRestriction,
    haveDisease,
    useMedicine,
    hereditaryDisease,
    doDiet,
    diffcultyLosingWeight,
    sleepTime,
    wakeUpTired,
    medicineAllergy,
    someSurgery,
  }) => {
    try {
      await this.api.post(
        "/anamnese",
        {
          gender,
          weight,
          height,
          isSmoker,
          isAlcoholic,
          exerciseRestriction,
          haveDisease,
          useMedicine,
          hereditaryDisease,
          doDiet,
          diffcultyLosingWeight,
          sleepTime,
          wakeUpTired,
          medicineAllergy,
          someSurgery,
        }
      );
    } catch (error) {
      handleResponseError(Error);
    }
  };

  acompanhamento = async ({
    weight,
    abdominalCircumference,
    hipCircumference,
    followedSteps,
    messageToDoctor,
  }) => {
    try {
      await this.api.post("/acompanhamento/consulta", {
        weight,
        abdominalCircumference,
        hipCircumference,
        followedSteps,
        messageToDoctor,
      });
    } catch (error) {
      handleResponseError(Error);
    }
  };
}

const apiPatient = new ApiPatient();

export default apiPatient;

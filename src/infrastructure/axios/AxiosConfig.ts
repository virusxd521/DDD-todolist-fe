import axios, { AxiosError } from "axios";

class AxiosConfig {
  axios: any;
  abortController: any;
  static apiUrl: string = "http://localhost:3000/user";

  constructor(abortController: AbortController) {
    this.abortController = abortController;
    this.axios = axios.create({
      baseURL: AxiosConfig.apiUrl,
      signal: abortController.signal,
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

export default AxiosConfig;

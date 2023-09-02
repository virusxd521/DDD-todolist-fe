import { AxiosError } from "axios";
import AxiosConfig from "../axios/AxiosConfig";

class AuthApi extends AxiosConfig {
  // Authentication-related API calls using Axios
  async register(username: string, email: string, password: string) {
    const payload = {
      username,
      email,
      password,
    };

    // TODO: Need to cancell and reinitiate the connection in case of failure
    try {
      const result = await this.axios.post("/register", payload);
      return result.status;
    } catch (error: unknown) {
      const err = error as AxiosError;
      this.abortController.abort();
      console.error("Error:", err.message);
    }
  }

  async login(username: any, password: any) {
    const data = {
      username,
      password,
    };
    const result = await this.axios.post("/login", data);
    if (result.status === 200 && result.data?.Data?.Token) {
      ("");
    }
    return result;
  }

  // Abort controller
  // signal: controller.signal

  async logout(username: any, password: any) {
    const data = {
      username,
      password,
    };
    const result = await this.axios.post("/login", data);
    if (result.status === 200 && result.data?.Data?.Token) {
      ("");
    }
    return result;
  }

  async delete(username: any, password: any) {
    const data = {
      username,
      password,
    };
    const result = await this.axios.post("/login", data);
    if (result.status === 200 && result.data?.Data?.Token) {
      ("");
    }
    return result;
  }
}

// const abortController = new AbortController();
export default AuthApi;

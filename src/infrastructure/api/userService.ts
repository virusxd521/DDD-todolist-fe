import axios, { AxiosError } from "axios";

// TODO: utilizing the singleton Design pattern
export class UserService {
  private static instance: UserService;
  private axios: any;
  private abortController: any;
  static apiUrl: string = "http://localhost:3000/user";

  // TODO: utilizing dependency injection
  // TODO: need to figure out what's going there and how DI actually works
  private constructor(abortController: AbortController) {
    this.abortController = abortController;
    this.axios = axios.create({
      baseURL: UserService.apiUrl,
      signal: abortController.signal,
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  static getInstance(): UserService {
    if (!UserService.instance) {
      const abortController = new AbortController();
      UserService.instance = new UserService(abortController);
    }
    return UserService.instance;
  }

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
    const result = await this.axios.post("login", data);
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
    const result = await this.axios.post("login", data);
    if (result.status === 200 && result.data?.Data?.Token) {
      ("");
    }
    return result;
  }

  // TODO: Rethink it and remove this method from the user service.
  // TODO: Rename the userService into an auth service
  // TODO: Decouple the APi from this service so that the
  async getUserProfile() {
    // TODO: will send the JWT token automatically and the server will verify that the token actually matches a real user.
    // TODO: if so, then the backend will retrieve the todo list items

    const result = await this.axios.get("/profile");

    return result;
  }

  async delete(username: any, password: any) {
    const data = {
      username,
      password,
    };
    const result = await this.axios.post("login", data);
    if (result.status === 200 && result.data?.Data?.Token) {
      ("");
    }
    return result;
  }
}

// TODO: Usage
// const tokenManager = UserService.getInstance();
// tokenManager.setToken("your_jwt_token_here");
// const token = tokenManager.getToken();
// tokenManager.clearToken();

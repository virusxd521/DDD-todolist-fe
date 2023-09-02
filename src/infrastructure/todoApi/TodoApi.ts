import AxiosConfig from "../axios/AxiosConfig";

class TodoApi extends AxiosConfig {
  // Handle all the todo operations

  // TODO: Rethink it and remove this method from the user service.
  // TODO: Rename the userService into an auth service
  // TODO: Decouple the APi from this service so that the
  async getUserProfile() {
    // TODO: will send the JWT token automatically and the server will verify that the token actually matches a real user.
    // TODO: if so, then the backend will retrieve the todo list items

    const result = await this.axios.get("/profile");

    return result;
  }
}

export default TodoApi;

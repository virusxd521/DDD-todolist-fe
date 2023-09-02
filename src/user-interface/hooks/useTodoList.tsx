import { UserService } from "@/infrastructure/api/userService";

const UseTodoList = () => {
  const userService = UserService.getInstance();
  const reuslts = userService.getUserProfile();

  // Retreiving the user's todoList Items
  const getTodos = async () => {};

  // Retreiving the user's todoList Items
  const addTodos = async () => {};

  // Retreiving the user's todoList Items
  const updateTodos = async () => {};

  // Retreiving the user's todoList Items
  const deleteTodos = async () => {};

  return [getTodos, addTodos, updateTodos, deleteTodos];
};

export default UseTodoList;

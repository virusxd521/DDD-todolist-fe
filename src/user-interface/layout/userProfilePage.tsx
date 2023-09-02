import { useEffect } from "react";
import { UserService } from "@/infrastructure/api/userService";

const UserProfilePage = () => {
  useEffect(() => {
    const userService = UserService.getInstance();
    const reuslts = userService.getUserProfile();
  }, []);

  return (
    <div>
      <h1>Hello user</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
        recusandae magni, inventore ex dolorum odit similique facere ratione
        fuga necessitatibus nemo! Ipsa facere fuga cum esse molestiae sapiente
        corporis fugit!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
        recusandae magni, inventore ex dolorum odit similique facere ratione
        fuga necessitatibus nemo! Ipsa facere fuga cum esse molestiae sapiente
        corporis fugit!
      </p>
    </div>
  );
};

export default UserProfilePage;

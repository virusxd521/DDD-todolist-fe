import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/user-interface/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/user-interface/components/ui/form";
import { Input } from "@/user-interface/components/ui/input";
import UseAuth from "@/user-interface/hooks/useAuth";
import {
  registrationSchema,
  RegistrationSchema,
} from "@/application/schemas/registrationSchema";

// What is enum and what does it used for?

const RegistrationForm = () => {
  const [register] = UseAuth();
  // TODO: Refactor and decouple, working on it
  // TODO: Create a data mapper for the users profile
  // TODO: Send the request to the server and handle the response.
  // TODO: Add redirection to the user profile
  // TODO: Add a loading while the data is being validated (with a time out and error handling)
  const form = useForm<RegistrationSchema>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  // TODO: coupled not good, can be improved
  const handleSubmit = async (data: RegistrationSchema) => {
    const { username, email, password } = data;
    register(username, email, password);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="w-5/12 mx-auto mt-40 flex flex-col bg-slate-300 p-10 rounded-md"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="mb-7">
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Please insert your username" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="mb-7">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="Please insert your email address"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="Please insert your password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-1/2 mx-auto mt-10 py-6 rounded-full" type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default RegistrationForm;

import { z } from "zod";

export const registrationSchema = z.object({
  username: z.string().min(1, { message: "Username is required" }),
  email: z.string().email().min(1, { message: "Email is required" }),
  password: z
    .string()
    .regex(
      new RegExp("(?=.*[A-Za-z])(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$"),
      "Password must be at least 8 characters and include at least one special character"
    ),
});

// TODO: Will be moved to the correct location
export type RegistrationSchema = z.infer<typeof registrationSchema>;

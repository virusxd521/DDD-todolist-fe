import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// There are lib utils and common utils
// utils, can be use to all of my utils

// Import alias
// Comes from tailwinds
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// src/lib/cn.ts

/**
 * Utility function to conditionally join class names
 * @param classes - An array of class names (strings or booleans)
 * @returns A string of concatenated class names
 */
export function cn(...classes: (string | boolean | undefined | null)[]): string {
    return classes.filter(Boolean).join(" ");
  }
  
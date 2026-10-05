const BASE_URL = import.meta.env.VITE_BASE_URL;
import { ApiError } from "./apiError";

async function request<T>(URL: string, options: RequestInit): Promise<T> {
  const response = await fetch(`${BASE_URL}${URL}`, options);
  const body = await response.json();

  if (!response.ok) {
    const message = body.message ? body.message : "Something went wrong.";
    throw new ApiError(response.status, message);
  }

  return body;
}

export { request };

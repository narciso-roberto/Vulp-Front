import { request } from ".";

interface credentials {
  email: string;
  password: number;
}

interface loginResponse {
  token: string;
  username: string;
}

async function login(payload: credentials) {
  const loginResponse = await request<loginResponse>("/auth/login", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  return loginResponse;
}

export { login };

import { Api } from "./api";

export async function Authentication(email: string, senha: string) {
  if (!email || !senha)
    return null;

  try {
    const response = await Api.post('/auth/login', {
      email,
      senha
    });
    return response.data;
  } catch (error) {
    console.log(error)
    return null;
  }

}
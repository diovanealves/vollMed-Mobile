import { Api } from "./api";

export async function getSpecialist(state: string, specialty: string) {
  try {
    const response = await Api.get('/especialista/busca', {
      params: {
        estado: state,
        especialidade: specialty
      }
    })
    console.log(response.data)
    return response.data
  } catch (error) {
    console.log(error);
    return null;
  }

}
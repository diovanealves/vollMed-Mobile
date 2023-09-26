import { Patient } from "../interface/Patient";
import { Api } from "./api";

export async function RegisterPatient(patient: Patient) {
  if (!patient) {
    return null;
  }

  try {
    const response = await Api.post('/paciente', patient)
    return response.data
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getDataPatient(id: string) {
  try {
    const response = await Api.get(`/paciente/${id}`)
    return response.data
  } catch (error) {
    console.log(error)
    return null
  }
}

export async function getConsultationPatient(id: string) {
  try {
    const response = await Api.get(`/paciente/${id}/consultas`)
    return response.data
  } catch (error) {
    console.log(error)
    return null
  }
}
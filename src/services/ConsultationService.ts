import { Api } from "./api"

export async function scheduleAppointment(date: Date, spealistId: string, patientId: string) {
  try {

    const response = await Api.post('/consulta', {
      especialista: spealistId,
      paciente: patientId,
      data: date
    })
    return response.data
  } catch (error) {
    console.log(error)
    return null
  }
}

export async function cancelAppointment(consultationId: string) {
  try {
    const response = await Api.delete(`/consulta/${consultationId}`)
    return response.data
  } catch (error) {
    console.log(error)
    return null
  }
}
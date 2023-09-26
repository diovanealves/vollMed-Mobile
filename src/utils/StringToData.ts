export function StringToDateConverter(dateString: string) {
  // 21/04/2023 15:00
  const [day, month, yearAndHour] = dateString.split("/");
  const [year, hour] = yearAndHour.split(" ");
  const [hours, minutes] = hour.split(":");

  return new Date(Number(year), Number(month) - 1, Number(day), Number(hours), Number(minutes));
}

export function DateToStringConverter(date_: string): string {
  const dateFormatted = new Date(date_).toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })
  const [date, time] = dateFormatted.split(" ")
  const [day, month, year] = date.split("/")
  const [hour, minute] = time.split(":")
  return `${day}/${month}/${year} ${hour}:${minute}`
}
import { Input, VStack, useToast } from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { scheduleAppointment } from "../services/ConsultationService";
import { MyButton } from "../components/Button";
import { StringToDateConverter } from "../utils/StringToData";
import { NavigationProps } from "../@types/navigation";

export default function Scheduling({
  route,
  navigation,
}: NavigationProps<"Scheduling">) {
  const [date, setDate] = useState("");
  const toast = useToast();

  async function agendar() {
    const patientId = await AsyncStorage.getItem("patientId");
    const { spealistId } = route.params;
    if (!patientId || !spealistId || !date) return;
    const convertedDate = StringToDateConverter(date);
    const response = await scheduleAppointment(
      convertedDate,
      spealistId,
      patientId
    );
    if (response) {
      toast.show({
        title: "Consulta agendada com sucesso",
        backgroundColor: "green.500",
      });
      return navigation.goBack();
    }
    toast.show({
      title: "Erro ao agendar consulta",
      description: "Horário indisponível",
      backgroundColor: "red.500",
    });
  }

  return (
    <VStack flex={1} alignItems="center" justifyContent="center" padding={5}>
      <Input placeholder="Digite a data" onChangeText={setDate} />

      <MyButton onPress={agendar}>Agendar</MyButton>
    </VStack>
  );
}

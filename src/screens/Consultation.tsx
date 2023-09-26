import AsyncStorage from "@react-native-async-storage/async-storage";
import { Divider, ScrollView, VStack, useToast } from "native-base";
import { useIsFocused } from "@react-navigation/native";
import { useState, useEffect } from "react";

import { CardConsultation } from "../components/CardConsultation";
import { Title } from "../components/Title";
import { MyButton } from "../components/Button";
import { Consultations } from "../interface/Consultation";
import { getConsultationPatient } from "../services/PatientService";
import { cancelAppointment } from "../services/ConsultationService";
import { DateToStringConverter } from "../utils/StringToData";
import { NavigationProps } from "../@types/navigation";

export default function Consultation({
  navigation,
}: NavigationProps<"Consultation">) {
  const [nextConsultation, setNextConsultation] = useState<Consultations[]>([]);
  const [pastConsultation, setPastConsultation] = useState<Consultations[]>([]);
  const [loading, setloading] = useState(false);
  const toast = useToast();
  const isFocused = useIsFocused;

  useEffect(() => {
    async function getConsultation() {
      const patientId = await AsyncStorage.getItem("patientId");
      if (!patientId) {
        return;
      }

      const allConsultation: Consultations[] = await getConsultationPatient(
        patientId
      );
      const now = new Date();

      const next = allConsultation.filter(
        (consultation) => new Date(consultation.data) > now
      );

      const past = allConsultation.filter(
        (consultation) => new Date(consultation.data) <= now
      );

      setNextConsultation(next);
      setPastConsultation(past);
    }
    getConsultation();
  }, [isFocused, loading, nextConsultation]);

  async function cancel(consultationId: string) {
    const response = await cancelAppointment(consultationId);
    if (response) {
      toast.show({
        title: "Agendamento cancelado com sucesso",
        backgroundColor: "green.500",
      });
      setloading(!loading);
    } else {
      toast.show({
        title: "Erro ao cancelar consulta",
        backgroundColor: "red.500",
      });
    }
  }

  return (
    <ScrollView>
      <VStack p={4}>
        <Title color="blue.500" mt={4}>
          Minhas consultas
        </Title>
        <MyButton onPress={() => navigation.navigate("Explore")} mt={5}>
          Agendar nova consulta
        </MyButton>

        <Title color="blue.500" fontSize="lg" alignSelf="flex-start" mb={2}>
          Próximas consulta
        </Title>

        {nextConsultation?.map((consultation) => (
          <CardConsultation
            key={consultation?.id}
            name={consultation?.especialista?.nome}
            avatar={consultation?.especialista?.imagem}
            specialty={consultation?.especialista?.especialidade}
            date={DateToStringConverter(consultation?.data)}
            onPress={() => cancel(consultation?.id)}
            wasScheduled
          />
        ))}

        <Divider my={2} />

        <Title color="blue.500" fontSize="lg" alignSelf="flex-start" mb={2}>
          Consultas passadas
        </Title>

        {pastConsultation.map((consultation) => (
          <CardConsultation
            key={consultation?.id}
            name={consultation?.especialista?.nome}
            avatar={consultation?.especialista?.imagem}
            specialty={consultation?.especialista?.especialidade}
            date={DateToStringConverter(consultation?.data)}
            wasAttended
          />
        ))}
      </VStack>
    </ScrollView>
  );
}

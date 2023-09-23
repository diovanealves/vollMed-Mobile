import { Divider, ScrollView, Text, VStack } from "native-base";
import { CardConsultation } from "../components/CardConsultation";
import { Title } from "../components/Title";
import { MyButton } from "../components/Button";

export default function Consultation() {
  return (
    <ScrollView p="5">
      <Title color="blue.500">Minhas consultas</Title>
      <MyButton mt={5}>Agendar nova consulta</MyButton>

      <Title color="blue.500" fontSize="lg" alignSelf="flex-start" mb={2}>
        Próximas consulta
      </Title>

      <CardConsultation
        name="Dr. Andre"
        specialty="Cardiologista"
        avatar="https://avatars.githubusercontent.com/u/87160050?v=4"
        date="20/04/2023"
        wasScheduled
      />

      <Divider my={2} />

      <Title color="blue.500" fontSize="lg" alignSelf="flex-start" mb={2}>
        Consultas passadas
      </Title>

      <CardConsultation
        name="Dr. Andre"
        specialty="Cardiologista"
        avatar="https://avatars.githubusercontent.com/u/87160050?v=4"
        date="20/04/2023"
        wasAttended
      />
    </ScrollView>
  );
}

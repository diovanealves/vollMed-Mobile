import { Divider, ScrollView, VStack } from "native-base";
import { CardConsultation } from "../components/CardConsultation";
import { Title } from "../components/Title";
import { MyButton } from "../components/Button";
import { MockConsultation } from "../utils/MockConsultation";

export default function Consultation() {
  return (
    <ScrollView>
      <VStack p={4}>
        <Title color="blue.500" mt={4}>
          Minhas consultas
        </Title>
        <MyButton mt={5}>Agendar nova consulta</MyButton>

        <Title color="blue.500" fontSize="lg" alignSelf="flex-start" mb={2}>
          Próximas consulta
        </Title>

        {MockConsultation.filter(
          (consultation) => consultation.wasScheduled === true
        ).map((consultation) => (
          <CardConsultation
            key={consultation.id}
            name={consultation.name}
            avatar={consultation.avatar}
            specialty={consultation.specialty}
            date={consultation.date}
            wasScheduled
          />
        ))}

        <Divider my={2} />

        <Title color="blue.500" fontSize="lg" alignSelf="flex-start" mb={2}>
          Consultas passadas
        </Title>

        {MockConsultation.filter(
          (consultation) => consultation.wasAttended === true
        ).map((consultation) => (
          <CardConsultation
            key={consultation.id}
            name={consultation.name}
            avatar={consultation.avatar}
            specialty={consultation.specialty}
            date={consultation.date}
            wasAttended
          />
        ))}
      </VStack>
    </ScrollView>
  );
}

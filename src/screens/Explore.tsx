import { Box, ScrollView, VStack } from "native-base";
import { MyInput } from "../components/Input";
import { MyButton } from "../components/Button";
import { Title } from "../components/Title";
import { CardConsultation } from "../components/CardConsultation";
import { MockExplore } from "../utils/MockExplore";

export default function Explore() {
  return (
    <ScrollView flex={1} bg="white">
      <VStack p="5">
        <Box w="100%" borderRadius="lg" p={3} shadow="1" borderRightRadius="md">
          <MyInput placeholder="Digite sua especialidade" />
          <MyInput placeholder="Digite sua localização" />
          <MyButton mt={6}>Buscar</MyButton>
        </Box>

        <Title color="blue.500" fontWeight="bold" mb={5}>
          Resultados da busca
        </Title>

        {MockExplore.filter(
          (consultation) => consultation.wasAttended === true
        ).map((consultation) => (
          <CardConsultation
            key={consultation.id}
            name={consultation.name}
            avatar={consultation.avatar}
            specialty={consultation.specialty}
            wasAttended
            flex={1}
            alignItems="center"
            bg="white"
          />
        ))}
      </VStack>
    </ScrollView>
  );
}

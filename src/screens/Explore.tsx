import { Box, ScrollView, VStack } from "native-base";
import { useState } from "react";
import { MyInput } from "../components/Input";
import { MyButton } from "../components/Button";
import { Title } from "../components/Title";
import { CardConsultation } from "../components/CardConsultation";
import { getSpecialist } from "../services/SpecialistService";
import { Specialty } from "../interface/Specialty";
import { NavigationProps } from "../@types/navigation";

export default function Explore({ navigation }: NavigationProps<"Explore">) {
  const [state, setState] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  async function search() {
    if (!state || !specialty) {
      return null;
    }

    const response = await getSpecialist(state, specialty);
    if (response) {
      setSearchResult(response);
    }
  }

  return (
    <ScrollView flex={1} bg="white">
      <VStack p="5">
        <Box w="100%" borderRadius="lg" p={3} shadow="1" borderRightRadius="md">
          <MyInput
            placeholder="Digite sua especialidade"
            value={specialty}
            onChangeText={setSpecialty}
          />
          <MyInput
            placeholder="Digite sua localização"
            value={state}
            onChangeText={setState}
          />
          <MyButton onPress={search} mt={6}>
            Buscar
          </MyButton>
        </Box>

        <Title color="blue.500" fontWeight="bold" mb={5}>
          Resultados da busca
        </Title>

        {searchResult?.map((specialty: Specialty) => (
          <CardConsultation
            key={specialty.id}
            name={specialty.nome}
            avatar={specialty.imagem}
            specialty={specialty.especialidade}
            onPress={() =>
              navigation.navigate("Scheduling", { spealistId: specialty.id })
            }
            flex={1}
            alignItems="center"
            bg="white"
          />
        ))}
      </VStack>
    </ScrollView>
  );
}

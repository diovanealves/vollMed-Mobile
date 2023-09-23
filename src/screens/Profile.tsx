import { Text, ScrollView, Avatar, Divider, VStack } from "native-base";
import { Title } from "../components/Title";

export default function Profile() {
  return (
    <ScrollView flex={1}>
      <VStack flex={1} alignItems="center" p={5}>
        <Title color="blue.500">Meu Perfil</Title>
        <Avatar
          source={{
            uri: "https://avatars.githubusercontent.com/u/87160050?v=4",
          }}
          mt={6}
          size="xl"
        />

        <Title color="blue.500">Informações Pessoais</Title>
        <Title fontSize="lg" mb={1}>
          Diovane Alves
        </Title>
        <Text>12/12/1990</Text>
        <Text>Anta Gorda / Rio Grande do Sul</Text>

        <Divider my={4} />

        <Title color="blue.500" mb={2}>
          Histórico médico
        </Title>
        <Text>Bronquite</Text>
        <Text>Sinusite</Text>
      </VStack>
    </ScrollView>
  );
}

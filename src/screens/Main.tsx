import { ScrollView, Image, Box, VStack, Divider } from "native-base";

import Logo from "../assets/Logo.png";
import { Title } from "../components/Title";
import { MyInput } from "../components/Input";
import { MyButton } from "../components/Button";
import { CardTestimonial } from "../components/CardTestimonial";
import { MockMain } from "../utils/MockMain";

export default function Main() {
  return (
    <ScrollView flex={1} bg="white">
      <VStack
        flex={1}
        alignItems="flex-start"
        justifyContent="flex-start"
        py={7}
        px={5}
      >
        <Image source={Logo} alt="Logo da VollMed" />
        <Title color="blue.500" fontWeight="700" alignSelf="flex-start" mb="6">
          Boas Vindas!
        </Title>

        <Box w="100%" borderRadius="lg" p={3} shadow="1" borderRightRadius="md">
          <MyInput placeholder="Digite sua especialidade" />
          <MyInput placeholder="Digite sua localização" />
          <MyButton>Buscar</MyButton>
        </Box>

        <Title color="blue.800" alignSelf="center" mb="4">
          Depoimentos
        </Title>

        <VStack space="3" divider={<Divider />} w="100%">
          {MockMain.map((mock) => {
            return (
              <CardTestimonial
                key={mock.id}
                description={mock.description}
                name={mock.name}
                age={mock.age}
                city={mock.city}
              />
            );
          })}
        </VStack>
      </VStack>
    </ScrollView>
  );
}

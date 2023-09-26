import { Text, ScrollView, Avatar, Divider, VStack } from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Title } from "../components/Title";
import { getDataPatient } from "../services/PatientService";
import { Patient } from "../interface/Patient";
import { MyButton } from "../components/Button";
import { NavigationProps } from "../@types/navigation";

export default function Profile({ navigation }: NavigationProps<"Profile">) {
  const [dataPatient, setDataPatient] = useState({} as Patient);

  useEffect(() => {
    async function DataPatient() {
      const patientId = await AsyncStorage.getItem("patientId");

      if (!patientId) {
        return null;
      }

      const response = await getDataPatient(patientId);
      if (response) {
        setDataPatient(response);
      }
    }

    DataPatient();
  }, []);

  function SignOut() {
    AsyncStorage.removeItem("token");
    AsyncStorage.removeItem("patientId");

    navigation.navigate("Login");
  }

  return (
    <ScrollView flex={1}>
      <VStack flex={1} alignItems="center" p={5}>
        <MyButton
          onPress={() => SignOut()}
          position="absolute"
          zIndex={10}
          w="25%"
          top="-6%"
          right="2%"
        >
          Deslogar
        </MyButton>

        <Title color="blue.500">Meu Perfil</Title>
        <Avatar
          source={{
            uri: dataPatient.imagem,
          }}
          mt={6}
          size="xl"
        />

        <Title color="blue.500">Informações Pessoais</Title>
        <Title fontSize="lg" mb={1}>
          {dataPatient.nome}
        </Title>
        <Text>{dataPatient?.email}</Text>
        <Text>
          {dataPatient?.endereco?.rua} / {dataPatient?.endereco?.estado}
        </Text>

        <Divider my={4} />

        <Title color="blue.500" mb={2}>
          Planos de saúde
        </Title>

        {dataPatient?.planosSaude?.map((plans, i) => (
          <Text key={i}>{plans}</Text>
        ))}
      </VStack>
    </ScrollView>
  );
}

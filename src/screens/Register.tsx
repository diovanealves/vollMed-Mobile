import { useState } from "react";
import { Box, Image, Checkbox, ScrollView, Text, useToast } from "native-base";

import Logo from "../assets/Logo.png";
import { Title } from "../components/Title";
import { MyInput } from "../components/Input";
import { MyButton } from "../components/Button";
import { sections } from "../utils/RegistrationEntry";
import { RegisterPatient } from "../services/PatientService";
import { NavigationProps } from "../@types/navigation";

export default function Register({ navigation }: NavigationProps<"Register">) {
  const [data, setData] = useState({} as any);
  const [plans, setPlans] = useState([] as number[]);
  const [numSection, setNumSection] = useState(0);
  const toast = useToast();

  function NextSection() {
    if (numSection < sections.length - 1) {
      setNumSection(numSection + 1);
    } else {
      SignUpPatient();
    }
  }

  function BackSection() {
    if (numSection > 0) {
      setNumSection(numSection - 1);
    }
  }

  function updatedData(id: string, value: string) {
    setData({ ...data, [id]: value });
  }

  async function SignUpPatient() {
    const response = await RegisterPatient({
      cpf: data.cpf,
      nome: data.nome,
      email: data.email,
      endereco: {
        cep: data.cep,
        rua: data.rua,
        numero: data.numero,
        estado: data.estado,
        complemento: data.complemento,
      },
      senha: data.senha,
      telefone: data.telefone,
      possuiPlanoSaude: plans.length > 0,
      planosSaude: plans,
      imagem: data.imagem,
    });

    if (response) {
      toast.show({
        title: "Cadastro realizado com sucesso",
        description: "Você está sendo redirecionado para fazer o login",
        backgroundColor: "green.500",
      });

      navigation.navigate("Login");
    } else {
      toast.show({
        title: "Erro ao realizar o cadastro",
        description: "Verifique os dados e tente novamente",
        backgroundColor: "red.500",
      });
    }
  }

  return (
    <ScrollView flex={1} p={5}>
      <Image source={Logo} alt="Logo da Voll" alignSelf="center" />

      <Title>{sections[numSection].title}</Title>

      <Box>
        {sections[numSection].textEntry.map((entry) => {
          return (
            <MyInput
              key={entry.id}
              label={entry.label}
              placeholder={entry.placeholder}
              secureTextEntry={entry.secureTextEntry}
              value={data[entry.name]}
              onChangeText={(value) => updatedData(entry.name, value)}
            />
          );
        })}
      </Box>

      <Box>
        {numSection == 2 && (
          <Text color="blue.800" fontSize="md" fontWeight="bold" my={3}>
            Selecione os planos:
          </Text>
        )}
        {sections[numSection]?.checkbox.map((check) => {
          return (
            <Checkbox
              key={check.id}
              value={check.value}
              onChange={() => {
                setPlans((previousPlans) => {
                  if (previousPlans.includes(check.id)) {
                    return previousPlans.filter((id) => id !== check.id);
                  }

                  return [...previousPlans, check.id];
                });
              }}
              isChecked={plans.includes(check.id)}
            >
              {check.value}
            </Checkbox>
          );
        })}
      </Box>

      {numSection > 0 && (
        <MyButton onPress={() => BackSection()} bg="gray.400">
          Voltar
        </MyButton>
      )}
      <MyButton onPress={() => NextSection()} mt={4} mb={22}>
        {numSection == 2 ? "Finalizar" : "Avancar"}
      </MyButton>
    </ScrollView>
  );
}

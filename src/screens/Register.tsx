import { useState } from "react";
import { Box, Image, Checkbox, ScrollView, Text } from "native-base";

import Logo from "../assets/Logo.png";
import { Title } from "../components/Title";
import { MyInput } from "../components/Input";
import { MyButton } from "../components/Button";
import { sections } from "../utils/RegistrationEntry";

export default function Register() {
  const [numSection, setNumSection] = useState(0);

  function NextSection() {
    if (numSection < sections.length - 1) {
      setNumSection(numSection + 1);
    }
  }

  function BackSection() {
    if (numSection > 0) {
      setNumSection(numSection - 1);
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
            />
          );
        })}
      </Box>

      <Box>
        {sections[numSection].checkbox.length > 0 && (
          <Text color="blue.800" fontSize="md" fontWeight="bold" my={3}>
            Selecione os planos:
          </Text>
        )}
        {sections[numSection]?.checkbox.map((check) => {
          return (
            <Checkbox key={check.id} value={check.value}>
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
        Avançar
      </MyButton>
    </ScrollView>
  );
}

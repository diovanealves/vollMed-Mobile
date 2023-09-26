import { Image, Text, VStack, Box, Link, useToast } from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwtDecode from "jwt-decode";
import { TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";

import Logo from "../assets/Logo.png";
import { Title } from "../components/Title";
import { MyInput } from "../components/Input";
import { MyButton } from "../components/Button";
import { Authentication } from "../services/AuthenticationService";
import { NavigationProps } from "../@types/navigation";

export default function Login({ navigation }: NavigationProps<"Login">) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const toast = useToast();

  useEffect(() => {
    AsyncStorage.removeItem("token");

    async function verifyLogin() {
      const token = await AsyncStorage.getItem("token");

      if (token) {
        navigation.replace("Tabs");
      }

      setLoading(false);
    }

    verifyLogin();
  }, []);

  async function LoginIn() {
    const response = await Authentication(email, password);
    if (response) {
      const { token } = response;
      AsyncStorage.setItem("token", token);

      const decodeToken = jwtDecode(token) as any;
      const decodePatientId = decodeToken.id;
      AsyncStorage.setItem("patientId", decodePatientId);

      navigation.replace("Tabs");
    } else {
      toast.show({
        title: "Erro no login",
        description: "Email ou senha não conferem",
        backgroundColor: "red.500",
      });
    }
  }

  if (loading) {
    return null;
  }

  return (
    <VStack flex={1} alignItems="center" justifyContent="center" p={5}>
      <Image source={Logo} alt="Logo da Voll" />

      <Title>Faça login em sua conta</Title>

      <Box>
        <MyInput
          label="Email"
          placeholder="Insira seu endereço de e-mail"
          value={email}
          onChangeText={setEmail}
        />
        <MyInput
          label="Senha"
          placeholder="Insira sua senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </Box>

      <MyButton onPress={() => LoginIn()}>Entrar</MyButton>

      <Link href="https://www.alura.com.br" mt={1}>
        Esqueceu sua senha?
      </Link>

      <Box w="100%" flexDirection="row" justifyContent="center" mt={10}>
        <Text>Ainda não tem cadastro? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text color="blue.500" fontWeight="bold">
            Faça seu cadastro
          </Text>
        </TouchableOpacity>
      </Box>
    </VStack>
  );
}

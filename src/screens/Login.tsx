import {
  Image,
  Text,
  VStack,
  Box,
  FormControl,
  Input,
  Button,
  Link,
} from "native-base";

import Logo from "../assets/Logo.png";
import { TouchableOpacity } from "react-native";
import { Title } from "../components/Title";
import { MyInput } from "../components/Input";
import { MyButton } from "../components/Button";

export default function Login({ navigation }) {
  return (
    <VStack flex={1} alignItems="center" justifyContent="center" p={5}>
      <Image source={Logo} alt="Logo da Voll" />

      <Title>Faça login em sua conta</Title>

      <Box>
        <MyInput label="Email" placeholder="Insira seu endereço de e-mail" />
        <MyInput label="Senha" placeholder="Insira sua senha" />
      </Box>

      <MyButton onPress={() => navigation.navigate("Tabs")}>Entrar</MyButton>

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

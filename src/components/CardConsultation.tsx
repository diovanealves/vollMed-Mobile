import { Avatar, ITextProps, Text, VStack } from "native-base";
import { MyButton } from "./Button";

interface CardProps extends ITextProps {
  name: string;
  avatar: string;
  specialty: string;
  date?: string;
  wasAttended?: boolean;
  wasScheduled?: boolean;
  onPress?: () => void;
}

export function CardConsultation({
  name,
  avatar,
  specialty,
  date,
  wasAttended,
  wasScheduled,
  onPress,
  ...rest
}: CardProps) {
  return (
    <VStack
      w="100%"
      bg={wasAttended ? "blue.100" : "white"}
      p="5"
      borderRadius="lg"
      shadow="2"
      my={2}
      {...rest}
    >
      <VStack flex="1" flexDir="row">
        <Avatar
          size="lg"
          source={{
            uri: avatar,
          }}
        />
        <VStack pl="4">
          <Text fontSize="md" bold>
            {name}
          </Text>
          <Text>{specialty}</Text>
          <Text>{date}</Text>
        </VStack>
      </VStack>

      <MyButton mt={3} onPress={onPress}>
        {wasScheduled ? "Cancelar" : "Agendar consulta"}
      </MyButton>
    </VStack>
  );
}

import { Text, Box } from "native-base";
import { Title } from "./Title";

interface CardTestimonialProps {
  description: string;
  name: string;
  age: string;
  city: string;
}

export function CardTestimonial({
  description,
  name,
  age,
  city,
}: CardTestimonialProps) {
  return (
    <Box w="100%" pb="4">
      <Text textAlign="justify">{description}</Text>
      <Title fontSize="18" fontWeight="bold">
        {name}, {age}, {city}.
      </Title>
    </Box>
  );
}

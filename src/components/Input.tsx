import { FormControl, Input } from "native-base";

interface InputTextProps {
  label?: string;
  placeholder: string;
  secureTextEntry?: boolean;
}

export function MyInput({
  label,
  placeholder,
  secureTextEntry,
}: InputTextProps) {
  return (
    <FormControl mt={3}>
      {label && <FormControl.Label>{label}</FormControl.Label>}
      <Input
        placeholder={placeholder}
        w="100%"
        size="lg"
        borderRadius="lg"
        backgroundColor="gray.100"
        secureTextEntry={secureTextEntry}
        shadow={3}
      />
    </FormControl>
  );
}

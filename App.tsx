import { NativeBaseProvider, StatusBar } from "native-base";

import { Theme } from "./src/style/theme";
import Routes from "./src/routes/Routes";

export default function App() {
  return (
    <NativeBaseProvider theme={Theme}>
      <StatusBar backgroundColor={Theme.colors.blue[800]} />
      <Routes />
    </NativeBaseProvider>
  );
}

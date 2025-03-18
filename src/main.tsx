import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider";
import App from "./App.tsx";
import { ColorModeProvider } from "./components/ui/color-mode.tsx";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider value={defaultSystem}>
      <ColorModeProvider forcedTheme="dark">
        <App />
      </ColorModeProvider>
    </ChakraProvider>
  </StrictMode>
);

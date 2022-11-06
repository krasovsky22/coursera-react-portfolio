import { ChakraProvider } from '@chakra-ui/react';
import { Alert, Footer, Header } from '@components';

import {
  LandingSection,
  ProjectsSection,
  ContactMeSection
} from '@components/sections';

import { AlertProvider } from '@context/alertContext';

function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <main>
          <Header />
          <LandingSection />
          <ProjectsSection />
          <ContactMeSection />
          <Footer />
          <Alert />
        </main>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;

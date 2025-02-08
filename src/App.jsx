import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/Main";
import { LanguageProvider } from "./contexts/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <Header />
      <Main />
      <Footer />
    </LanguageProvider>
  );
}

export default App;

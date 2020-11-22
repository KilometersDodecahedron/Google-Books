import Container from "./components/Container.js";
import Navbar from "./components/Navbar.js";
import Hero from "./components/Hero.js";
import './App.css';

function App() {
  return (
    <Container fluid={true} >
      <Navbar />
      <Hero />
    </Container>
  );
}

export default App;

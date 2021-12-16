import { Container } from "./AppStyle";
import MovList from "./moviList";
import Navbar from "./Navbar";
import Add from "./Add";
function App() {
  return (
    <Container>
      <Navbar />
      <Add />
      <MovList />
    </Container>
  );
}

export default App;

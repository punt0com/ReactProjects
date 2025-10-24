import { Header } from "./components/Header/Header";
import { CoreConcepts } from "./components/CoreConcepts/CoreConcepts";
import { Examples } from "./components/Examples/Examples";

function App() {
  // aqui podemos usar const porque se vuelve a crear la variable por natureleza de como funciona react.
  // const [selectedTopic, setSelectedTopic] = useState(ExamplesData.components);

  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <h2>Time to get started!</h2>

        <Examples />
      </main>
    </>
  );
}

export default App;

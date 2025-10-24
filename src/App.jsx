import { useState } from "react";
import { CoreConceptsData } from "./assets/data";
import { Header } from "./components/Header/Header";
import { CoreConcepts } from "./components/CoreConcepts/CoreConcepts";
import { Example } from "./components/Example/Example";
import { ExamplesData } from "./assets/data";

function App() {
  // aqui podemos usar const porque se vuelve a crear la variable por natureleza de como funciona react.
  // const [selectedTopic, setSelectedTopic] = useState(ExamplesData.components);
  const [selectedTopic, setSelectedTopic] = useState(undefined);

  let tabContent = <p>Please Select a Topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3> {selectedTopic.title}</h3>
        <p>{selectedTopic.description}</p>
        <pre>
          <code>{selectedTopic.code}</code>
        </pre>
      </div>
    );
  }

  const onButtonClickArrowFnc = (selectedBtn) => {
    setSelectedTopic(ExamplesData[selectedBtn]);
    // tabBtn = selectedBtn;
  };

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CoreConceptsData.map((concept) => (
              <CoreConcepts {...concept} />
            ))}

            {/* <CoreConcepts {...CoreConceptsData[1]} /> */}
            {/* <CoreConcepts title="Props" description="The core UI Building block" img={components} />
            <CoreConcepts title="Components" description="The core UI Building block" img={components} />
            <CoreConcepts title="Components" description="The core UI Building block" img={components} /> */}
          </ul>
        </section>
        <h2>Time to get started!</h2>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <Example
              onBtnClickedArrow={() => onButtonClickArrowFnc("components")}
            >
              Components
            </Example>
            <Example onBtnClickedArrow={() => onButtonClickArrowFnc("jsx")}>
              JSX
            </Example>
            <Example onBtnClickedArrow={() => onButtonClickArrowFnc("state")}>
              State
            </Example>
            <Example onBtnClickedArrow={() => onButtonClickArrowFnc("props")}>
              Props
            </Example>
          </menu>

          {/* {!selectedTopic ? (
            <p>Please Select a Topic.</p>
          ) : (
            <div id="tab-content">
              <h3> {selectedTopic.title}</h3>
              <p>{selectedTopic.description}</p>
              <pre>
                <code>{selectedTopic.code}</code>
              </pre>
            </div>
          )} */}

          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;

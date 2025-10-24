import { useState } from "react";
import { Example } from "../Example/Example";
import { ExamplesData } from "../../assets/data";

export function Examples() {
  const [selectedTopic, setSelectedTopic] = useState(undefined);

  const onButtonClickArrowFnc = (selectedBtn) => {
    setSelectedTopic(ExamplesData[selectedBtn]);
  };

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

  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <Example onBtnClickedArrow={() => onButtonClickArrowFnc("components")}>
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
  );
}

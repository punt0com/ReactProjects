import { useState } from "react";
import { Example } from "../Example/Example";
import { ExamplesData } from "../../assets/data";
import { capitalice } from "../../utils/misc";
import { Section } from "../Common/Section/Section";

export function Examples() {
  const allKeys = Object.keys(ExamplesData);
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
    <Section id="examples" title="Examples">
      <menu>
        {allKeys.map((key) => (
          <Example onBtnClickedArrow={() => onButtonClickArrowFnc(key)}>
            {capitalice(key)}
          </Example>
        ))}
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
    </Section>
  );
}

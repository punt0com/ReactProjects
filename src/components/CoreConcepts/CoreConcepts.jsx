import "./CoreConcepts.css";
import { CoreConcept } from "../CoreConcept/CoreConcept";
import { CoreConceptsData } from "../../assets/data";

export function CoreConcepts({ img, title, description }) {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CoreConceptsData.map((concept, index) => (
          <CoreConcept key={index} {...concept} />
        ))}

        {/* <CoreConcept {...CoreConceptsData[1]} /> */}
        {/* <CoreConcept title="Props" description="The core UI Building block" img={components} />
                <CoreConcept title="Components" description="The core UI Building block" img={components} />
                <CoreConcept title="Components" description="The core UI Building block" img={components} /> */}
      </ul>
    </section>
  );
}

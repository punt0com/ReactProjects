import "./CoreConcepts.css";
import { CoreConcept } from "../CoreConcept/CoreConcept";
import { CoreConceptsData } from "../../assets/data";
import { Section } from "../Common/Section/Section";

export function CoreConcepts() {
  return (
    <Section id="core-concepts" title="Core Concepts">
      <ul>
        {CoreConceptsData.map((concept, index) => (
          <CoreConcept key={index} {...concept} />
        ))}
        {/* <CoreConcept title="Props" description="The core UI Building block" img={components} /> */}
      </ul>
    </Section>
  );
}

import  "./CoreConcepts.css";


export function CoreConcepts({ img, title, description }) {
  return (
    <ul>
      <li>
        <img src={img} alt="Stylized atom" />
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    </ul>
  );
}

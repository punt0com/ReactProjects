//Recordar que el ... sirve para agrupar propiedades por lo que esto se podria reescribir asi:

// export function Section({ children, title,...masProps }) {
//En este contexto id esta dentro de masProps
//   return <section  {...masProps}>
//     <h2>{title}</h2>
//     {children}
//   </section>;
// }

export function Section({ children, id, title, titleContainer = "h2" }) {
  const TitleContainer = titleContainer;
  return (
    <section id={id}>
      <TitleContainer>{title}</TitleContainer>
      {children}
    </section>
  );
}

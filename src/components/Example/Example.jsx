export function Example({ children,onBtnClickedArrow }) {

  return (
    <li>
      <button onClick={onBtnClickedArrow}>{children}</button>
    </li>
  );
}

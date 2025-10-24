export function Example({ children,onBtnClicked,onBtnClickedArrow }) {

  return (
    <li>
      <button onClick={onBtnClickedArrow}>{children}</button>
    </li>
  );
}

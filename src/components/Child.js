import { useContext } from "react";
import { AppContext } from "../AppContext";

export default function Child() {
  const { conPass, setConPass } = useContext(AppContext);
  return (
    <div>
      I am child component.
      <button onClick={() => setConPass(conPass + 1)}>context</button>
    </div>
  );
}

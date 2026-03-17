export default function Navbar({ data: { navPass, handleClick } }) {
  return (
    <div>
      This is Navbar.{navPass}
      <br />
      <button onClick={() => handleClick(navPass)}>click</button>
    </div>
  );
}

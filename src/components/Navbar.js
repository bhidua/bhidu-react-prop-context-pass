export default function Navbar({ data: { navPass, handleClick } }) {
  return (
    <div>
      This is Navbar.{navPass}
      <button onClick={() => handleClick(navPass)}>click</button>
    </div>
  );
}

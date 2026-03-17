import GrandParent from "./GrandParent";

export default function Content({ data }) {
  return (
    <div>
      This is content area. Passed value {data}
      <GrandParent />
    </div>
  );
}

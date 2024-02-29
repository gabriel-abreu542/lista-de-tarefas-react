import Checkbox from "./CheckBox";

interface Props {
  items: string[];
  heading: string;
}

function ListGroup({ items, heading }: Props) {
  return (
    <>
      <h1 className="title">{heading}</h1>

      <ul className="list-group">
        {items.map((item) => (
          <li>
            <Checkbox label={item} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

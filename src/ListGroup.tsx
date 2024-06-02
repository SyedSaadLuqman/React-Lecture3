import { MouseEvent, useState } from "react";

interface Props {
  title: string;
  items: string[];
}

export default function ListGroup({ items: list, title }: Props) {
  let [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <div>
      <h1 className="mt-5">My {title} List</h1>
      {list.length == 0 && <p>No Items Found</p>}
      <ul className="list-group mt-4">
        {list.map((item, index) => (
          <li
            key={item}
            className={
              "list-group-item" + (selectedIndex == index ? " active" : "")
            }
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

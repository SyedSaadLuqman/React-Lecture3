import { useState } from "react";

export default function ListGroup() {
  let [selectedIndex, setSelectedIndex] = useState(-1);
  let title = "Cars";
  let list = ["Suzkui", "Ferrari", "Honda", "Mazda"];
  return (
    <div>
      <h1 className="mt-5">{title}</h1>
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

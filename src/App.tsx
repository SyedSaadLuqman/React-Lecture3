import Message from "./Message";
import ListGroup from "./ListGroup";

function App() {
  let title = "Phone";
  let list = ["Shirt", "Trouser", "Ferrari", "Mazda"];

  return (
    <div className="container">
      <ListGroup title={title} items={list} />
    </div>
  );
}

export default App;

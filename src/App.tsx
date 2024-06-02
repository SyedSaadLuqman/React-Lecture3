import Message from "./Message";
import ListGroup from "./ListGroup";

function App() {
  let title = "Phone";
  let list = ["Ferrari", "Honda", "Ferrari", "Mazda"];

  return (
    <div className="container">
      <ListGroup title={title} items={list} />
    </div>
  );
}

export default App;

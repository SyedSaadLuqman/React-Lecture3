const Message = () => {
  function getName() {
    return "saad";
  }
  const name = <button className="btn btn-primary">Hello</button>;
  return (
    <div>
      Message for {getName()} <br />
      {name + " Message "}
    </div>
  );
};

export default Message;

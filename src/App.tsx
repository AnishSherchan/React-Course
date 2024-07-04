import { useState } from "react";
import "./App.css";
import UserGreeting from "./Components/UserGreeting";
import UserName from "./Components/UserName";
import ChangeGreetingBtn from "./Components/ChangeGreetingBtn";

function App() {
  // eslint-disable-next-line
  const [name, setName] = useState("Anish");
  const [greeting, setGreeting] = useState("Hi");

  return (
    <>
      <UserGreeting greeting={greeting} />
      <UserName userName={name} />
      <div style={{ marginTop: "20px" }}>
        <ChangeGreetingBtn handleChangeGreeting={setGreeting} />
      </div>{" "}
    </>
  );
}

export default App;

import React from "react";

const ChangeGreetingBtn = ({
  handleChangeGreeting,
}: {
  handleChangeGreeting: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <button onClick={() => handleChangeGreeting("Bye")}>Change Greeting</button>
  );
};

export default ChangeGreetingBtn;

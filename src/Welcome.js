import React from "react";
function Welcome({ location }) {
  let name = location["state"]["name"];
  return (
    <div>
      <h1>welcome {name}</h1>
    </div>
  );
}
export default Welcome;

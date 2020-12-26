import React from "react";
function Welcome({ location }) {
  let name = "";
  try {
    name = location["state"]["name"];
  } catch (err) {}
  return (
    <div>
      <h1>{!name ? "" : `welcome ${name}`}</h1>
    </div>
  );
}
export default Welcome;

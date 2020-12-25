import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import "./signup.css";
import EmailIcon from "@material-ui/icons/Email";
import Axios from "./Axios";
import LockIcon from "@material-ui/icons/Lock";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
function Signin() {
  const history = useHistory();
  const [details, setDetails] = useState({ email: "", password: "" });
  function handleChange(evnt) {
    setDetails((prev) => ({
      ...prev,
      [evnt.target.name]: evnt.target.value
    }));
  }

  function empty() {
    setDetails({ name: "", email: "", password: "" });
  }

  function handleClick() {
    const { email, password } = details;
    if (!email || !password) {
      empty();
      return;
    }
    async function fetch() {
      try {
        let data = await Axios.post("/userverify", {
          email: email,
          password: password
        });
        console.log(data["data"][0]);
        data = data["data"][0];
        empty();
        history.push("/welcome", {
          name: data.name
        });
      } catch (err) {
        empty();
      }
    }
    fetch();
  }
  return (
    <div>
      <div className="top">
        <h1>Sign in</h1>
      </div>
      <div>
        <EmailIcon fontSize="large" />
        <Input
          placeholder="Enter your email"
          onChange={handleChange}
          name="email"
          value={details.email}
        />
      </div>
      <div>
        <LockIcon fontSize="large" className="icon" />
        <Input
          placeholder="Enter the password"
          type="password"
          onChange={handleChange}
          name="password"
          value={details.password}
        />
      </div>
      <br />
      <Button
        variant="contained"
        color="primary"
        disableElevation
        onClick={handleClick}
      >
        Sign in
      </Button>

      <Link to="/signup" className="link">
        Signup
      </Link>
    </div>
  );
}
export default Signin;

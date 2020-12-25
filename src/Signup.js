import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import "./signup.css";
import Axios from "./Axios.js";
import Input from "@material-ui/core/Input";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import EmailIcon from "@material-ui/icons/Email";
import LockIcon from "@material-ui/icons/Lock";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
function Signup() {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });
  const history = useHistory();
  function empty() {
    setDetails({ name: "", email: "", password: "" });
  }

  function handleChange(evnt) {
    setDetails((prev) => ({
      ...prev,
      [evnt.target.name]: evnt.target.value
    }));
  }

  function handleClick(details) {
    const { name, email, password } = details;
    if (!name || !email || !password) {
      empty();
      return;
    }
    async function fetch() {
      try {
        const data = await Axios.post("/users", {
          name: name,
          email: email,
          password: password
        });
        empty();
        history.push("/signin");
      } catch (err) {
        empty();
      }
    }
    fetch();
  }

  return (
    <div>
      <h1 className="top">Sign up</h1>
      <div>
        <PermIdentityIcon fontSize="large" className="icon" />
        <Input
          placeholder="Enter your name"
          onChange={handleChange}
          name="name"
          value={details.name}
        />
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
        onClick={() => handleClick(details)}
      >
        Sign up
      </Button>
      <Link to="/signin" className="link">
        Login
      </Link>
    </div>
  );
}
export default Signup;

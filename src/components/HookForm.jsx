import React, { useState } from "react";

const HookForm = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");

  return (
    <div>
      <h1>Form</h1>
      <form>
        <div>
          <label>First Name</label>
          <input
            name="firstname"
            type="text"
            onChange={(e) => setFirstname(e.target.value)}
            value={firstname}
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            name="lastname"
            type="text"
            onChange={(e) => setLastname(e.target.value)}
            value={lastname}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            name="email"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            name="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            name="confirmpassword"
            type="password"
            onChange={(e) => setConfirmpassword(e.target.value)}
            value={confirmpassword}
          />
        </div>
      </form>
      <p>First Name: {firstname}</p>
      <p>Last Name: {lastname}</p>
      <p>Email: {email}</p>
      <p>Email: {password}</p>
      <p>Email: {confirmpassword}</p>
    </div>
  );
};
export default HookForm;

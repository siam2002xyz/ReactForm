import React, { useState } from "react";

function App() {
  let [name, setName] = useState("");
  let [nameErr, setNameErr] = useState("");
  let [email, setEmail] = useState("");
  let [emailErr, setEmailErr] = useState("");
  let [password, setPassword] = useState("");
  let [passwordErr, setPasswordErr] = useState("");

  const handelSubmit = () => {
    if (!name) {
      setNameErr("Name is required!");
    } else if (!email) {
      setEmailErr("Email is required!");
    } else if (!password) {
      setPasswordErr("Password is required!");
    } else {
      console.log("Submitted.");
    }
  };

    return (
      <div>
        <div className="w-96 p-4 border rounded-xl flex flex-col gap-3 m-auto mt-20">
          <input
          onChange={(e) => {setName(e.target.value), setNameErr("")}}
            type="text"
            placeholder="Input your name"
            className="border p-1"
          />
          <p>{nameErr}</p>

          <input
          onChange={(e) => {setEmail(e.target.value), setEmailErr("")}}
            type="email"
            placeholder="Input your email"
            className="border p-1"
          />
          <p>{emailErr}</p>

          <input
          onChange={(e) => {setPassword(e.target.value), setPasswordErr("")}}
            type="password"
            placeholder="Input your password"
            className="border p-1"
          />
          <p>{passwordErr}</p>

          <button onClick={handelSubmit} className="py-1 px-4 bg-green-700 text-white">Submit</button>
        </div>
      </div>
    );
  
}
export default App;

import React, { useState } from "react";

export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div>
      <h1>Get in touch with us</h1>
      <p>kANYAKUMARI,TAMILNADU</p>
      <p>
        1/2a/7,
        <br />
        thingalnager
        <br />
        nagericoil
      </p>

      <label>Name :</label>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <label>Email :</label>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <label>message :</label>
      <textarea value={message} onChange={(e) => setMessage(e.target.value)} />

      {/* <button onClick={}>Submit</button> */}
    </div>
  );
}

import React, { useState } from "react";
import "./requestDemo.css";

const RequestDemo = () => {
  const [demo, setDemo] = useState({
    name: "",
    email: "",
    phone: "",
    additionalInformation: "",
  });

  return (
    <div className="requestDemo-section">
      <h2 className="requestDemo_header">Request A Demo</h2>
      <form>
        <div className="inputs-container">
          <input
            className="input"
            id="name"
            name="name"
            placeholder="Name"
            value={demo.name}
            onChange={(e) => {
              setDemo({
                ...demo,
                name: e.target.value,
              });
            }}
            required
          />
          <input
            className="input"
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            required
          />
        </div>
        <input
          className="input"
          id="phone"
          name="phone"
          placeholder="Phone"
          value={demo.phone}
          onChange={(e) => setDemo({ ...demo, phone: e.target.value })}
          style={{ marginTop: "20px", width: "450px" }}
          required
        />

        <textarea
          className="input"
          id="additionalInfo"
          name="additionalInfo"
          placeholder="Additional Details!"
          value={demo.additionalInformation}
          onChange={(e) =>
            setDemo({ ...demo, additionalInformation: e.target.value })
          }
          style={{
            marginTop: "20px",
            width: "450px",
            height: "100px",
            resize: "none",
          }}
          required
        />

        <button type="submit" className="requestDemo__button">
          Submit Request
        </button>
      </form>
    </div>
  );
};

export default RequestDemo;

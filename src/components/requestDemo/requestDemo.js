import React, { useState } from "react";
import "./requestDemo.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import  {toast}  from "react-toastify";

const RequestDemo = () => {
  const [demo, setDemo] = useState({
    name: "",
    email: "",
    phone: "",
    additionalInformation: "",
  });
  const form = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_wt7onab",
        "template_zn3bjd9",
        form.current,
        "pljSqWZvUxfEidYxw"
      )
      .then(function (result) {
       
        // console.log(result.text);
        if (result.text === "OK") {
          setDemo({
            name: "",
            email: "",
            phone: "",
            additionalInformation: "",
          });
          toast.success("تم ارسال الطلب بنجاح");
        } else {
          toast.warning(result);
        }
      })
      .catch(function (err) {
        toast.error(err);
      });
  }
  return (
    <div className="requestDemo-section">
      <h2 className="requestDemo_header">Request A Demo</h2>
      <form ref={form} onSubmit={handleSubmit}>
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
            value={demo.email}
            onChange={(e) =>
              setDemo({
                ...demo,
                email: e.target.value,
              })
            }
            placeholder="Email"
            required
          />
        </div>

        <input
          className="input"
          id="number"
          name="number"
          placeholder="number"
          value={demo.phone}
          onChange={(e) => setDemo({ ...demo, phone: e.target.value })}
          style={{ marginTop: "20px", width: "100%" }}
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
            width: "100%",
            height: "100px",
            resize: "none",
          }}
        />

        <button type="submit" className="requestDemo__button">
          Submit Request
        </button>
      </form>
    </div>
  );
};

export default RequestDemo;

import React, { useRef, useState } from "react";
import "./contactus.css";
import { useNavigate } from "react-router-dom";

export const Contactus = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const queryRef = useRef();

  const [error, setErrors] = useState({
    name: false,
    email: false,
    phone: false,
    query: false,
  });

  const submitForm = () => {
    let isValid = validate();
    console.log(name);
    if (isValid) {
      alert("Form Submitted");
      navigate("/");
    }
  };

  const validate = (control) => {
    let newError = { ...error };
    if (control) {
      switch (control) {
        case "name":
          newError.name =
            name === "" || !/^[A-Za-z ]+$/.test(name) ? true : false;
          break;
        case "email":
          newError.email =
            email === "" ||
            !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
              email
            )
              ? true
              : false;
          break;
        case "phone":
          newError.phone =
            phone === "" || !/^[0-9]*$/.test(phone) ? true : false;
          break;
        case "query":
          newError.query = query === "" ? true : false;
          break;
      }
    } else {
      newError.name = name === "" || !/^[A-Za-z ]+$/.test(name) ? true : false;
      newError.email =
        email === "" ||
        !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          email
        )
          ? true
          : false;
      newError.phone = phone === "" || !/^[0-9]*$/.test(phone) ? true : false;
      newError.query = query === "" ? true : false;
    }

    setErrors(newError);
    return newError.name || newError.email || newError.phone || newError.query
      ? false
      : true;
  };

  return (
    <>
      <div style={{ marginLeft: "100px" }}>
        <h2>Contact Us</h2>
        <form>
          <div>
            <label>Name</label>
            <br></br>
            <input
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                validate("name");
              }}
              ref={nameRef}
            />
            {error.name && (
              <p style={{ color: "red" }}>Please enter valid name...</p>
            )}
          </div>
          <div>
            <label>Email</label>
            <br></br>
            <input
              type="text"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                validate('email');
              }}
              ref={emailRef}
            />
            {error.email && (
              <p style={{ color: "red" }}>Please enter valid email...</p>
            )}
          </div>
          <div>
            <label>Phone</label>
            <br></br>
            <input
              type="text"
              placeholder="Enter Phone"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
                validate('phone');
              }}
              ref={phoneRef}
            />
            {error.phone && (
              <p style={{ color: "red" }}>Please enter valid phone...</p>
            )}
          </div>
          <div>
            <label>Query</label>
            <br></br>
            <input
              type="text"
              placeholder="Query..?"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                validate('query');
              }}
              ref={queryRef}
            />
            {error.query && (
              <p style={{ color: "red" }}>Please enter valid query value...</p>
            )}
          </div>
          <input
            type="button"
            className="button2"
            onClick={() => submitForm()}
            value={"Submit"}
          />
        </form>
      </div>
    </>
  );
};

import React, { useState } from "react";
import "../styles/Form.css";
import axios from "axios";

function Form() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const handleId = (e: any) => {
    setId(e.target.value);
    console.log(id);
  };
  const handleName = (e: any) => {
    setName(e.target.value);
  };
  const handleDate = (e: any) => {
    setDate(e.target.value);
  };
  //   const handleCheck = (e: any) => {
  //     setChecked(e.target.checked);
  //   };

  const UserDetails = async (e: any) => {
    e.preventDefault();
    await axios
      .post("http://localhost:8000/users", {
        id: id,
        fullName: name,
        birthday: date,
        //   isActive: checked,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="body">
      <h1>Contact Form</h1>
      <form>
        <div className="form-group mb-3">
          <label htmlFor="inputId">ID</label>
          <input
            type="text"
            className="form-control"
            id="inputId"
            name="id"
            value={id}
            onChange={handleId}
            aria-describedby="idHelp"
            placeholder="Enter Id"
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="inputName">Full Name</label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            name="name"
            value={name}
            onChange={handleName}
            aria-describedby="nameHelp"
            placeholder="Enter Name"
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="inputDate">Birthday</label>
          <input
            type="date"
            className="form-control"
            id="inputDate"
            name="date"
            value={date}
            onChange={handleDate}
            aria-describedby="idHelp"
            placeholder="Enter Date"
          />
        </div>

        {/* <div className="form-group form-check mb-3">
          <input
            type="checkbox"
            className="form-check-input"
            id="inputActive"
            checked={checked}
            onChange={handleCheck}
          />
          <label className="form-check-label" htmlFor="inputActive">
            is Active ?
          </label>
        </div> */}
        <button type="submit" className="btn btn-primary" onClick={UserDetails}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;

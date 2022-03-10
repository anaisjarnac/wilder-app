import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Form() {
  const [form, setForm] = useState({
    name: "",
    city: "",
    description: "",
    skills: [{title: "react", vote: 4}],
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    //etargetname: name et le value: la valeur
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post("/api/wilder/create", form) // form=body dans postman
    .then(() => {
        setForm({
            name: "",
            city: "",
            description: "",
            skills: [{title: "react", vote: 4}],
          })
    })
  };

  const notify = () => toast("Wow so easy!");

  return (
    <form className="m-10 flex flex-col items-center" onSubmit={handleSubmit}>
      <p className="font-bold text-left">Name:</p>
      <input
        type="text"
        onChange={handleChange}
        name="name"
        value={form.name}
        className="border border-yellow-400 w-44 m-2"
      />
      <p className="font-bold">City:</p>
      <input
        type="text"
        onChange={handleChange}
        name="city"
        value={form.city}
        className="border border-yellow-400 w-44 m-2"
      />
      <p className="font-bold">Description:</p>
      <input
        type="text"
        onChange={handleChange}
        name="description"
        value={form.description}
        className="border border-yellow-400 w-44 m-2"
      />
      <button
        type="submit" onClick={notify}
        className="px-2 border w-44 font-bold text-white m-2 bg-purple-300 hover:bg-purple-400"
      >
        Valider
      </button>
      <ToastContainer />
    </form>
  );
}

export default Form;

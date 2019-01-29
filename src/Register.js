/*
 * @Author: Nate
 * @Date:   2019-01-29 16:32:24
 * @Last Modified by:   Nate
 * @Last Modified time: 2019-01-29 16:57:02
 */
import React, { useState, useEffect } from "react";

const initialFormState = {
  username: "",
  email: "",
  password: ""
};
export default function Register() {
  const [form, setForm] = useState(initialFormState);
  const [user, setUser] = useState(null);

  // reusable function for all form changes!
  const handleChange = event => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    setUser(form);
    setForm(initialFormState);
  };

  return (
    <div
      style={{
        textAlign: "center"
      }}
    >
      <h2>Register</h2>

      <form
        style={{
          display: "grid",
          alignItems: "center",
          justifyItems: "center"
        }}
        onSubmit={handleSubmit}
      >
        <input
          type="username"
          placeholder="username"
          name="username"
          onChange={handleChange}
          value={form.username}
        />
        <input
          type="email"
          placeholder="email address"
          name="email"
          onChange={handleChange}
          value={form.email}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
          value={form.password}
        />
        <button type="submit">Submit</button>
      </form>
      <h2>
        {user && `user:`} {user && user.username}
      </h2>
      {user && JSON.stringify(user, null, 2)}
    </div>
  );
}

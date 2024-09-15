import { useState } from "react";
import { Form } from "react-router-dom";

const AdminRegister = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    console.log("Admin Registered", { email, password });
  };
  return (
    <>
      <div className="admin-register-continer">
        <h2>Admin Register</h2>
        <Form>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="button" onClick={handleRegister}>
            {" "}
            Register
          </button>
        </Form>
      </div>
    </>
  );
};
export default AdminRegister;

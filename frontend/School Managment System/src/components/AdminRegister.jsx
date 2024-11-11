import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirecting

const AdminRegister = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // To handle errors
  const navigate = useNavigate(); // For redirecting the user after registration

  // Function to handle form submission
  const handleRegister = async (event) => {
    event.preventDefault(); // Prevent form from submitting and reloading the page
    setError(""); // Clear any previous errors
    const adminData = { email, password };

    console.log("Attempting to register admin with", adminData);

    try {
      // Make an API call to your backend to register the admin
      const response = await fetch("/api/admin/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(adminData),
      });

      const result = await response.json(); // Parse the JSON response

      if (response.ok) {
        console.log("Admin registered successfully", result);
        navigate("/admin-dashboard"); // Redirect after success
      } else {
        setError(result.message || "Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Error registering admin:", error);
      setError("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div className="admin-register-container">
      <h2>Admin Register</h2>
      {/* Display error message if there's any */}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleRegister}>
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default AdminRegister;

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../index.css";

// const SignIn = () => {
//   const [role, setRole] = useState("admin");
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleRoleChange = (e) => {
//     setRole(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Add your authentication logic here
//     // For now, we will just navigate to the corresponding dashboard based on the role

//     if (role === "admin") {
//       navigate("/admin-dashboard");
//     } else if (role === "teacher") {
//       navigate("/teacher-dashboard");
//     } else if (role === "student") {
//       navigate("/student-dashboard");
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <div className="row justify-content-center">
//         <div className="col-md-6">
//           <div className="card shadow-sm">
//             <div className="card-header bg-primary text-white">
//               <h2>Sign In</h2>
//             </div>
//             <div className="card-body">
//               <form onSubmit={handleSubmit}>
//                 <div className="mb-3">
//                   <label htmlFor="role" className="form-label">
//                     Select Role
//                   </label>
//                   <select
//                     id="role"
//                     className="form-select"
//                     value={role}
//                     onChange={handleRoleChange}
//                   >
//                     <option value="admin">Admin</option>
//                     <option value="teacher">Teacher</option>
//                     <option value="student">Student</option>
//                   </select>
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor="username" className="form-label">
//                     Username
//                   </label>
//                   <input
//                     type="text"
//                     id="username"
//                     className="form-control"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                     // required
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor="password" className="form-label">
//                     Password
//                   </label>
//                   <input
//                     type="password"
//                     id="password"
//                     className="form-control"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     // required
//                   />
//                 </div>
//                 <button type="submit" className="btn btn-primary">
//                   Sign In
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignIn;

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Index.css"; // Ensure this path is correct

// const SignIn = () => {
//   const [role, setRole] = useState("admin");
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleRoleChange = (e) => {
//     setRole(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your authentication logic here
//     if (role === "admin") {
//       navigate("/admin-dashboard");
//     } else if (role === "teacher") {
//       navigate("/teacher-dashboard");
//     } else if (role === "student") {
//       navigate("/student-dashboard");
//     }
//   };

//   return (
//     <div className="bg-image">
//       <div className="bg-overlay d-flex justify-content-center align-items-center vh-100">
//         <div
//           className="card shadow-lg border-0"
//           style={{
//             backgroundColor: "black",
//             fontFamily: "Poppins, sans-serif",
//             color: "rgba(255, 255, 255, 1)",
//             borderRadius: "5px",
//             backgroundImage: "linear-gradient(to bottom right, #000, #09182B)",
//             padding: "3.5rem 2.25rem",
//             width: "100%",
//             maxWidth: "634px",
//             margin: "9rem 0",
//             boxShadow:
//               "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
//             "--tw-shadow-color": "#000", // Shadow color
//             "--tw-shadow": "0 4px 20px var(--tw-shadow-color)", // Shadow size
//           }}
//         >
//           <div className="card-header text-center bg-primary text-white">
//             <h2 className="mb-0">Sign In</h2>
//           </div>
//           <div className="card-body p-4">
//             <form onSubmit={handleSubmit}>
//               <div className="mb-3">
//                 <label htmlFor="role" className="form-label">
//                   Select Role
//                 </label>
//                 <select
//                   id="role"
//                   className="form-select"
//                   value={role}
//                   onChange={handleRoleChange}
//                 >
//                   <option value="admin">Admin</option>
//                   <option value="teacher">Teacher</option>
//                   <option value="student">Student</option>
//                 </select>
//               </div>
//               <div className="mb-3">
//                 <label
//                   htmlFor="username"
//                   className="form-label"
//                   style={{
//                     width: "100%",
//                   }}
//                 >
//                   Username
//                 </label>
//                 <input
//                   type="text"
//                   id="username"
//                   className="form-control"
//                   value={username}
//                   onChange={(e) => setUsername(e.target.value)}
//                   required
//                   style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}
//                 />
//               </div>
//               <div className="mb-3">
//                 <label htmlFor="password" className="form-label">
//                   Password
//                 </label>
//                 <input
//                   type="password"
//                   id="password"
//                   className="form-control"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                   style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}
//                 />
//               </div>
//               <button type="submit" className="btn btn-primary w-100">
//                 Sign In
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignIn;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Index.css"; // Ensure this path is correct

const SignIn = () => {
  const [role, setRole] = useState("admin");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your authentication logic here
    if (role === "admin") {
      navigate("/admin-dashboard");
    } else if (role === "teacher") {
      navigate("/teacher-dashboard");
    } else if (role === "student") {
      navigate("/student-dashboard");
    }
  };

  return (
    <div
      style={{
        overflowX: "hidden",
        backgroundColor: "#04122c",
        backgroundRepeat: "no-repeat",
        fontFamily: "Poppins, sans-serif",
        color: "rgb(255 255 255 / var(--tw-text-opacity))",
        backgroundImage: `
          radial-gradient(100% 100% at 50% -30%, #2D80E1 0%, #073AFF00 100%), 
          radial-gradient(100% 100% at 50% 0%, #FF000000 0%, #FF000000 99%)
        `,
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "634px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "black",
            color: "#fff",
            borderRadius: "8px",
            padding: "2rem",
            width: "100%",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          <div
            style={{
              backgroundColor: "#007bff",
              color: "#fff",
              borderRadius: "8px 8px 0 0",
              padding: "1rem",
              textAlign: "center",
            }}
          >
            <h2 style={{ margin: "0" }}>Sign In</h2>
          </div>
          <div style={{ padding: "1rem" }}>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: "1rem" }}>
                <label
                  htmlFor="role"
                  style={{ display: "block", marginBottom: "0.5rem" }}
                >
                  Select Role
                </label>
                <select
                  id="role"
                  value={role}
                  onChange={handleRoleChange}
                  style={{
                    width: "100%",
                    padding: "0.5rem",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                  }}
                >
                  <option value="admin">Admin</option>
                  <option value="teacher">Teacher</option>
                  <option value="student">Student</option>
                </select>
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label
                  htmlFor="username"
                  style={{ display: "block", marginBottom: "0.5rem" }}
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  //   required
                  style={{
                    width: "100%",
                    padding: "0.5rem",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  }}
                />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label
                  htmlFor="password"
                  style={{ display: "block", marginBottom: "0.5rem" }}
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  //   required
                  style={{
                    width: "100%",
                    padding: "0.5rem",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  }}
                />
              </div>
              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  borderRadius: "4px",
                  border: "none",
                  backgroundColor: "#007bff",
                  color: "#fff",
                  fontSize: "1rem",
                  cursor: "pointer",
                  marginTop: "15px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                }}
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
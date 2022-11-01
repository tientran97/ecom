import React from "react";
import { useSelector } from "react-redux";
import { selectEmail } from "../../redux/Slice/authSlice";
import { useNavigate } from "react-router-dom";
import "./AdminOnlyRout.css";
const AdminOnlyRoute = ({ children }) => {
  const navigate = useNavigate();
  const userEmail = useSelector(selectEmail);
  if (userEmail === "tien.minhtran615034@gmail.com") {
    return children;
  } else
    return (
      <section className="access-denied-container">
        <p>PERMISSION DENIED</p>
        <p>THIS PAGE CAN ONLY ACCESS BY ADMIN</p>
        <button onClick={() => navigate("/")}>BACK TO HOME</button>
      </section>
    );
};
export const AdminOnlyLink = ({ children }) => {
  const userEmail = useSelector(selectEmail);
  if (userEmail === "tien.minhtran615034@gmail.com") {
    return children;
  } else return null;
};

export default AdminOnlyRoute;

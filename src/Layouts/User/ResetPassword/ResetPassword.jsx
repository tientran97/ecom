import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { auth } from "../../../firebase/config";
import { sendPasswordResetEmail } from "firebase/auth";
import "./ResetPassword.css";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../../../components/Loader/LoadingSpinner";
const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const resetPassword = (e) => {
    e.preventDefault();
    setIsLoading(true);
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setIsLoading(false);
        toast.success("Check your email!");
        navigate("/accounts/login");
      })
      .catch((error) => {
        setIsLoading(false);
        toast.error(error.message);
        // ..
      });
  };
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <>
      {isLoading && <LoadingSpinner />}
      <div className="reset-wrapper">
        <div className="reset-container">
          <div className="reset-container-bot">
            <p className="title">RESET PASSWORD</p>
            <form onSubmit={resetPassword}>
              <div className="form-item">
                <label htmlFor="email">EMAIL :</label>
                <input
                  autoComplete="off"
                  required
                  id="email"
                  name="email"
                  type="text"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button type="submit">RESET PASSWORD</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;

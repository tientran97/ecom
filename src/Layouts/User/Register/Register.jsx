import React, { useState, useEffect } from "react";
import "./Register.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../../firebase/config";
import Loading from "../../../components/Loader/LoadingSpinner";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConFirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const registerUser = (e) => {
    e.preventDefault();
    if (!email && !password) {
      toast.error("Please Enter Email and Password");
    } else if (!email) {
      toast.error("Please Enter Your Email");
    } else if (!password) {
      toast.error("Please Enter Your Password");
    } else if (!email.match(emailRegex)) {
      toast.error("Invalid Email");
    } else if (password.length < 6) {
      toast.error("Password must be atleast 6 characters");
    } else if (password !== confirmPassword) {
      toast.error("Password does not match!");
    } else {
      setIsLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          setIsLoading(false);
          const user = userCredential.user;
          toast.success("Registration successful");
          navigate("/");
        })
        .catch((error) => {
          toast.error(error.message);
          setIsLoading(false);
        });
    }
  };
  const provider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    setIsLoading(true);
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        toast.success("Login successfully");
        setIsLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setIsLoading(false);
        toast.error(error.customData.email);
      });
  };

  return (
    <>
      {isLoading && <Loading />}
      <div className="register-wrapper">
        <div className="register-container">
          <div className="register-container-top">
            <p className="title">LOGIN VIA</p>

            <div className="google-box" onClick={() => signInWithGoogle()}>
              <span>Sign in with Google</span>
              <i className="fa-brands fa-google"></i>
            </div>
          </div>
          <p className="or-line">OR</p>
          <div className="register-container-bot">
            <p className="title">CREATE ACCOUNT</p>
            <form onSubmit={registerUser}>
              <div className="form-item">
                <label htmlFor="email">EMAIL</label>
                <input
                  autoComplete="off"
                  id="email"
                  name="email"
                  type="text"
                  placeholder="Enter your e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-item">
                <label htmlFor="password">PASSWORD</label>
                <input
                  autoComplete="off"
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-item">
                <label htmlFor="confirmedPassword">CONFIRM PASSWORD</label>
                <input
                  autoComplete="off"
                  id="confirmedPassword"
                  name="confirmedPassword"
                  type="password"
                  placeholder="Re-enter your password"
                  value={confirmPassword}
                  onChange={(e) => setConFirmPassword(e.target.value)}
                />
              </div>
              <button type="submit">CREATE</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;

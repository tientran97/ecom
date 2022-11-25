import React, { useEffect, useState } from "react";
import "./Login.css";
import { auth } from "../../../firebase/config";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Loading from "../../../components/Loader/LoadingSpinner";
import { toast } from "react-toastify";
import { selectPreviousURL } from "../../../redux/Slice/cartSlice";
import { useSelector } from "react-redux";
const Login = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const previousURL = useSelector(selectPreviousURL);

  const redirectUser = () => {
    if (previousURL.includes("cart")) {
      navigate("/cart");
    } else {
      navigate("/accounts/profile");
    }
  };

  const navigate = useNavigate();
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const loginInUser = (e) => {
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
    } else {
      setIsLoading(true);

      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          toast.success("Login successfully");
          redirectUser();
          setIsLoading(false);
        })
        .catch((error) => {
          setIsLoading(false);
          toast.error(error.message);
        });
    }
  };

  const provider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    setIsLoading(true);
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        toast.success("Login successfully");
        setIsLoading(false);
        redirectUser();
      })
      .catch((error) => {
        setIsLoading(false);
        toast.error(error.customData.email);
      });
  };

  return (
    <>
      {isLoading && <Loading />}
      <div className="login-wrapper">
        <div className="login-container">
          <>
            <div className="login-container-top">
              <p className="title">LOGIN VIA</p>

              <div className="google-box" onClick={signInWithGoogle}>
                <span>Sign in with Google</span>
                <i className="fa-brands fa-google"></i>
              </div>
            </div>
            <p className="or-line">OR</p>

            <div className="login-container-bot">
              <p className="title">LOGIN</p>
              <form onSubmit={loginInUser}>
                <div className="form-item">
                  <label htmlFor="email">EMAIL :</label>
                  <input
                    autoComplete="off"
                    id="email"
                    name="email"
                    type="text"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-item">
                  <label htmlFor="password">PASSWORD :</label>
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
                <button type="submit">LOG IN</button>
              </form>
              <p
                className="login-text forgot-password"
                onClick={() => navigate("/accounts/reset-password")}
              >
                Forgot your password ?
              </p>
              <hr></hr>
              <p className="login-text">Not a member ?</p>

              <button onClick={() => navigate("/accounts/register")}>
                CREATE ACCOUNT
              </button>
            </div>
          </>
        </div>
      </div>
    </>
  );
};

export default Login;

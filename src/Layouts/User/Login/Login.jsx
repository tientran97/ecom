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
      navigate("/");
    }
  };

  const navigate = useNavigate();
  const loginInUser = (e) => {
    e.preventDefault();
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setIsLoading(false);
        const user = userCredential.user;
        toast.success("Login successfully");
        redirectUser();
      })
      .catch((error) => {
        setIsLoading(false);
        toast.error(error.message);
      });
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
      <div className="register-wrapper">
        <div className="register-container">
          <>
            <div className="register-container-top">
              <p className="title">LOGIN VIA</p>
              <div className="facebook-box">
                <span>Sign in with Facebook</span>
                <i className="fa-brands fa-facebook-f"></i>
              </div>
              <div className="google-box" onClick={() => signInWithGoogle()}>
                <span>Sign in with Google</span>
                <i className="fa-brands fa-google"></i>
              </div>
            </div>
            <p className="or-line">OR</p>

            <div className="register-container-bot">
              <p className="title">LOGIN</p>
              <form onSubmit={loginInUser}>
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
                <div className="form-item">
                  <label htmlFor="password">PASSWORD :</label>
                  <input
                    autoComplete="off"
                    required
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

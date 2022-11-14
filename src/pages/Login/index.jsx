import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import HeroSection from "../HeroSection";
import { setUser } from "../../store/userSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleLogin = (email, password) => {
    if (!email.trim() && !password.trim()) {
      setError("Values cannot be empty!");
    } else {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
        .then(({ user }) => {
          dispatch(
            setUser({
              email: user.email,
              id: user.uid,
              token: user.accessToken,
            })
          );
          navigate("/");
        })
        .catch((error) => {
          if (error.code === "auth/wrong-password") {
            setError("Wrong password!");
          } else if (error.code === "auth/user-not-found") {
            setError("User not found!");
          }
          console.log(error);
        });
    }
    setTimeout(() => {
      setError(null);
    }, 2500);
  };

  return (
    <div>
      <HeroSection title={"Login"} />
      <div className="lg:container mx-auto w-full h-full xl:px-44 px-8 lg:my-52 md:my-40 my-28">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-x-14 gap-y-10">
          <div className="loginBg w-full sm:h-[600px] h-[450px] lg:px-20 px-5">
            <div className="w-full h-full flex flex-col items-center justify-center text-white">
              <h2 className="text-2xl font-bold mb-4">New to our Shop?</h2>
              <p className="text-center leading-6 pb-14">
                There are advances being made in science and technology
                everyday, and a good example of this is the
              </p>
              <Link
                to={"/sign-up"}
                className="py-[18px] sm:px-[36px] px-6 border border-white rounded hover:bg-white hover:text-secondary ease-in-out duration-500 outline-none uppercase tracking-tighter text-sm"
              >
                Create an Account
              </Link>
            </div>
          </div>
          <div className="w-full h-full flex flex-col justify-center lg:px-14 md:px-10 px-0">
            <h3 className="md:text-[26px] text-xl text-primary200 font-bold md:mb-20 mb-14">
              Welcome Back ! <br />
              Please Sign in now
            </h3>
            <form>
              <div className="flex flex-col gap-y-4">
                <div className="w-full">
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    name="email"
                    className="w-full text-black/70 border-black/40 border-b px-4 py-3 outline-none"
                    placeholder="E-mail"
                  />
                </div>
                <div className="w-full">
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    name="username"
                    className="w-full text-black/70 border-black/40 border-b px-4 py-3 outline-none"
                    placeholder="Password"
                  />
                </div>
                <label
                  htmlFor="rememberMe"
                  className="flex items-center gap-3 text-footerText"
                >
                  <input type="checkbox" name="checkbox" id="rememberMe" />
                  Remember me
                </label>
              </div>
              {error && <div className=" py-4 text-red-600">{error}</div>}
              <div className="w-full mt-5">
                <button
                  onClick={() => handleLogin(email, password)}
                  type="button"
                  className="w-full px-9 pt-5 pb-4 text-[15px] uppercase border border-cardBorder rounded text-cardBorder hover:bg-cardBorder hover:text-white ease-in-out duration-500"
                >
                  log in
                </button>
              </div>
              <div className="flex justify-end mt-5">
                <p className="text-footerText cursor-pointer">
                  Forget Password?
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import HeroSection from "../HeroSection";
import { setUser } from "../../store/userSlice";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (email, password) => {
    if (!email.trim() && !password.trim()) {
      setError("Values cannot be empty!");
    } else {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
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
          if (error.code === "auth/email-already-in-use") {
            setError("Email already in use");
          } else if (error.code === "auth/missing-email") {
            setError("Missing email");
          } else if (error.code === "auth/internal-error") {
            setError("Internal error");
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
      <HeroSection title={"Sign Up"} />
      <div className="lg:container mx-auto w-full h-full xl:px-44 px-8 lg:my-52 md:my-40 my-28">
        <div className="flex justify-center">
          <div className="w-full h-full flex flex-col justify-center lg:px-14 md:px-10 px-0">
            <h3 className="md:text-[26px] text-xl text-primary200 font-bold md:mb-20 mb-14">
              Welcome Back ! Please Sign up now
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
                  onClick={() => handleRegister(email, password)}
                  type="button"
                  className="w-full px-9 pt-5 pb-4 text-[15px] uppercase border border-cardBorder rounded text-cardBorder hover:bg-cardBorder hover:text-white ease-in-out duration-500"
                >
                  sign up
                </button>
              </div>
              <div className="flex justify-end mt-5">
                <Link to={"/login"} className="text-footerText cursor-pointer">
                  Already Account?
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

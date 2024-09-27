import React, { useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import useGoogleDbLogin from "../../hooks/useGoogleLogin";
import useLogin from "../../hooks/useLogin";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Login = useLogin();
  const navigate = useNavigate();

  const data = {
    password,
    email,
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await Login(data);
    console.log(response)
    if (response.success) {
      navigate("/home");
      localStorage.setItem(
        "user-data",
        JSON.stringify({
          email: response.user.email,
          username: response.user.username,
          profilePic: response.user.image,
          _id:response.user._id
        })
      );
    }
  };

  const googleDbLogin = useGoogleDbLogin();

  const responseGoogle = async (authResult) => {
    try {
      if (authResult["code"]) {
        const result = await googleDbLogin(authResult["code"]);
        console.log(result);
        if (result.success) {
          navigate("/home");
          localStorage.setItem(
            "user-data",
            JSON.stringify({
              email: result.googleUser.email,
              username: result.googleUser.username,
              profilePic: result.googleUser.image,
              id:result.googleUser._id
            })
          );
        }
      }
    } catch (error) {
      console.log("Error while requesting google code", error);
    }
  };

  const googleLogin = useGoogleLogin({
    onSuccess: responseGoogle,
    onError: responseGoogle,
    flow: "auth-code",
  });

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-900">
      <div className="flex rounded-lg bg-[#FB917D] w-[800px] h-[600px] shadow-xl">
        <div className="flex bg-[#5C45DD] w-[550px] items-center justify-center rounded-s-lg">
          <img src="Logo.png" alt="" className="w-[250px]" />
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center w-full"
        >
          <h1 className="text-4xl text-white font-bold">Login</h1>

          <div className="flex flex-col p-2">
            <label htmlFor="email" className=" text-white">
              Email:
            </label>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-sm p-1 w-[250px]"
            />
          </div>
          <div className="flex flex-col p-2">
            <label htmlFor="password" className=" text-white">
              Password:
            </label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="rounded-sm p-1 w-[250px]"
            />
          </div>

          <div>
            <button
              type="submit"
              className="bg-gray-100 p-2 rounded-lg hover:bg-gray-400 hover:text-gray-900 font-bold text-gray-500"
            >
              Login
            </button>
          </div>
          <div>
            <a href="/signup" className="text-blue-600 hover:text-blue-900">
              Dont have an account?
            </a>
          </div>
          <div className="bg-gray-600 w-full p-[1px] m-5"></div>
          <div className="flex flex-col items-center">
            <h2 className="pb-5">Login with Google</h2>
            <img
              src="google.png"
              alt=""
              className="w-[50px] hover:scale-125 transition-all hover:cursor-pointer"
              onClick={googleLogin}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

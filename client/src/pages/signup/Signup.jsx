import React, { useState } from "react";
import useSignup from "../../hooks/useSignup";
import {useGoogleLogin} from '@react-oauth/google'
import useGoogleSignup from "../../hooks/useGoogleSignup";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const Signup = useSignup();
  const navigate = useNavigate();

  const data = {
    username,
    password,
    confirmPassword,
    email,
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
   const response = await Signup(data);
    if(response.success){
      navigate('/')
    }

  };

  const googleSignup = useGoogleSignup();

  const responseGoogle = async(authResult)=>{
    try {
      if(authResult['code']){
        
       const result = await googleSignup(authResult['code']);
       console.log(result)
       if(result.success || result.msg=="User already exists"
       ){
        navigate("/")
      }
      }
    } catch (error) {
      console.log("Error while requesting google code" , error)
    }
  }

  const googleLogin = useGoogleLogin({
    onSuccess:responseGoogle,
    onError:responseGoogle,
    flow:'auth-code'
  })

  

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
          <h1 className="text-4xl text-white font-bold">Signup</h1>
          <div className="flex flex-col p-2">
            <label htmlFor="username" className=" text-white">
              Username:
            </label>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="rounded-sm p-1 w-[250px]"
            />
          </div>
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
          <div className="flex flex-col p-2">
            <label htmlFor="confirmPassword" className=" text-white">
              Confirm Password:
            </label>
            <input
              type="password"
              placeholder="Retype Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="rounded-sm p-1 w-[250px]"
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-gray-100 p-2 rounded-lg hover:bg-gray-400 hover:text-gray-900 font-bold text-gray-500"
            >
              Signup
            </button>
          </div>
          <div>
            <a href="/" className="text-blue-600 hover:text-blue-900">Already have an account?</a>
          </div>
          <div className="bg-gray-600 w-full p-[1px] m-5"> 
            
          </div>
          <div className="flex flex-col items-center">
            <h2 className="pb-5">Signup with Google</h2>
            <img src="google.png" alt="" className="w-[50px] hover:scale-125 transition-all hover:cursor-pointer" onClick={googleLogin}  />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;

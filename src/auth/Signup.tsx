import { useRef } from "react";
import { Inputbox } from "../components/ui/AddContent";
import { Button } from "../components/ui/Button";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const userNameRef = useRef<HTMLInputElement>(null);
  const passowordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  async function signup() {
    const username = userNameRef.current?.value;
    const password = passowordRef.current?.value;
    await axios.post(`${BACKEND_URL}signup`, {
      username,
      password,
    });
    alert("Signup Successful");
    navigate("/signin");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-green-500">
      <div className="bg-gray-200/40 rounded-lg shadow-2xl p-8 max-w-md w-full mx-4">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Sign Up</h1>
        <Inputbox 
          type="text" 
          refrence={userNameRef} 
          placeholder="Email" 
        />
        <Inputbox 
          type="text" 
          refrence={userNameRef} 
          placeholder="Username" 
        />
        <Inputbox 
          type="password" 
          refrence={passowordRef} 
          placeholder="Password" 
        />
        <div className="mt-6 flex justify-center">
          <Button onClick={signup} variant="primary" size="md" text="Submit" />
        </div>
        <p className="text-gray-200 mt-4 text-center">
          Already have an account?{" "}
          <a className="text-blue-600 hover:underline" href="/signin">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;

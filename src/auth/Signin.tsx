import { useRef } from "react";
import { Inputbox } from "../components/ui/AddContent";
import { Button } from "../components/ui/Button";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

const Signin = () => {
    const userNameRef = useRef<HTMLInputElement>(null);
    const passowordRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    async function signIn() {
        try {
            const response = await axios.post(
                `${BACKEND_URL}signin`,
                {
                    username: userNameRef.current?.value,
                    password: passowordRef.current?.value,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    withCredentials: true,
                }
            );
            localStorage.setItem("token", response.data.token);
            navigate("/dashboard");
        } catch (error) {
            console.error("Signin error:", error);
            alert("Failed to sign in");
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-green-500">
            <div className="bg-gray-200/40 rounded-lg shadow-2xl p-8 max-w-md w-full mx-4">
                <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Sign In</h1>
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
                    <Button onClick={signIn} variant="primary" size="md" text="Submit" />
                </div>
            </div>
        </div>
    );
};

export default Signin;

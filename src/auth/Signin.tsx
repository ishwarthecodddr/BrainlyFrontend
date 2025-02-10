import { useRef } from "react"
import { Inputbox } from "../components/ui/AddContent"
import { Button } from "../components/ui/Button"
import axios from "axios"
import {BACKEND_URL } from "../config"
import { useNavigate } from "react-router-dom"
const Signin = () => {
    const userNameRef = useRef<HTMLInputElement>()
    const passowordRef = useRef<HTMLInputElement>()
    const navigate = useNavigate()  
    async function signIn() {
        try {
            const response = await axios.post(
                `${BACKEND_URL}signin`,
                {
                    username: userNameRef.current?.value,
                    password: passowordRef.current?.value
                },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    withCredentials: true
                }
            );
            localStorage.setItem('token', response.data.token);
            navigate('/dashboard');
        } catch (error) {
            console.error('Signin error:', error);
            alert('Failed to sign in');
        }
    }
    return (
        <div className="flex justify-center bg-gray-300 items-center flex-col h-screen">
            <div className="bg-white rounded-md shadow-md p-4 h-2/4">
                <h1 className="text-2xl font-semibold justify-center flex">SignIn</h1>
                <Inputbox type="text" refrence={userNameRef}
                    placeholder="Username" />
                <Inputbox type="password" refrence={passowordRef} placeholder="Password" />
                <div className="flex justify-center">
                    <Button onClick={signIn} variant="primary" size="md" text="submit" />
                </div>
            </div>
        </div>
    )
}

export default Signin

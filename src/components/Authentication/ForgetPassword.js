'use client'
import React, { useState } from 'react'

const ForgetPassword = () => {
    const { useRouter } = require('next/navigation');
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const Loginbutton = async (e) => {
        e.preventDefault();
        try {
            setLoading(true)
            if (email) {
                const data = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email,
                    })
                };
                const response = await fetch('/api/auth/forgetpassword', data)
                if (response) {
                    const data = await response.json();
                    if (data.message === "Success") {
                        if (data.role === 1) {
                            setLoading(false)
                            router.push("/")
                        }
                        else if (data.role === 2) {
                            setLoading(false)
                            router.push("/")
                        }
                        else {
                            setLoading(false)
                            router.push("/")
                        }
                    }
                    else {
                        setLoading(false)
                        setError(data.message)
                    }
                }
                else {
                    setLoading(false)
                    setError('Identification échoué réessayer:',)
                }
            }
            else {
                setLoading(false)
                setError('Le champ d\'email est obligatoire')
            }
        } catch (error) {
            setLoading(false)
            setError('an error occured')
        }

    }

    return (
        <div>
            <div class="h-screen bg-indigo-100 flex justify-center items-center">
                <div class="lg:w-2/5 md:w-1/2 w-2/3">
                    <form class="bg-white p-10 rounded-lg shadow-lg min-w-full" action="#" method="POST">
                        <h1 class="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">Changer le mot de Passe</h1>
                        <span className="text-red-600"> {error} </span>
                        <div>
                            <label class="text-gray-800 font-semibold block my-3 text-md" for="email">Email</label>
                            <input class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                                type="text" name="email" onChange={(e) => setEmail(e.target.value)} value={email} id="email" placeholder="example@gmail.com" />
                        </div>
                        <span className="text-red-600"> {errorMail} </span>
                        {
                            loading ?
                                <button type="submit" onClick={Loginbutton} class="w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans">Sending...</button>
                                :
                                <button type="submit" onClick={Loginbutton} class="w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans">Login</button>
                        }
                        <a href='/authentication/login'>Retour sur Login</a>
                        {/* <button type="submit" class="w-full mt-6 mb-3 bg-indigo-100 rounded-lg px-4 py-2 text-lg text-gray-800 tracking-wide font-semibold font-sans">Login</button> */}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ForgetPassword

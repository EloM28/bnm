'use client'
import React, { useState } from 'react'

const Register = () => {
    const { useRouter } = require('next/navigation');
    const router = useRouter()
    const [nom, setNom] = useState('')
    const [prenom, setPrenom] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [role, setRole] = useState('')
    const [password, setPassword] = useState('')
    const [ConfirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState("")
    const [epassword, setEpassword] = useState('')
    const [loading, setLoading] = useState(false)

    const Signupbutton = async (e) => {
        e.preventDefault();
        try {
            setLoading(true)
            if (nom && prenom && phone && email && password && role) {
                if (ConfirmPassword !== password) {
                    setLoading(false)
                    setEpassword("Les deux mot de passe sont incohérents")
                }
                else {
                    var role_user
                    if (role == "collaborateur") role_user = 2
                    else if (role == "secretaire") role_user = 3
                    else role_user = 1
                    const addData = {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            nom,
                            prenom,
                            phone,
                            email,
                            password,
                            role_user,
                        })
                    };
                    console.log('object', addData)
                    const response = await fetch('/api/auth/signup', addData)
                    console.log('object3', response)
                    const data = await response.json();
                    console.log('object4', data.ok)
                    console.log('object3', data.ok)
                    if (data) {
                        if (data.ok) {
                            router.push("/authentication/login");
                        }
                        else {
                            setError(data.message)
                        }
                    }
                    else {
                        setError('Enregistrement échoué réessayer')
                    }
                }
            }
            else {
                setLoading(false)
                setError('Tous les champs doivent être completés')
            }
        } catch (error) {
            setLoading(false)
            console.log('an error occured', error)
            setError('an error occured')
        }

    }

    return (
        <div>
            <div class="h-screen bg-indigo-100 flex justify-center items-center">
                <div class="lg:w-2/5 md:w-1/2 w-2/3">
                    <form class="bg-white p-10 rounded-lg shadow-lg min-w-full" action="#" method="POST">
                        <h1 class="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">Enregistrement d'utilisateur dans BNM</h1>
                        <span className="text-red-600"> {error} </span>
                        <div>
                            <label class="text-gray-800 font-semibold block my-3 text-md" for="Nom">Nom</label>
                            <input class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                                type="text" name="name" onChange={(e) => setNom(e.target.value)} value={nom} id="nom" placeholder="Entrer le nom" />
                        </div>
                        <div>
                            <label class="text-gray-800 font-semibold block my-3 text-md" for="Prenom">Prénom</label>
                            <input class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                                type="text" name="lastname" onChange={(e) => setPrenom(e.target.value)} value={prenom} id="username" placeholder="Entrer le prénom" />
                        </div>
                        <div>
                            <label class="text-gray-800 font-semibold block my-3 text-md" for="Tel">Téléphone</label>
                            <input class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                                type="tel" name="phone" onChange={(e) => setPhone(e.target.value)} value={phone} id="username" placeholder="Entrer le numéro de téléphone" />
                        </div>
                        <div>
                            <label class="text-gray-800 font-semibold block my-3 text-md" for="email">Email</label>
                            <input class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                                type="text" name="email" onChange={(e) => setEmail(e.target.value)} value={email} id="email" placeholder="example@gmail.com" />
                        </div>
                        <div>
                            <label for="role" className="text-gray-800 font-semibold block my-3 text-md">Rôle d'utilisateur</label>
                            <select onChange={(e) => setRole(e.target.value)} value={role} className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none">
                                <option>__Cliquer pour la sélection__</option>
                                <option value="collaborateur">Avocat collaborateur</option>
                                <option value="secretaire">Avocat Secrétaire</option>
                                <option value="associes">Avocat associés</option>
                            </select>
                        </div>
                        <span className="text-red-600"> {epassword} </span>
                        <div>
                            <label class="text-gray-800 font-semibold block my-3 text-md" for="password">Password</label>
                            <input class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                                type="text" onChange={(e) => setPassword(e.target.value)} value={password} name="password" id="password" placeholder="password" />
                        </div>
                        <div>
                            <label class="text-gray-800 font-semibold block my-3 text-md" for="confirm">Confirme password</label>
                            <input class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                                type="text" onChange={(e) => setConfirmPassword(e.target.value)} value={ConfirmPassword} name="confirmPassword" id="confirm" placeholder="confirm password" />
                        </div>{
                            loading ?
                                <button type="submit" onClick={Signupbutton} class="w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans"> Enregistrement...</button>
                                :
                                <button type="submit" onClick={Signupbutton} class="w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans">Enregistrer</button>
                        }

                        {/* <button type="submit" class="w-full mt-6 mb-3 bg-indigo-100 rounded-lg px-4 py-2 text-lg text-gray-800 tracking-wide font-semibold font-sans">Login</button> */}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register

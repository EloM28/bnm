'use client'
import React from 'react'

const RegisterPage = () => {
  return (
            <section className="bg-slate-700 bg-opacity-25 ">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="md:text-xl lg:text-3xl font-bold leading-tight tracking-tight text-slate-700 md:text-2xl text-center">
                                Register in to your account
                            </h1>
                            <form className="space-y-4 md:space-y-[2.5rem] " action="#">
                            <div>
                                    <input type="text" name="nom" id="email" className="bg-white border border-slate-700 text-slate-700 rounded-lg block w-full p-2.5 focus:outline-none placeholder:text-slate-700" placeholder="votre nom" required=""/>
                                </div>
                                <div>
                                    <input type="text" name="prenom" id="email" className="bg-white border border-slate-700 text-slate-700 rounded-lg block w-full p-2.5 focus:outline-none placeholder:text-slate-700" placeholder="votre prenom" required=""/>
                                </div>
                                <div>
                                    <input type="text" name="province" id="email" className="bg-white border border-slate-700 text-slate-700 rounded-lg block w-full p-2.5 focus:outline-none placeholder:text-slate-700" placeholder="votre province" required=""/>
                                </div>
                                <div>
                                    <input type="text" name="commmune" id="email" className="bg-white border border-slate-700 text-slate-700 rounded-lg block w-full p-2.5 focus:outline-none placeholder:text-slate-700" placeholder="votre commune" required=""/>
                                </div>
                                <div>
                                    <input type="text" name="zone" id="email" className="bg-white border border-slate-700 text-slate-700 rounded-lg block w-full p-2.5 focus:outline-none placeholder:text-slate-700" placeholder="votre zone" required=""/>
                                </div>
                                <div>
                                    <input type="text" name="colline" id="email" className="bg-white border border-slate-700 text-slate-700 rounded-lg block w-full p-2.5 focus:outline-none placeholder:text-slate-700" placeholder="votre colline" required=""/>
                                </div>
                                <div>
                                    <input type="text" name="email" id="email" className="bg-white border border-slate-700 text-slate-700 rounded-lg block w-full p-2.5 focus:outline-none placeholder:text-slate-700" placeholder="votre email" required=""/>
                                </div>
                                <div>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-white border border-slate-700 text-slate-700 rounded-lg block w-full p-2.5 focus:outline-none placeholder:text-slate-700" required=""/>
                                </div>
                                <button type="submit" className="w-full text-white bg-slate-700 hover:bg-slate-800 font-medium rounded-lg text-sm md:text-lg md:font-bold px-5 py-2.5 text-center">REGISTER</button>                            
                            </form>
                        </div>
                    </div>
                </div>
            </section>
  )
}
export default RegisterPage

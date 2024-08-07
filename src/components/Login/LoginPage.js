'use client'
import React from 'react'
import Link from 'next/link'

const LoginPage = () => {
  return (
            <section className="bg-slate-700 bg-opacity-25">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="md:text-xl lg:text-3xl font-bold leading-tight tracking-tight text-slate-700 md:text-2xl text-center">
                                Log in to your account
                            </h1>
                            <form className="space-y-4 md:space-y-[2rem] " action="#">
                                <div>
                                    <input type="text" name="nom" id="nom" className="bg-white border border-slate-700 text-slate-700 rounded-lg block w-full p-2.5 focus:outline-none placeholder:text-slate-700" placeholder="votre email" required=""/>
                                </div>
                                <div>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-white border border-slate-700 text-slate-700 rounded-lg block w-full p-2.5 focus:outline-none placeholder:text-slate-700" required=""/>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input 
                                            id="remember" 
                                            aria-describedby="remember" 
                                            type="checkbox" 
                                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 checked:bg-slate-700" 
                                            required=""
                                        />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label for="remember" className="text-slate-700 text-md font-bold">Remember me</label>
                                    </div>
                                    </div>
                                    <Link href="/ForgetPass" className="text-sm font-medium text-slate-700 hover:underline ">Forgot password?</Link>
                                </div>
                                <button type="submit" className="w-full text-white bg-slate-700 hover:bg-slate-800 font-medium rounded-lg text-sm md:text-lg md:font-bold px-5 py-2.5 text-center">LOG IN</button>
                                <div className='flex space-x-4'>
                                <p className="text-md font-light text-slate-700">
                                    Don’t have an account yet? 
                                </p>
                                <Link href="/RegisterPag" className="font-medium text-lg text-slate-700 hover:underline ">register</Link>
                                </div>                                
                            </form>
                        </div>
                    </div>
                </div>
            </section>
  )
}

export default LoginPage

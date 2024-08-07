'use client'
import React from 'react'

const ResetPassword = () => {
  return (
        <section className="bg-slate-700 bg-opacity-25 ">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <form className="space-y-4 md:space-y-[2.5rem] ">
                            <div>
                                <input type="password" name="password" id="password" className="bg-white border border-slate-700 text-slate-700 rounded-lg block w-full p-2.5 focus:outline-none placeholder:text-slate-700" placeholder="votre nouveau mot de pass" required=""/>
                            </div>
                            <button type="submit" className="flex mx-auto w-[30%] text-white bg-slate-700 hover:bg-slate-800 font-medium rounded-lg text-sm md:text-lg md:font-bold px-5 py-2.5">
                                <span className='mx-auto'>confirme</span>
                            </button>                            
                        </form>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default ResetPassword

'use client'
import { SignIn, SignUp, useUser } from '@clerk/nextjs';

import { useRouter } from 'next/navigation';



type AuthFormProps = {
  mode: "Login" | "Register";
};

const AuthForm = ({ mode }: AuthFormProps)=> {
  const router = useRouter()
  const isRegister = mode==="Register"
  const {isLoaded,isSignedIn} = useUser()

  // if(isLoaded && isSignedIn) {
  //   return router.push("/dashboard")
  // }
  return (
   <div className="min-h-screen w-full bg-[url('/login_bg.png')] bg-cover bg-no-repeat text-slate-800 p-4 md:p-6 lg:p-8 flex items-center justify-center font-sans ">
      <div className='w-full flex justify-center py-2'>
      {
        isRegister ? (
        <>
         <SignUp routing='path' path='/register' signInUrl='/login ' fallbackRedirectUrl= "/dashboard" />
        </>
      ):
      (
      <>
         <SignIn routing='path' path='/login' signUpUrl='/register ' fallbackRedirectUrl= "/dashboard" />
      </>
    )
      }
    </div>
    </div>
  )
}

export default AuthForm

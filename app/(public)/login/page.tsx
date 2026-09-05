import AuthForm from '@/Components/Auth/AuthForm'
import { SignIn } from "@clerk/nextjs";
const page = () => {
  return (
    <>
       <AuthForm mode="Login"/>
       <SignIn />
    </>
    
  )
}

export default page

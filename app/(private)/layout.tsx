import Navbar from "@/Components/Navbar";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";


export default async function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const router = useRouter()
   const { isAuthenticated } = await auth();

  if (!isAuthenticated) {
    redirect("/login");
  }

  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
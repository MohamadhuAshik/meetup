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
    <div className="h-screen overflow-y-scroll bg-slate-50 text-slate-900 flex flex-col font-sans bg-[url('/layout_bg.png')] bg-cover bg-center bg-no-repeat">
      <Navbar />
      {children}
    </div>
  );
}
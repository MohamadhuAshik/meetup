import Navbar from "@/Components/Navbar";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import { useRouter } from "next/router";

export default async function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter()
   const { isAuthenticated } = await auth();

  if (!isAuthenticated) {
    router.push("/login");
  }

  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
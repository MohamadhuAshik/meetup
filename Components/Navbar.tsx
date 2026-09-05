"use client";
import { UserButton } from "@clerk/nextjs";
import { AstroidIcon, HistoryIcon, LayoutDashboardIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { dummyUser } from "@/app/assets/asset";

const navBarNavigation = [
  {
    id: 1,
    path: "/dashboard",
    label: "Dashboard",
    icon: <LayoutDashboardIcon className="w-3.5 h-3.5" />,
  },
  {
    id: 2,
    path: "/sessions",
    label: "Sessions",
    icon: <HistoryIcon className="w-3.5 h-3.5" />,
  },
  {
    id: 3,
    path: "/pricing",
    label: "Pricing",
    icon: <AstroidIcon className="w-3.5 h-3.5" />,
  },
];

const Navbar = () => {
  const pathName = usePathname();
  const { isSignedIn, user } = { user: dummyUser, isSignedIn: true };
  const userName =
    user?.fullName ||
    user?.firstName ||
    user?.primaryEmailAddress?.emailAddress?.split("@")[0] ||
    "user";
  return (
    <>
      <header className="w-full max-w-305 mx-auto bg-white/90 backdrop-blur xl:rounded-b-xl sticky top-0 z-40 px-6 py-4 flex items-center justify-between border border-slate-200">
        <div className="flex items-center  gap-6">
          <Link href="/dashboard" className="flex items-center gap-1.5">
            <Image
              src="/logo.svg"
              alt="MeetUp Logo"
              className="size-6.5"
              width={100}
              height={100}
            />
            <span className="text-2xl font-medium tracking-tight text-slate-900 flex items-center">
              MeetUp <span className="text-primary">.</span>
            </span>
          </Link>
          {isSignedIn && (
            <nav className="hidden md:flex items-center gap-1.5 ml-2">
              {navBarNavigation?.map((data) => (
                <Link
                  key={data?.id}
                  href={data?.path}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all
               flex items-center gap-1.5 
               ${pathName === data?.path ? "ring ring-blue-100 bg-blue-50 text-slate-800" : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"}  
            `}
                >
                  {data?.icon}
                  {data?.label}
                </Link>
              ))}
            </nav>
          )}
        </div>
        {/* Right side */}
        {isSignedIn && (
          <div className="flex items-center gap-4">
            <Link
              href="/sessions"
              className="md:hidden text-xs font-medium text-slate-600 hover:text-primary flex items-center gap-1"
            >
              <HistoryIcon className="w-4 h-4" />
              Sessions
            </Link>
            <span className="font-medium hidden sm:inline tracking-wide text-sm text-slate-700">
              Welcome {userName},
            </span>
            <UserButton afterSignOutUrl="/login" />
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;

import Navbar from "@/Components/Navbar"


export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen overflow-y-scroll bg-slate-50 text-slate-900 flex flex-col font-sans bg-[url('/layout_bg.png')] bg-cover bg-center bg-no-repeat">
      
      {children}
    </div>
  );
}
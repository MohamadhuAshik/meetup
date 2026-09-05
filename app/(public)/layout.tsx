import Navbar from "@/Components/Navbar"


export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      
      {children}
    </div>
  );
}
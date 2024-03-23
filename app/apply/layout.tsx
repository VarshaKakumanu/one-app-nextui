import SideNavbar from "@/components/sideNavbar";

export default function ApplyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className='flex flex-col items-center justify-center gap-4 py-8 md:py-10'>
      <div className='flex w-full text-center  '>
        <div>
          {" "}
          <SideNavbar />
        </div>
        {children}
      </div>
    </section>
  );
}

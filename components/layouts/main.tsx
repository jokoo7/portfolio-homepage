import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import AnimatePresenceLayout from "../animate-presence";

const DefaultLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Navbar />
      <div className="absolute inset-0 -z-50 w-full min-h-screen bg-[linear-gradient(to_right,#80808018_1px,transparent_1px),linear-gradient(to_bottom,#80808018_1px,transparent_1px)] bg-[size:18px_18px] [mask-image:radial-gradient(ellipse_50%_60%_at_50%_20%,#000_80%,transparent_100%)]"></div>
      <main className="mt-28">
        <AnimatePresenceLayout>{children}</AnimatePresenceLayout>
      </main>
      <Footer />
    </>
  );
};

export default DefaultLayout;

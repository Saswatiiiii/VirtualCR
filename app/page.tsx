import Navbar from "../components/landing/Navbar";
import Logo from "../components/landing/Logo";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080d1f]">
      <Navbar />

      <section
        id="home"
        className="min-h-[calc(100vh-80px)] flex items-center justify-center"
      >
        <Logo />
      </section>
    </main>
  );
}  
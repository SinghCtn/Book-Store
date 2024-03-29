import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <div className="h-screen bg-[url(books1.jpg)] bg-cover bg-[#272727]">
        <div className="h-screen bg-cover bg-[#44318d]/80 relative">
          <NavBar />
          <Hero />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;

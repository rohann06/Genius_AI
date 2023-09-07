import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className=" flex">

      
      <div className=" hidden md:block bg-[#2b2e3a] h-screen w-[16%]">
        <Navbar/>
      </div>
      <div>

      </div>

      {/* Mobile Navbar */}
      <div className=" md:hidden block bg-[#2b2e3a] w-screen h-[80px]"></div>
    </div>
  );
}

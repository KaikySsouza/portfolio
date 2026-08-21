import { Outlet } from "react-router-dom";
import { FiSun } from "react-icons/fi";
import { FaMoon } from "react-icons/fa";
import { Link } from "react-scroll";
import MouseScrollIcon from "../../pages/Home/MouseScroll";
function Navbar() {
  return (
    <div>
      <div>
        <nav className="flex justify-baseline gap-[63vh]   fixed items-center bg-[#0A0E14] font-sans">
          <h1 className="m-5 text-[25px] text-white font-bold">
            <span className="text-[#22C55E]">&lt;</span>/Kaiky.{" "}
            <span className="text-[#22C55E]">&gt;</span>
          </h1>

          <li>
            <ul className="inline-flex  text-[20px] text-white space-x-8">
              <li className="   p-2 rounded-2xl cursor-pointer">
                <Link to="home" smooth={true} duration={900} offset={-500}>Home</Link>
              </li>
              <li className="  p-2 rounded-2xl cursor-pointer">
                <Link to="about" smooth={true} duration={800} offset={-80}>
                  About
                </Link>
              </li>
              <li className="  p-2 rounded-2xl cursor-pointer">
                <Link to={"/project"}>Project</Link>
              </li>
              <li className="  p-2 rounded-2xl cursor-pointer">
                <Link to={"/contact"}>Contact</Link>
              </li>
            </ul>
          </li>
          <button>
            <FiSun className="text-white text-[3vh] m-0" />
          </button>
        </nav>
      </div>

       <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
        <MouseScrollIcon targetId="sobre" />
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Navbar;

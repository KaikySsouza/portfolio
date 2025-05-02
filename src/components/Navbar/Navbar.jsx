import { Outlet, Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="text-end justify-end  bg-gray-800 ]">
        <ul className="inline-flex space-x-10 m-[10px] text-[25px] text-orange-500">
          <li className=" hover:bg-orange-300 border-2 p-2 rounded-2xl cursor-pointer"><Link to={"/"}>Home</Link></li>
          <li className=" hover:bg-orange-300 border-2 p-2 rounded-2xl cursor-pointer"><Link to={"/about"}>About</Link></li>
          <li className="hover:bg-orange-300 border-2 p-2 rounded-2xl cursor-pointer"><Link to={"/project"}>Project</Link></li>
          <li className="hover:bg-orange-300 border-2 p-2 rounded-2xl cursor-pointer"><Link to={"/contact"}>Contact</Link></li>
        </ul>
      </nav>

      <main><Outlet/></main>
    </div>
  );
}

export default Navbar;

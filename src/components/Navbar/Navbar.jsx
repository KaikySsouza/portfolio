import { Outlet, Link } from "react-router-dom";

function Navbar() {


  return (
    <div>
    
      <div>
      <nav className="flex justify-between items-center">
        <li className="m-5 text-[15px]">  &lt;/Kaiky&gt;</li>
        <ul className="inline-flex space-x-6 m-[10px] text-[15px] text-[#00000]">
          <li className=" hover:bg-[#c8d4e4] border-2 p-2 rounded-2xl cursor-pointer"><Link to={"/"}>Home</Link></li>
          <li className=" hover:bg-[#c8d4e4] border-2 p-2 rounded-2xl cursor-pointer"><Link to={"/about"}>About</Link></li>
          <li className="hover:bg-[#c8d4e4] border-2 p-2 rounded-2xl cursor-pointer"><Link to={"/project"}>Project</Link></li>
          <li className="hover:bg-[#c8d4e4] border-2 p-2 rounded-2xl cursor-pointer"><Link to={"/contact"}>Contact</Link></li>
        </ul>
      </nav>
</div>
      <main><Outlet/></main>
    </div>
  );
}

export default Navbar;

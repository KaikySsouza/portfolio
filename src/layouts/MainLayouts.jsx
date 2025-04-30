import Navbar from "../components/Navbar"   
function Layouts({children}) {


    return (
        <div>
           <Navbar />
           <main>{children}</main>

        </div>
    )
    
}

export default Layouts


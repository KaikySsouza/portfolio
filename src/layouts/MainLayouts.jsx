import Navbar from "../components/Navbar"   
function MainLayouts({children}) {


    return (
        <div>
           <Navbar />
           <main>{children}</main>

        </div>
    )
    
}

export default MainLayouts


import { PiSealCheckDuotone } from "react-icons/pi";
import { LuBrain } from "react-icons/lu";
import { FcIdea } from "react-icons/fc";
import Technology from "./HardSkills/Technology";
function About() {
  return (
    <div>
      <section name="about"  className="flex justify-baseline   h-screen gap-[35vh] bg-[#0A0E14] font-sans ">
        <div className="flex flex-col ml-[5vh]">
        <h1 className="text-[40px] text-white font-medium mb-5">Sobre mim<span className="text-[#22C55E] ">:</span></h1>

      <div className="w-[60vh] text-[18px] text-gray-400 mb-10 ">
        <p className="mb-5">Sou desenvolvedor Full Stack apaixonado por tecnologia 
          e por criar soluções que realmente fazem a diferença</p>
        <p>Atualmente estou cursando <strong>Ciências da Computação </strong>
        e trabalhando constantemente para evoluir minhas habilidades e tregar projetos de qualidade</p>

        </div>


        <div className="text-gray-400 flex flex-col  ">
          
          <p className="space-x-2"> <PiSealCheckDuotone className="inline "/><strong>Foco em performance e boas práticas</strong></p>
          <p className="space-x-2"> <LuBrain className="inline  "   /><strong>Sempre aprendendo algo novo</strong></p>
          <p className="space-x-2"> <FcIdea  className="inline "/><strong>Gosto de transformar ideias em soluções</strong></p>
        </div>


        <div className="flex   text-[26px] mt-10">

        <Technology />  
        </div>
     
        </div>

          
          
         <div>
        <img className="rounded-3xl" src="images/ScreenShoot_AbraMulti.jpg" alt="img.jpg" width={400} />
        </div>




        
      </section>
      
     

    
    </div>
  );
}

export default About;

import { GoDownload } from "react-icons/go";
import { FaGithub, FaInstagram} from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { TbBrandLinkedin } from "react-icons/tb";
import { BsMouse2 } from 'react-icons/bs';
import MouseScrollIcon from "./MouseScroll";
function Home() {
  // const maquina = document.getElementById("maquina");

  // // eslint-disable-next-line no-undef
  // const typewriter = new Typewriter(maquina, {
  //   autoStart: false,
  //   loop: true,
  //   delay: 75,
  // });

  // // eslint-disable-next-line no-undef
  // typewriter

  //   .typeString("Meu nome é </Kaiky>")
  //   .pauseFor(2500)
  //   .deleteChars(20)
  //   .typeString("Seja bem vindo ao meu portfolio")
  //   .pauseFor(2500)
  //   .start();


  return (
    <div className="flex items-center h-screen bg-[#0A0E14] font-sans ">
      <section name="home" className="mt-10">
        <div className=" flex justify-baseline space-x-[85vh] ml-[5vh] ">
          <div>
        <div>
          <h1 className="text-[25px] text-[#22C55E]">Bem vindo!, meu nome é:</h1>
          <p className="text-[70px] text-white font-medium">Kaiky Souza<span className="text-[#22C55E]">.</span></p>
        </div>

        <h2 className="text-[25px] text-gray-400"> Desenvolvedor Full Stack</h2>

        <div className="mb-10">
          <p className="text-[15px] text-gray-400">Construindo experiências digitais <br /> modernas, rápidas e responsivas</p>
        </div>

        <div className=" flex justify-baseline space-x-10 text-center items-center ">
        <button className="bg-[#22C55E] p-4 w-[18vh] rounded-2xl cursor-pointer text-white"> Ver projetos</button>
         <button className="rounded-2xl p-4  border-white border-1 cursor-pointer text-white  flex justify-center w-[18vh]  ">   <a className="flex" href="public/pdf/Kaiky_Souza_Curriculo.pdf"  target="_blank" rel="noopener noreferrer" >Baixar CV <GoDownload  className="m-1"/></a>  </button> 
      
        </div>
     
      <div className="flex justify-baseline gap-8 text-[26px] absolute bottom-20  " >
       <a href="https://github.com/KaikySsouza" target="_blank" rel="noopener noreferrer"><FaGithub className="text-white"/></a> 
        <a href="https://www.linkedin.com/in/kaiky-souza-7202a5265/" target="_blank" rel="noopener noreferrer"><TbBrandLinkedin  className="text-white"/></a> 
        <a href="https://www.instagram.com/kaiky_sl/" target="_blank" rel="noopener noreferrer"><FaInstagram className="text-white"/></a>
        <a href="mailto:kaikybelga@gmail.com?subject=Contato%20pelo%20portfólio&body=Olá,%20vi%20seu%20portfólio%20e%20gostaria%20de%20entrar%20em%20contato." aria-label="Enviar e-mail">
        <i class="fa-solid fa-envelope"><MdOutlineEmail className="text-white"/></i>
        </a>
        
       </div>
 
        
 
        </div>
        <img className="rounded-3xl" src="images/Perfil-png.png" alt="img.jpg" width={400} />
      </div>
      
      </section>
   


    

    </div>
  );
}

export default Home;

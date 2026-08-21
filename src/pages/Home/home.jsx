import { GoDownload } from "react-icons/go";
import { FaGithub, FaInstagram} from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { TbBrandLinkedin } from "react-icons/tb";
import Typewriter from 'typewriter-effect/dist/core';
import { useEffect, useRef} from "react";
function Home() {

    const maquinaRef = useRef(null);
  const typewriterRef = useRef(null);
  useEffect(() => {
    if (!maquinaRef.current) return;

    typewriterRef.current = new Typewriter(maquinaRef.current, {
      autoStart: true,
      loop: true,
      delay: 75,  
    });

    typewriterRef.current
      .typeString("Desenvolvedor Full Stack ")
      .pauseFor(2500)
      .deleteChars(20)
      .start();

    // cleanup: evita instâncias duplicadas (React StrictMode roda o efeito 2x em dev)
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      const el = maquinaRef.current;
      if (el) el.innerHTML = "";
      typewriterRef.current = null;
    };
  }, []);


  return (
    <div className="flex items-center min-h-screen bg-[#0A0E14]   ">
      <section name="home" className="mt-10">
        <div className=" flex justify-baseline space-x-[85vh] ml-[5vh] mt-8">
          <div>
        <div>
          <h1 className="text-[25px] text-[#22C55E] overflow-hidden mb-3">Bem vindo!, meu nome é:</h1>
          <p className="text-[70px] text-white font-medium  leading-[1.1] overflow-y-hidden mb-5 ">Kaiky Souza<span className="text-[#22C55E]">.</span></p>
        </div>

        <h2 id="maquina" ref={maquinaRef} className="  text-gray-400 text-[25px] leading-[1.2] mb-3"> </h2>

        <div className="mb-10">
          <p className="text-[15px] text-gray-400">Construindo experiências digitais <br /> modernas, rápidas e responsivas</p>
        </div>

        <div className=" flex justify-baseline space-x-10 text-center items-center ">
        <button className="bg-[#22C55E] p-4 w-[20vh] rounded-2xl cursor-pointer text-white"> Ver projetos</button>
        <a   className="rounded-2xl p-4 border-white border-1 cursor-pointer text-white flex justify-center items-center gap-2 w-[20vh]" href="public/pdf/Kaiky_Souza_Curriculo.pdf"  target="_blank" rel="noopener noreferrer" >Baixar CV  <GoDownload/></a>  
      
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

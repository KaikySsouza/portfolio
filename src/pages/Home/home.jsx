import { GoDownload } from "react-icons/go";


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
    <div>
      <section className="flex items-center h-screen bg-[#0A0E14] font-sans ">
        <div className=" flex justify-baseline space-x-[85vh] ml-[5vh]">
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
        <button className="rounded-2xl p-4  border-white border-1 cursor-pointer text-white flex justify-center w-[18vh]  ">Baixar CV <GoDownload  className="m-1"/>
</button>
        </div>
        </div>
        <img className="rounded-3xl" src="images/ScreenShoot_AbraMulti.jpg" alt="img.jpg" width={300} />
      </div>
      
      </section>
    </div>
  );
}

export default Home;

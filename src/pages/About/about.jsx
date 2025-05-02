import SoftSkills from "./SoftSkills/Softskills";
import HardSkills from "./HardSkills/HardSkills";
function About() {
  return (
    <div>
      <section className="flex items-center justify-center min-h-screen">
        <div className="flex">
          <img
            width={510}
           
            src="/images/solo.img2.jpg"
            alt="solo.png"
            className="rounded-2xl m-20 hidden md:block"
          />
          <div className="bg-[#1F2937] p-8 rounded-2xl  mx-auto break-words ">
            <h2 className="text-[25px] w-[60vh] font-light m-6 text-justify text-gray-100 leading-relaxed ">
              Sou um desenvolvedor web focado em criar interfaces modernas,
              dinâmicas e intuitivas. Tenho sólida experiência com React.js,
              JavaScript, HTML e CSS, o que me permite desenvolver aplicações
              responsivas, acessíveis e com ótima usabilidade. No back-end,
              utilizo Node.js para criar APIs eficientes e escaláveis. Estou em
              constante aprendizado, sempre buscando evoluir como desenvolvedor
              full stack e aplicar soluções criativas aos desafios do dia a dia.
              Fora do ambiente de desenvolvimento, gosto de jogar basquete,
              treinar na academia e aproveitar momentos de lazer, atividades que
              fortalecem meu foco, disciplina e equilíbrio — qualidades que
              também aplico no meu trabalho.
            </h2>
          </div>
        </div>
      </section>
      
    <HardSkills/>

    <SoftSkills/>
    </div>
  );
}

export default About;

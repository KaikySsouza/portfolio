function About() {
  return (
    <div>
      <section className="flex items-center justify-center min-h-screen">
        <div className="flex">
          <img
            width={510}
            src="/images/solo.img2.jpg"
            alt="solo.png"
            className="rounded-2xl m-20"
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

      <section className="flex ">
        <div className="block">
          <h2 className="text-center text-[45px] text-white">Habilidades e Serviços</h2>
          <p className="text-center text-[25px] text-white">
            Estas são minhas habilidades de trabalho e serviços que realizei.
          </p>
          <div className="flex text-center items-center justify-center  mt-3 ">

            <div className="m-20 bg-[#1a1b26] p-[30px] rounded-2xl">
              <img src="/icons/react-original.svg" alt="react.svg" width={110} className="ml-[33%] " />
              <span className="text-[25px] text-white">React</span>
              <p className="text-[15px] text-white">
                React.js para desenvolvimento de front-end e interface de usuário.
              </p>
            </div>

            <div className="m-20 bg-[#1a1b26] p-[30px] rounded-2xl">
              <img src="/icons/nodejs-original.svg" alt="node.svg" width={110} className="ml-[33%] " />
              <span className="text-[25px] text-white">Node.JS e Express.js</span>
              <p className="text-[15px] text-white">
                Node.JS e Express.js para desenvolvimento de APIs de backend.
              </p>
            </div>

            <div className="m-20 bg-[#1a1b26] p-[30px] rounded-2xl">
              <img src="/icons/mongodb-plain-wordmark.svg" alt="mongodb.svg" width={110} className="ml-[33%] " />
              <span className="text-[25px] text-white">Banco de dados MongoDB</span>
              <p className="text-[15px] text-white">
                MongoDB para gerenciamento de banco de dados da API de backend.
              </p>
            </div>

            <div className="m-20 bg-[#1a1b26] p-[30px] rounded-2xl">
              <img src="/icons/tailwindcss-original.svg" alt="tailwind.svg" width={110} className="ml-[33%]" />
              <span className="text-[25px] text-white">TailwindCSS e ShadcnUI</span>
              <p className="text-[15px] text-white">TailwindCSS é um framework CSS que prioriza a utilidade.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;

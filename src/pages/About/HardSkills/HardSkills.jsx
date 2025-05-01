function HardSkills() {
  return (
    <div>
      <section className="block">
        <div className="text-center justify-center">
          <h2 className="text-[45px] text-white">Habilidades e Serviços</h2>
          <p className=" text-[25px] text-white">
            Estas são minhas habilidades de trabalho e serviços que realizei.
          </p>
        </div>

        <div className="flex flex-wrap text-center items-center justify-center gap-25  mt-25">
          <div className="sm:w-1/2 md:w-1/4  bg-[#1a1b26] p-[77px] rounded-2xl shrink-0 ">
            <img
              src="/icons/icons8-javascript.svg"
              alt="javascript.svg"
              width={110}
              className="block mx-auto items-center justify-center  "
            />
            <span className="text-[25px] text-white">JavaScript</span>
            <p className="text-[15px] text-white">
              JavaScript para desenvolvimento web, lógica de programação e
              interatividade no front-end e back-end.
            </p>
          </div>

          <div className="sm:w-1/2 md:w-1/4  bg-[#1a1b26] p-[65px] rounded-2xl shrink-0 ">
            <img
              src="/icons/icons8-texto-datilografado.svg"
              alt="typescript.svg"
              width={110}
              className="block mx-auto items-center justify-center "
            />
            <span className="text-[25px] text-white">TypeScript</span>
            <p className="text-[15px] text-white">
              TypeScript para desenvolvimento web com tipagem estática, maior
              segurança e escalabilidade no front-end e back-end.
            </p>
          </div>

          <div className=" sm:w-1/2  md:w-1/4   bg-[#1a1b26] p-[77px] rounded-2xl shrink-0">
            <img
              src="/icons/react-original.svg"
              alt="react.svg"
              width={110}
              className="block mx-auto items-center justify-center "
            />
            <span className="text-[25px] text-white">React</span>
            <p className="text-[15px] text-white">
              React.js para desenvolvimento de front-end e interface de usuário.
            </p>
          </div>

          <div className="sm:w-1/2 md:w-1/4    bg-[#1a1b26] p-[77px] rounded-2xl shrink-0">
            <img
              src="/icons/nodejs-original.svg"
              alt="node.svg"
              width={110}
              className="block mx-auto items-center justify-center"
            />
            <span className="text-[25px] text-white">Node.JS e Express.js</span>
            <p className="text-[15px] text-white">
              Node.JS e Express.js para desenvolvimento de APIs de backend.
            </p>
          </div>

          <div className="sm:w-1/2 md:w-1/4  bg-[#1a1b26] p-[77px] rounded-2xl shrink-0">
            <img
              src="/icons/mongodb-plain-wordmark.svg"
              alt="mongodb.svg"
              width={110}
              className="block mx-auto items-center justify-center "
            />
            <span className="text-[25px] text-white">
              Banco de dados MongoDB
            </span>
            <p className="text-[15px] text-white">
              MongoDB para gerenciamento de banco de dados da API de backend.
            </p>
          </div>

          <div className="sm:w-1/2 md:w-1/4  p-[77px] bg-[#1a1b26] rounded-2xl shrink-0">
            <img
              src="/icons/tailwindcss-original.svg"
              alt="tailwind.svg"
              width={110}
              className="block mx-auto items-center justify-center"
            />
            <span className="text-[25px] text-white">
              TailwindCSS e ShadcnUI
            </span>
            <p className="text-[15px] text-white">
              TailwindCSS é um framework CSS que prioriza a utilidade.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HardSkills;

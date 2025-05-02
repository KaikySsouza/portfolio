function SoftSkills() {
  return (
    <div>
      <section className="block">
        <div class="w-full flex justify-center">
          <div class="w-1/2 border-t border-gray-500 mt-[10%]"></div>
        </div>
        <div className="text-center justify-center ">
          <h3 className="text-[45px] text-white mt-[5%] ">
            Habilidades Comportamentais
          </h3>
          <p className="text-[25px] text-white">
            Estas são minhas habilidades comportamentais que desenvolvi ao longo
            da minha trajetória
          </p>
        </div>

        <div className="flex flex-wrap text-center items-center justify-center gap-25  mt-25">
          <div className="sm:w-1/2 md:w-1/4  bg-[#1a1b26] p-[77px] rounded-2xl shrink-0 ">
            <img
              width={110}
              src="icons/softskills.icons/brain.png"
              alt="brain.png"
              className="block mx-auto items-center justify-center  "
            />
            <span className="text-[25px] text-white">Aprendizado Rápido</span>
            <p className="text-[15px] text-white">
              Assimilo novas informações com facilidade e aplico rapidamente na
              prática.
            </p>
          </div>

          <div className="sm:w-1/2 md:w-1/4  bg-[#1a1b26] p-[77px] rounded-2xl shrink-0 ">
            <img
              width={110}
              src="icons/softskills.icons/thinking.png"
              alt="thinking.png"
              className="block mx-auto items-center justify-center  "
            />
            <span className="text-[25px] text-white">Pensamento Crítico</span>
            <p className="text-[15px] text-white">
              Analiso situações de forma lógica e estratégica para tomar
              melhores decisões.
            </p>
          </div>

          <div className="sm:w-1/2 md:w-1/4  bg-[#1a1b26] p-[77px] rounded-2xl shrink-0 ">
            <img
              width={110}
              src="icons/softskills.icons/handshake.png "
              alt="hand.png"
              className="block mx-auto items-center justify-center  "
            />
            <span className="text-[25px] text-white">Trabalho em Equipe</span>
            <p className="text-[15px] text-white">
              Colaboro de forma produtiva, buscando objetivos comuns com empatia
              e respeito.
            </p>
          </div>

          <div className="sm:w-1/2 md:w-1/4  bg-[#1a1b26] p-[77px] rounded-2xl shrink-0">
            <img
              width={110}
              src="icons/softskills.icons/alert.png"
              alt="alert.png"
              className="block mx-auto items-center justify-center  "
            />
            <span className="text-[25px] text-white">Comunicação Eficaz</span>
            <p className="text-[15px] text-white">
              Me expresso com clareza e escuto com atenção para garantir
              compreensão mútua.
            </p>
          </div>

          <div className="sm:w-1/2 md:w-1/4  bg-[#1a1b26] p-[77px] rounded-2xl shrink-0 ">
            <img
              width={110}
              src="icons/softskills.icons/chameleon.png"
              alt="chameleon.png"
              className="block mx-auto items-center justify-center  "
            />
            <span className="text-[25px] text-white">Adaptabilidade</span>
            <p className="text-[15px] text-white">
              Me ajusto com facilidade a mudanças, mantendo produtividade e
              foco.
            </p>
          </div>

          <div className="sm:w-1/2 md:w-1/4  bg-[#1a1b26] p-[77px] rounded-2xl shrink-0 ">
            <img
              width={110}
              src="icons/softskills.icons/ampulheta.png"
              alt="ampulheta.png"
              className="block mx-auto items-center justify-center  "
            />
            <span className="text-[25px] text-white">Gestão do Tempo</span>
            <p className="text-[15px] text-white">
              Organizo minhas tarefas com eficiência para cumprir prazos e
              aumentar a produtividade.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SoftSkills;

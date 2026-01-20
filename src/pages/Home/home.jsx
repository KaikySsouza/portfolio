import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Cloud, renderSimpleIcon } from "react-icon-cloud";
import { siJavascript, siNextdotjs, siReact, siBootstrap, siHtml5, siCss, siNodedotjs, siTailwindcss, siExpress, siFigma,
 siGithub, siGit, siSequelize, siMysql, siMongodb, siFirebase, siClickup, 
 siTypescript} from "simple-icons";

function Home() {
  
  const maquina = document.getElementById('maquina')

  // eslint-disable-next-line no-undef
  const typewriter = new Typewriter(maquina, {
   autoStart: true,
   loop: true,
   delay: 75,
});


// eslint-disable-next-line no-undef
typewriter
   
  .typeString('Meu nome é </Kaiky>')
  .pauseFor(2500)
  .deleteChars(20)
  .typeString('Seja bem vindo ao meu portfolio')
  .pauseFor(2500)
  .start()


  const icons = [siJavascript,siTypescript, siNextdotjs, siReact, siBootstrap, siHtml5, siCss, siNodedotjs, siTailwindcss,
    siExpress, siFigma, siGithub, siGit, siSequelize, siMysql, siMongodb, siFirebase, siClickup
  ].map((icon) => {
  return renderSimpleIcon({
    icon,
    size: 62,
    aProps: {
      onClick: (e) => e.preventDefault()
    }
  })
})






  return (
    <div>

      <section className="flex text-left items-center justify-center min-h-screen ">
        <div className="flex">
          <div className="">
            <h1 id="maquina" className="text-[35px] mb-4 m-5"> </h1>
            <p className="text-[25px] text-justify w-[120vh] justify-between m-2 ">
              Sou desenvolvedor front-end, e este portfólio mostra um pouco do
              que eu posso construir com código e criatividade.Sou estudante de
              Ciência da Computação, tenho 19 anos e sou apaixonado por carreira
              com foco em criar interfaces modernas e responsivas,
              tecnologia.Estou construindo minha carreira sempre buscando
              aplicar boas práticas de usabilidade e performance.
            </p>

            <div className=""> 
            <div className="bg-[#1a1b268a] hover:bg-[#19212c]  m-2 w-[37vh] text-center p-[10px] rounded-2xl">
              <a href="youtube.com.br">Currículo</a>
            </div>

            <div className="inline-flex  space-x-8 mt-[5vh] m-2">
              <div className="bg-[#1a1b268a] w-[95px] h-[52px] rounded-2xl hover:bg-[#19212c]">
              <a
                href="https://github.com/KaikySsouza"
                target="_blank"
                rel="noopener noreferrer" className="p-6"
              >
                <FontAwesomeIcon icon={faGithub} size="3x" className="mt-1" />
              </a>
              </div>
              <div className="bg-[#1a1b268a] w-[95px] h-[52px] rounded-2xl hover:bg-[#19212c]">
              <a
                href="https://www.linkedin.com/in/kaiky-souza-7202a5265/"
                target="_blank"
                rel="noopener noreferrer" className="p-7"
              >
                <FontAwesomeIcon icon={faLinkedin} size="3x" className="mt-1"/>
              </a>
              </div>
              </div>
            </div>
          </div>
          <div className="">
             <Cloud>
    {icons}
    <a
      href="https://emojipedia.org/globe-showing-americas/"
      target="_blank"
      rel="noopener"
    >
      <img
        height="42"
        width="42"
        alt="A globe"
        src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/285/globe-showing-americas_1f30e.png"
      />
    </a>
  </Cloud>
          </div> 
        </div>
      </section>

    </div>
  );
}

export default Home;

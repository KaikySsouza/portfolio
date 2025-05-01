import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Home() {
  return (
    <div>
      <section className="flex items-center justify-center min-h-screen ">
        <div className=" flex ">
          <div className="bg-[#1F2937] p-8 rounded-2xl  mx-auto break-words ">
            <h1 className="text-[40px] text-start ml-3.5  text-orange-500 ">
              Olá! Meu nome é Kaiky
            </h1>
            <p className=" text-[25px] w-[60vh] font-light m-5 text-justify text-gray-100 leading-relaxed">
              Sou desenvolvedor front-end, e este portfólio mostra um pouco do
              que eu posso construir com código e criatividade.Sou estudante de
              Ciência da Computação, tenho 19 anos e sou apaixonado por carreira
              com foco em criar interfaces modernas e responsivas,
              tecnologia.Estou construindo minha carreira sempre buscando
              aplicar boas práticas de usabilidade e performance.
            </p>
            <div className="ml-3.5 space-x-8 ">
              <a
                href="https://github.com/KaikySsouza"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} size="3x" />
              </a>
              <a
                href="https://www.linkedin.com/in/kaiky-souza-7202a5265/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} size="3x" />
              </a>
            </div>
          </div>
          <div className="ml-[190px]">
            <img
              width={510}
              src="/images/solo.img2.jpg"
              alt="solo.png"
              className="rounded-2xl mt-6"
            />
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;

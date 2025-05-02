import Form from './Form/Formulario'
function Contact() {
  return (
    <div className="text-center justify-center min-h-screen flex flex-col">
      <h1 className="text-[30px]  text-orange-500 m-5">Vamos Conversar?</h1>
      <p className="text-[25px] text-white">
        Tem uma ideia, projeto ou oportunidade? Ficarei feliz em conversar. Me
        mande uma mensagem e responderei o quanto antes!
      </p>
        
        <Form/>

    </div>
  );
}

export default Contact;

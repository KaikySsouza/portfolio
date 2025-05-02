function Form() {
    return (
        <div className="flex items-center justify-center mt-[5%] bg-[#1F2937] max-w-md mx-auto p-20 rounded-2xl ">
            <form action={"https://formspree.io/f/xyzwejdk"} method="POST" className="flex-col flex">
                <h1 className="text-orange-500 text-[35px] mb-5">Contato</h1>
                <label className="flex-col flex text-start text-white text-[20px]">
                    Nome:
                    <input type="text" name="name" placeholder="Digite seu nome" required className="border-none bg-white text-black p-2 w-[300px] placeholder-black mt-2 mb-2 rounded-2xl"/>
                </label>


                <label className="flex-col flex text-start text-white text-[20px]">
                    E-mail:
                    <input type="email" name="email" placeholder="Digite seu e-mail" required className="border-none bg-white text-black p-2 w-[300px] placeholder-black mt-2 mb-2 rounded-2xl"/>
                </label>


                <label for="mensagem" className="flex-col flex text-start text-white text-[20px]">
                    Mensagem:
                    <textarea for="mensagem" typeof="text" name="message"  placeholder="Digite sua mensagem" required  className="border-none bg-white text-black p-2 w-[300px] placeholder-black mt-2 mb-2 rounded-2xl"/>
                </label>

                <button type="submit" className="text-[25px] hover:bg-orange-300 border-2 p-2 rounded-2xl cursor-pointer text-orange-500 mt-5">Enviar</button>
            </form>
        </div>
    )
}

export default Form
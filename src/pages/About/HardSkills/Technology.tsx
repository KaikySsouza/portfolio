import { 
  SiReact, 
  SiTypescript, 
  SiNestjs, 
  SiNodedotjs, 
  SiExpress, 
  SiTailwindcss, 
  SiPrisma, 
  SiPostgresql, 
    SiSequelize
} from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io5';
export default function Technology(){
    return(
        <div >
            <h1 className="text-white ">Tecnologias</h1>

            <div className="text-white text-[20px]">
                <button className=" border-gray-400 border-1 p-2 m-2 rounded-2xl hover:bg-[#8482822e]"><IoLogoJavascript className="text-yellow-300  m-2 inline"/>JavaScript</button>
                <button className=" border-gray-400 border-1 p-2 m-2 rounded-2xl hover:bg-[#8482822e]"><SiTypescript  className='inline m-2 text-blue-400'/> TypeScript</button>
                <button className=" border-gray-400 border-1 p-2 m-2 rounded-2xl hover:bg-[#8482822e]"><SiReact  className='inline m-2 text-[#61DAFB]'/> React</button>
                <button className=" border-gray-400 border-1 p-2 m-2 rounded-2xl hover:bg-[#8482822e]"><SiNestjs className='inline m-2 text-red-500' />Nest.js</button>
                <button className=" border-gray-400 border-1 p-2 m-2 rounded-2xl hover:bg-[#8482822e]"><SiNodedotjs className='inline m-2 text-green-500' />Node.js</button><br />
                <button className=" border-gray-400 border-1 p-2 m-2 rounded-2xl hover:bg-[#8482822e]"><SiExpress className='inline m-2' />Express</button>
                <button className=" border-gray-400 border-1 p-2 m-2 rounded-2xl hover:bg-[#8482822e]"><SiTailwindcss  className='inline m-2 text-[#06B6D4]'/>Tailwind</button>
                <button className=" border-gray-400 border-1 p-2 m-2 rounded-2xl hover:bg-[#8482822e]"><SiPrisma className='inline m-2 text-[#2D3748]' />Prisma</button>
                <button className=" border-gray-400 border-1 p-2 m-2 rounded-2xl hover:bg-[#8482822e]"><SiPostgresql  className='inline m-2 text-[#4169E1]'/>PostgreSQL</button>
                <button className=" border-gray-400 border-1 p-2 m-2 rounded-2xl hover:bg-[#8482822e]"><SiSequelize  className='inline m-2 text-[#2496ED]'/>Sequelize</button>
            </div>
        </div>
    )
}